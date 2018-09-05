import React from "react";
import HeatmapLayer from "react-google-maps/lib/components/visualization/HeatmapLayer";
import {
    withGoogleMap,
    GoogleMap
} from "react-google-maps";

export const Map = withGoogleMap(props =>
    <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: 37.7, lng: -122.44 }} >
        <HeatmapLayer data={[
            new window.google.maps.LatLng(37.782551, -122.445368),
            new window.google.maps.LatLng(37.782745, -122.444586),
            new window.google.maps.LatLng(37.782842, -122.443688),
            new window.google.maps.LatLng(37.782919, -122.442815),
            new window.google.maps.LatLng(37.782992, -122.442112),
            new window.google.maps.LatLng(37.783100, -122.441461)
        ]} />
    </GoogleMap>
);

