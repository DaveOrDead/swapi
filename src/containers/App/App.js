// Vendor
import React, { Component, Fragment } from "react";
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

const getEndpoints = (total, pageMax) => {
    const endpoints = [];
    const pageCount = Math.ceil(total / pageMax);

    for (let i = 1; i < pageCount; i++) {
        endpoints.push(`${PLANET_BASE_URL}&page=${i + 1}`);
    }
    return endpoints;
};

class App extends Component {
    state = {
        selectedPlanet: {},
        isDialogOpen: false,
        isLoading: true,
        planets: [],
        query: ""
    };

    async getData(url = PLANET_BASE_URL) {
        try {
            const res = await API.get(url);
            const { results, count, next } = res.data;
            let pagedResults = [];

            if (next) {
                const endpoints = getEndpoints(count, results.length);

                const allResults = await Promise.all(
                    endpoints.map(ep => API.get(ep))
                );

                pagedResults = allResults.reduce(
                    (acc, res) => acc.concat(res.data.results),
                    []
                );
            }
            this.setState({
                isLoading: false,
                planets: [...results, ...pagedResults]
            });
        } catch (err) {
            console.log(err);
        }
    }

    componentDidMount() {
        this.getData();
    }

    searchPlanets = e => {
        this.setState(
            {
                query: e.target.value,
                isLoading: true,
                planets: []
            },
            () => {
                this.getData(`${PLANET_BASE_URL}&search=${this.state.query}`);
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
            selectedPlanet,
            isDialogOpen,
            isLoading,
            planets,
            query
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
                            <PlanetsTable
                                planets={planets}
                                viewDetails={this.openDialog}
                            />
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
