'use strict';

// Libs
import React from 'react';

// Style
import '../../scss/Form.scss';

const Form = ({handleSubmit}) => {
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input type="text" pattern="\d*" title="Only digits allowed." placeholder="enter user ID"></input>
        <button type="submit">ADD USER</button>
      </form>
    </div>
  );
}

export default Form;
