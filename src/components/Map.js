import React from "react";

import {
    withGoogleMap,
    GoogleMap
} from "react-google-maps";

export const Map = withGoogleMap(props =>
    <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: -34.397, lng: 150.644 }} />);

