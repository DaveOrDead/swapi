// Vendor
import React, { Component, Fragment } from "react";
// Components
import PlanetsTable from "./../PlanetsTable";
import {
    Container,
    Header,
    _Icons as Icons,
    Loading,
    SearchField,
    Spacing
} from "./../../components";
// Utils
import { API } from "./../../utils";

const PLANET_BASE_URL = "planets?format=json";

class App extends Component {
    state = {
        planets: [],
        query: "",
        isLoading: true
    };

    _results = [];

    async getData(url = PLANET_BASE_URL) {
        console.log(url);
        try {
            const res = await API.get(url);
            this._results = this._results.concat(res.data.results);
            if (res.data.next) {
                this.getData(res.data.next);
            } else {
                this.setState(
                    {
                        isLoading: false,
                        planets: this._results.slice()
                    },
                    () => {
                        this._results = [];
                    }
                );
            }
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

    render() {
        const { isLoading, planets, query } = this.state;

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
                            <PlanetsTable planets={planets} />
                        )}
                    </Container>
                </main>
            </Fragment>
        );
    }
}

export default App;
