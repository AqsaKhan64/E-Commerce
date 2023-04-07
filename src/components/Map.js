import React from 'react'
import GoogleMapReact from 'google-map-react';
import { Container } from '@mui/system';

const Map = () => {
  return (
    <Container className="map">
    <div style={{ height: '500px', width: '100'}}>
      <GoogleMapReact
        defaultCenter={{ lat: 37.7749, lng: -122.4194 }}
        defaultZoom={12}
      >
      </GoogleMapReact>
    </div></Container>
  );
}

export default Map;


