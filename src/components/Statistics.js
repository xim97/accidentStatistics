import React, { Component } from "react";
import { Map } from "./Map";

export default class Statistics extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        fetch("https://api.tfl.gov.uk//AccidentStats/2005")
            .then(response => response.json())
            .then(data => {
                let dataArray = data.map(item => {
                    return (
                        <p>{item.id}</p>
                    );
                })
                this.setState({ data: dataArray });
            });
    }

    render() {
        return (
            <div className="statistics">
                {this.state.data}
            </div>
        );
    }

}/*<Map
                    containerElement={<div className="map" />}
                    mapElement={<div style={{ height: `100%` }} />} />*/