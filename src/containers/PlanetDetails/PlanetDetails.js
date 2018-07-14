// Vendor
import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
// Components
import { DataList, DataListItem } from "./../../components";
// Utils
import { API, formatIfNumeric } from "./../../utils";

class PlanetDetails extends Component {
    state = {
        data: this.props.planet,
        loadingResidents: this.props.planet.residents.length,
        inhabitants: [],
        error: ""
    };

    async getData(residents) {
        try {
            const inhabitants = await Promise.all(
                residents.map(res => API.get(`${res}?format=json`))
            );

            this.setState({
                loadingResidents: false,
                inhabitants,
                error: ""
            });
        } catch (err) {
            this.setState({
                loadingResidents: false,
                error: "Uh oh, we couldn't find any residents."
            });
        }
    }

    componentDidMount() {
        const { planet } = this.props;
        if (planet.residents && planet.residents.length) {
            this.getData(planet.residents);
        }
    }

    render() {
        const { data, inhabitants, loadingResidents, error } = this.state;

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
                                    ))) ||
                                    ((error && (
                                        <dd className="c-data-list__value">
                                            {error}
                                        </dd>
                                    )) || (
                                        <dd>
                                            <abbr
                                                className="c-data-list__value"
                                                title="Not applicable"
                                            >
                                                N/A
                                            </abbr>
                                        </dd>
                                    ))}
                            </Fragment>
                        )}
                    </div>
                </DataList>
            </Fragment>
        );
    }
}

PlanetDetails.propTypes = {
    /**
     * The initial planet details - excluding person details
     */
    // eslint-disable-next-line react/forbid-prop-types
    planet: PropTypes.object
};

export default PlanetDetails;
