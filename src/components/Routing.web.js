import React from 'react';
import PropTypes from 'prop-types';

import {
  BrowserRouter,
  Link as BrowserLink,
  Switch,
  Route,
} from 'react-router-dom';

const Link = ({ style, ...props }) => <BrowserLink {...props} />;
Link.propTypes = {
  style: PropTypes.any.isRequired, // eslint-disable-line react/forbid-prop-types
};

export {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
};
