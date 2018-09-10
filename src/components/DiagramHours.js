import React, { Component } from "react";
import {
    XYPlot,
    XAxis,
    YAxis,
    HorizontalGridLines,
    VerticalBarSeries,
    Hint
} from "react-vis";
import getDataForDiagramHours from "../utils/getDataForDiagramHours";
import createDataArrayForPlot from "../utils/createDataArrayForPlot";
import getAccidentsWithChildrenCasualties from "../utils/getAccidentsWithChildrenCasualties";

export default class DiagramHours extends Component {
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
                <XAxis tickLabelAngle={0} />
                <YAxis />
                <VerticalBarSeries
                    onValueMouseOver={this.rememberValue}
                    onValueMouseOut={this.forgetValue}
                    data={createDataArrayForPlot(getDataForDiagramHours(this.props.data))}
                />
                <VerticalBarSeries
                    onValueMouseOver={this.rememberChildrenValue}
                    onValueMouseOut={this.forgetChildrenValue}
                    data={createDataArrayForPlot(getDataForDiagramHours(getAccidentsWithChildrenCasualties(this.props.data)))}
                />
                {this.state.value ?
                    <Hint value={this.state.value} >
                        <div className="plot-hint">
                            <p>At {this.state.value.x} hours there were {this.state.value.y} accidents</p>
                        </div>
                    </Hint> :
                    null
                }
                {this.state.childrenValue ?
                    <Hint value={this.state.childrenValue} >
                        <div className="plot-hint">
                            <p>At {this.state.childrenValue.x} hours there
                            were {this.state.childrenValue.y} accidents with children paticapation</p>
                        </div>
                    </Hint> :
                    null
                }
            </XYPlot>
        );
    }
}