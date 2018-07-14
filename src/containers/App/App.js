// Vendor
import React, { Component, Fragment } from "react";
import { debounce, throttle } from "throttle-debounce";
// Components
import PlanetsTable from "./../PlanetsTable";
import PlanetDetails from "./../PlanetDetails";
import {
    Container,
    Dialog,
    Header,
    _Icons as Icons,
    Loading,
    SearchField,
    Spacing
} from "./../../components";
// Utils
import { API } from "./../../utils";

const PLANET_BASE_URL = "planets?format=json";

const getEndpoints = (total, pageMax, url) => {
    const endpoints = [];
    const pageCount = Math.ceil(total / pageMax);

    for (let i = 1; i < pageCount; i++) {
        endpoints.push(`${url}&page=${i + 1}`);
    }
    return endpoints;
};

class App extends Component {
    constructor() {
        super();
        this.debouncedQuery = debounce(500, this.sendQuery);
        this.throttledQuery = throttle(1000, this.sendQuery);
    }

    state = {
        error: "",
        isDialogOpen: false,
        isLoading: true,
        planets: [],
        query: "",
        selectedPlanet: {},
        tableKey: 0
    };

    async getData(url = PLANET_BASE_URL) {
        this._waitingFor = url;
        try {
            const res = await API.get(url);
            const { results, count, next } = res.data;
            let pagedResults = [];

            if (next) {
                const endpoints = getEndpoints(count, results.length, url);

                const allResults = await Promise.all(
                    endpoints.map(ep => API.get(ep))
                );

                pagedResults = allResults.reduce(
                    (acc, res) => acc.concat(res.data.results),
                    []
                );
            }
            if (this._waitingFor === url) {
                this.setState({
                    isLoading: false,
                    planets: [...results, ...pagedResults],
                    tableKey: this.state.tableKey + 1
                });
            }
        } catch (err) {
            this.setState({
                isLoading: false,
                error: "Hmm. Something went wrong.",
                tableKey: this.state.tableKey + 1
            });
        }
    }

    componentDidMount() {
        this.getData();
    }

    sendQuery = query => {
        this.getData(`${PLANET_BASE_URL}&search=${this.state.query}`);
    };

    searchPlanets = e => {
        this.setState(
            {
                query: e.target.value,
                isLoading: true,
                planets: []
            },
            () => {
                const { query } = this.state;
                if (query.length < 5) {
                    this.throttledQuery(query);
                } else {
                    this.debouncedQuery(query);
                }
            }
        );
    };

    openDialog = e => {
        this.setState({
            isDialogOpen: true,
            selectedPlanet: this.state.planets.find(
                planet => e.target.value === planet.url
            )
        });
    };

    closeDialog = () => {
        this.setState({
            isDialogOpen: false,
            selectedPlanet: {}
        });
    };

    render() {
        const {
            error,
            isDialogOpen,
            isLoading,
            planets,
            query,
            selectedPlanet,
            tableKey
        } = this.state;

        return (
            <Fragment>
                <Icons />

                <Header />

                <main>
                    <Container isCentered>
                        <Spacing>
                            <SearchField
                                labelText="Search planets by name"
                                name="planet-search"
                                onChange={this.searchPlanets}
                                value={query}
                            />
                        </Spacing>
                        {isLoading ? (
                            <Loading />
                        ) : (
                            <Fragment>
                                {(planets &&
                                    planets.length && (
                                        <PlanetsTable
                                            key={`planetTable${tableKey}`}
                                            planets={planets}
                                            viewDetails={this.openDialog}
                                        />
                                    )) ||
                                    ((error && <p>{error}</p>) || (
                                        <p>No results found</p>
                                    ))}
                            </Fragment>
                        )}

                        <Dialog
                            isOpen={isDialogOpen}
                            onRequestClose={this.closeDialog}
                            contentLabel="Planet Dialog"
                            title={selectedPlanet.name}
                        >
                            <PlanetDetails planet={selectedPlanet} />
                        </Dialog>
                    </Container>
                </main>
            </Fragment>
        );
    }
}

export default App;
