import React from "react";
import HeatmapLayer from "react-google-maps/lib/components/visualization/HeatmapLayer";
import {
    withGoogleMap,
    GoogleMap
} from "react-google-maps";
import getDataForHeatMap from "../utils/getDataForHeatMap";

export const Map = withGoogleMap(props =>
    <GoogleMap
        defaultZoom={9}
        defaultCenter={{ lat: 51.5085300, lng: -0.1257400 }} >
        <HeatmapLayer data={getDataForHeatMap(props.data)} />
    </GoogleMap>
);

