// Vendor
import React, { Component } from "react";
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

    getResidentsValue = () => {
        const { error, inhabitants, loadingResidents } = this.state;
        let value;
        if (loadingResidents) {
            value = "Loading…";
        } else if (inhabitants.length) {
            value = inhabitants.map(i => i.data.name);
        } else {
            value = error ? error : "N/A";
        }
        return value;
    };

    render() {
        const { data } = this.state;

        return (
            <DataList>
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

                <DataListItem
                    title="Residents"
                    value={this.getResidentsValue()}
                />
            </DataList>
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
