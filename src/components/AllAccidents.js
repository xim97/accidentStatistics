import React, { Component } from "react";
import getAccidentsWithChildrenCasualties from "../utils/getAccidentsWithChildrenCasualties";

export default class AllAccidents extends Component {

    render() {
        return (
          <h5>In the selected period, there were {this.props.data.length} accidents, 
                including {getAccidentsWithChildrenCasualties(this.props.data).length} accidents
                with children paticapation</h5>  
        );
    }

}