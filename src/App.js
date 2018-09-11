import React, { Component } from "react";
import DatePickers from "./components/DatePickers";
import Statistics from "./components/Statistics";
import "../node_modules/react-vis/dist/style.css";
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      isStatsShowed: false
    };

    this.handleOnChangeStartDate = this.handleOnChangeStartDate.bind(this);
    this.handleOnChangeEndDate = this.handleOnChangeEndDate.bind(this);

    this.handleClickGetButton = this.handleClickGetButton.bind(this);
  }

  handleOnChangeStartDate(value) {
    if (value === null) {
      this.setState({ isStatsShowed: false, startDate: null, endDate: null });
    } else {
      if (this.state.isStatsShowed) {
        this.setState({ isStatsShowed: false, startDate: value })
      } else {
        this.setState({ startDate: value });
      }
    }
  }

  handleOnChangeEndDate(value) {
    if (this.state.isStatsShowed) {
      this.setState({ isStatsShowed: false, endDate: value });
    } else {
      this.setState({ endDate: value });
    }
  }

  handleClickGetButton() {
    if (this.state.startDate === null || this.state.endDate === null) {
      alert("Input begging and ending of period");
    } else {
      if (this.state.startDate < new Date(2005, 0, 1) ||
        this.state.startDate > new Date(2016, 5, 1) ||
        this.state.endDate < new Date(2005, 0, 1) ||
        this.state.endDate > new Date(2016, 5, 1)) {
        alert("Choosen period isn't from 01.01.2005 to 06.01.2016");
      } else {
        this.setState({ isStatsShowed: true });
      }
    }
  }

  render() {

    return (
      <div className="App">
        <h3>We have statistics only from 01.01.2005 to 01.06.2016</h3>
        <DatePickers
          handleOnChangeStartDate={this.handleOnChangeStartDate}
          handleOnChangeEndDate={this.handleOnChangeEndDate}
          startDate={this.state.startDate}
          endDate={this.state.endDate} />
        <input
          onClick={this.handleClickGetButton}
          className="get-stat"
          type="button"
          value="Get statistics" />
        {
          this.state.isStatsShowed && <Statistics
            startDate={this.state.startDate}
            endDate={this.state.endDate} />
        }
      </div>
    );
  }
}