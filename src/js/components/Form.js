'use strict';

// Libs
import React from 'react';
import { PropTypes } from 'prop-types';

// Style
import '../../scss/Form.scss';

class Form extends React.Component {
  constructor(props) {
    super();
    this.submit = props.handleSubmit;
  }
  handleSumbit(event) {
    event.preventDefault();
    const form = new FormData(this.form);
    this.idField.value = '';
    this.submit({social: form.get('social'), id: form.get('id')});
  }
  render() {
    return (
      <div className="form">
        <form ref={element => this.form = element} onSubmit={this.handleSumbit.bind(this)}>
          <div className="socialChoice">
            <input type="radio" value="twitter" defaultChecked= "true" name="social" id="twitter" />
            <label htmlFor="twitter"><i className="fa fa-twitter" aria-hidden="true"></i></label>
            <input type="radio" value="facebook" name="social" id="facebook" />
            <label htmlFor="facebook"><i className="fa fa-facebook" aria-hidden="true"></i></label>
            <input type="radio" value="instagram" name="social" id="instagram" />
            <label htmlFor="instagram"><i className="fa fa-instagram" aria-hidden="true"></i></label>
          </div>
          <input type="text" pattern="\d*" title="Only digits allowed." ref={element => this.idField = element} placeholder="enter user ID" name="id" required></input>
          <button type="submit">ADD USER</button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default Form;
