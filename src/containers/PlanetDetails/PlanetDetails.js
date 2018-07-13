// Vendor
import React, { Component, Fragment } from "react";
// Components
import { Container, Header, Loading } from "./../../components";
// Utils
import { API } from "./../../utils";

class App extends Component {
    state = {
        data: {},
        isLoading: true
    };

    async getData(url) {
        try {
            const res = await API.get(`${url}/?format=json`);
            const { residents } = res.data;
            let inhabitants = [];

            if (residents && residents.length) {
                inhabitants = await Promise.all(
                    residents.map(res => API.get(`${res}?format=json`))
                );
            }
            this.setState({
                isLoading: false,
                data: res.data,
                inhabitants
            });
        } catch (err) {
            console.log(err);
        }
    }

    componentDidMount() {
        this.getData("https://swapi.co/api/planets/3");
    }

    render() {
        const { data, inhabitants, isLoading } = this.state;

        return (
            <Fragment>
                <Header />

                <main>
                    <Container isCentered>
                        {isLoading ? (
                            <Loading />
                        ) : (
                            <dl>
                                <dt>Name</dt>
                                <dd>{data.name}</dd>

                                <dt>Rotation Period</dt>
                                <dd>{data.orbital_period}</dd>

                                <dt>Orbital Period</dt>
                                <dd>{data.orbital_period}</dd>

                                <dt>Diameter</dt>
                                <dd>{data.diameter}</dd>

                                <dt>Climate</dt>
                                <dd>{data.climate}</dd>

                                <dt>Gravity</dt>
                                <dd>{data.gravity}</dd>

                                <dt>Terrain</dt>
                                <dd>{data.terrain}</dd>

                                <dt>Surface water</dt>
                                <dd>{data.surface_water}</dd>

                                <dt>Residents</dt>
                                {inhabitants.map((res, i) => (
                                    <dd key={i}>{res.data.name}</dd>
                                ))}
                            </dl>
                        )}
                    </Container>
                </main>
            </Fragment>
        );
    }
}

export default App;
