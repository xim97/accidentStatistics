import React, { Component } from "react";
import {
    XYPlot,
    XAxis,
    YAxis,
    HorizontalGridLines,
    VerticalBarSeries,
    Hint
} from "react-vis";
import getDataForDiagramDayOfTheWeek from "../utils/getDataForDiagramDayOfTheWeek";
import createDataArrayForPlot from "../utils/createDataArrayForPlot";
import getAccidentsWithChildrenCasualties from "../utils/getAccidentsWithChildrenCasualties";

export default class DiagramDayOfTheWeek extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
            childrenValue: null
        };
        this.rememberValue = this.rememberValue.bind(this);
        this.forgetValue = this.forgetValue.bind(this);
        this.rememberChildrenValue = this.rememberChildrenValue.bind(this);
        this.forgetChildrenValue = this.forgetChildrenValue.bind(this);
    }

    rememberValue(value) {
        this.setState({ value: value });
    }

    forgetValue() {
        this.setState({
            value: null
        });
    }

    rememberChildrenValue(value) {
        this.setState({ childrenValue: value });
    }

    forgetChildrenValue() {
        this.setState({
            childrenValue: null
        });
    }

    render() {
        return (
            <XYPlot
                margin={{ left: 100, bottom: 250 }}
                xType="ordinal"
                width={1000}
                height={700}>
                <HorizontalGridLines />
                <XAxis tickLabelAngle={-75} />
                <YAxis />
                <VerticalBarSeries
                    onValueMouseOver={this.rememberValue}
                    onValueMouseOut={this.forgetValue}
                    data={createDataArrayForPlot(getDataForDiagramDayOfTheWeek(this.props.data))}
                />
                <VerticalBarSeries
                    onValueMouseOver={this.rememberChildrenValue}
                    onValueMouseOut={this.forgetChildrenValue}
                    data={createDataArrayForPlot(getDataForDiagramDayOfTheWeek(getAccidentsWithChildrenCasualties(this.props.data)))}
                />
                {this.state.value ?
                    <Hint value={this.state.value} >
                        <div className="plot-hint">
                            <p>On {this.state.value.x}s there were {this.state.value.y} accidents</p>
                        </div>
                    </Hint> :
                    null
                }
                {this.state.childrenValue ?
                    <Hint value={this.state.childrenValue} >
                        <div className="plot-hint">
                            <p>On {this.state.childrenValue.x}s there 
                            were {this.state.childrenValue.y} accidents with children paticapation</p>
                        </div>
                    </Hint> :
                    null
                }
            </XYPlot>
        );
    }
}