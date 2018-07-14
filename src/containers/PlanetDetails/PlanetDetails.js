// Vendor
import React, { Component, Fragment } from "react";
// Components
import { DataList, DataListItem, Loading } from "./../../components";
// Utils
import { API, formatIfNumeric } from "./../../utils";

class App extends Component {
    state = {
        data: {},
        loadingResidents: true,
        inhabitants: []
    };

    async getData(residents) {
        try {
            const inhabitants = await Promise.all(
                residents.map(res => API.get(`${res}?format=json`))
            );

            this.setState({
                loadingResidents: false,
                inhabitants
            });
        } catch (err) {
            console.log(err);
        }
    }

    componentDidMount() {
        const { planet } = this.props;
        let loadingResidents = false;
        if (planet.residents && planet.residents.length) {
            loadingResidents = true;
            this.getData(planet.residents);
        }
        this.setState({
            data: planet,
            loadingResidents
        });
    }

    render() {
        const { data, inhabitants, loadingResidents } = this.state;

        return (
            <Fragment>
                <DataList>
                    <DataListItem
                        title="Rotation Period"
                        value={formatIfNumeric(data.rotation_period)}
                    />
                    <DataListItem
                        title="Orbital Period"
                        value={formatIfNumeric(data.orbital_period)}
                    />
                    <DataListItem
                        title="Diameter"
                        value={formatIfNumeric(data.diameter)}
                    />

                    <DataListItem title="Climate" value={data.climate} />

                    <DataListItem title="Gravity" value={data.gravity} />

                    <DataListItem title="Terrain" value={data.terrain} />

                    <DataListItem
                        title="Surface water"
                        value={data.surface_water}
                    />

                    <div className="c-data-list__item">
                        <dt className="c-data-list__title">Residents</dt>
                        {loadingResidents ? (
                            <dd className="c-data-list__value">
                                Loading&hellip;
                            </dd>
                        ) : (
                            <Fragment>
                                {(inhabitants.length &&
                                    inhabitants.map((res, i) => (
                                        <dd
                                            className="c-data-list__value"
                                            key={i}
                                        >
                                            {res.data.name}
                                        </dd>
                                    ))) || (
                                    <dd>
                                        <abbr
                                            className="c-data-list__value"
                                            title="Not applicable"
                                        >
                                            N/A
                                        </abbr>
                                    </dd>
                                )}
                            </Fragment>
                        )}
                    </div>
                </DataList>
            </Fragment>
        );
    }
}

export default App;
