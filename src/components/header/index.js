import React from 'react';
import { Location } from '@reach/router';

const LocationProvider = () => (
  <Location>
    {
      ({ location }) => (
        <React.Fragment>
          <Header location={location} />
        </React.Fragment>
      )
    }
  </Location>
);

const Header = ({ location }) => (
  <div>
    location is
    { ` ${location.pathname}` }
  </div>
);

export default LocationProvider;
