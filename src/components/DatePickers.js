import React, { Component } from "react";
import MyDatePicker from "./MyDatePicker";

export default class DatePickers extends Component {

    render() {
        return (
            <div className="date-pickers">                
                <div className="container">
                    <h5>Select begging of period</h5>
                    <MyDatePicker
                        handleOnChangePicker={this.props.handleOnChangeStartDate}
                        date={this.props.startDate}
                        name="startDate"
                        minDate={new Date(2005, 0, 1)}
                        maxDate={new Date(2016, 5, 1)} />
                </div>
                {
                    this.props.startDate !== null && <div className="container">
                        <h5>Select ending of period</h5>
                        <MyDatePicker
                            handleOnChangePicker={this.props.handleOnChangeEndDate}
                            date={this.props.endDate}
                            name="endDate"
                            minDate={new Date(2005, 0, 1)}
                            maxDate={new Date(2016, 5, 1)} />
                    </div>
                }
            </div>
        );
    }

}