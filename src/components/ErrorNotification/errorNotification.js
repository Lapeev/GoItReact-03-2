import React from 'react';
import PropTypes from 'prop-types';

const ErrorNotification = ({ error }) => <h2>{error}</h2>;

ErrorNotification.propTypes = {
  error: PropTypes.string.isRequired,
};

export default ErrorNotification;
