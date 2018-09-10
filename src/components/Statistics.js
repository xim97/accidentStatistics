import React, { Component } from "react";
import { Map } from "./Map";
import DiagramBoroughs from "./DiagramBoroughs";
import DiagramDayOfTheWeek from "./DiagramDayOfTheWeek";
import DiagramHours from "./DiagramHours";


export default class Statistics extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            isLoading: false,
            error: null
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        var result = [],
            that = this,
            dayAfterEndDate = this.props.endDate;
        dayAfterEndDate.setDate(dayAfterEndDate.getDate() + 1);
        for (var year = this.props.startDate.getFullYear();
            year <= this.props.endDate.getFullYear();
            year++) {
            fetch(`https://api.tfl.gov.uk//AccidentStats/${year}`)
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error('Something went wrong ...');
                    }
                })
                .then(data => {
                    result.push(...data.filter(
                        element =>
                            new Date(element.date) >= that.props.startDate &&
                            new Date(element.date) <= dayAfterEndDate
                    )
                    );
                    this.setState({
                        data: result,
                        isLoading: false
                    });
                }
                )
                .catch(error => this.setState({ error: error, isLoading: false }));
        }
    }

    render() {
        if (this.state.isLoading) {
            return <p>Loading ...</p>;
        }
        if (this.state.error) {
            return <p>{this.state.error.message}</p>;
          }
        return (
            <div className="statistics">
                <h5>Heatmap of all accidents</h5>
                <Map data={this.state.data}
                    containerElement={<div className="map" />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
                <h5>Number of accident in every day of the week(all and with children)</h5>
                <DiagramDayOfTheWeek data={this.state.data} />
                <h5>Number of accident in every hour of the day(all and with children)</h5>
                <DiagramHours data={this.state.data} />
                <h5>Number of accidents in every borough(all and with children)</h5>
                <DiagramBoroughs data={this.state.data} />
            </div>
        );
    }
}