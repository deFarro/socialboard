'use strict';

// Libs
import React from 'react';
import {PropTypes} from 'prop-types';

// Style
import '../../scss/Form.scss';

const Form = ({handleSubmit}) => {
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="socialChoice">
          <input type="radio" value="twitter" defaultChecked= "true" name="radio" id="twitter" />
          <label htmlFor="twitter"><i className="fa fa-twitter" aria-hidden="true"></i></label>
          <input type="radio" value="facebook" name="radio"  id="facebook" />
          <label htmlFor="facebook"><i className="fa fa-facebook" aria-hidden="true"></i></label>
          <input type="radio" value="instagram" name="radio"  id="instagram" />
          <label htmlFor="instagram"><i className="fa fa-instagram" aria-hidden="true"></i></label>
        </div>
        <input type="text" pattern="\d*" title="Only digits allowed." placeholder="enter user ID"></input>
        <button type="submit">ADD USER</button>
      </form>
    </div>
  );
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default Form;
