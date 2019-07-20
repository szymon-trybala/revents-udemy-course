import React from 'react';
import { Segment, Icon } from 'semantic-ui-react';
import GoogleMapReact from 'google-map-react';

const EventDetailedMap = ({ lat, lng }) => {
  const zoom = 14;
  const Marker = () => <Icon name='marker' size='big' color='red'/>;

  return (
    <Segment attached='bottom' style={{padding: 0}}>
      <div style={{ height: '300px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBtTddkgNXC5qQ5JW6oPmRb9MphgrZiHpA' }}
          defaultCenter={{lat, lng}}
          defaultZoom={zoom}
        >
          <Marker
            lat={lat}
            lng={lng}
          />
        </GoogleMapReact>
      </div>
    </Segment>
  );
};

export default EventDetailedMap;
