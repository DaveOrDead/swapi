// Vendor
import React, { Component, Fragment } from "react";
// Components
import { DataList, DataListItem, Loading } from "./../../components";
// Utils
import { API, formatIfNumeric } from "./../../utils";

class App extends Component {
    state = {
        data: {},
        isLoading: true
    };

    async getData(url) {
        try {
            const res = await API.get(`${url}?format=json`);
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
        this.getData(this.props.planetUrl);
    }

    render() {
        const { data, inhabitants, isLoading } = this.state;

        return (
            <Fragment>
                {isLoading ? (
                    <Loading />
                ) : (
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
                            <dt className="c-data-list__label">Residents</dt>
                            {(inhabitants.length &&
                                inhabitants.map((res, i) => (
                                    <dd className="c-data-list__value" key={i}>
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
                        </div>
                    </DataList>
                )}
            </Fragment>
        );
    }
}

export default App;
