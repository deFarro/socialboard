'use strict';

// Libs
import React from 'react';
import { PropTypes } from 'prop-types';

// Style
import '../../scss/SubmitButton.scss';

const STATUSES = {
  ready: {
    className: '',
    disabled: false,
    text: 'ADD USER'
  },
  searching: {
    className: '',
    disabled: true,
    text: 'SEARCHING...'
  },
  full: {
    className: 'full',
    disabled: true,
    text: '10 USERS ADDED'
  },
  error: {
    className: 'error',
    disabled: true,
    text: 'USER NOT FOUND'
  }
}

const SubmitButton = ({status}) => {
  return (
    <button className={'submitButton ' + STATUSES[status].className} disabled={STATUSES[status].disabled} type="submit">{STATUSES[status].text}</button>
  );
}

SubmitButton.propTypes = {
  status: PropTypes.string.isRequired
};

export default SubmitButton;
