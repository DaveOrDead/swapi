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

class App extends Component {
    state = {
        detailName: "",
        detailUrl: "",
        isDialogOpen: false,
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

    openDialog = e => {
        this.setState({
            isDialogOpen: true,
            detailUrl: e.target.value,
            detailName: e.target.innerText
        });
    };

    closeDialog = () => {
        this.setState({ isDialogOpen: false, detailName: "", detailUrl: "" });
    };

    render() {
        const {
            detailName,
            detailUrl,
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
                            title={detailName}
                        >
                            <PlanetDetails planetUrl={detailUrl} />
                        </Dialog>
                    </Container>
                </main>
            </Fragment>
        );
    }
}

export default App;
