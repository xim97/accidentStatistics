import React, { Component } from "react";
import DatePicker from "react-date-picker";

export default class MyDatePicker extends Component {    
    
    render() {
        return (
            <div className="picker">
                <DatePicker
                    onChange={this.props.handleOnChangePicker}
                    value={this.props.date === null ? new Date(2005, 0, 1) : this.props.date}
                    name={this.props.name}
                />
            </div>
        );
    }
}