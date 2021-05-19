import React from 'react';
// import PropTypes from 'prop-types'

const Contact = () => {
  const title = 'Contact';
  return (
    <div>
      <h2>{title}</h2>
      <form>
        <label htmlFor="nameInput">
          Name:
          <input type="text" />
        </label>
        <label htmlFor="nameInput">
          LastName:
          <input type="text" />
        </label>
        <label htmlFor="nameInput">
          Email:
          <input type="text" />
        </label>
        <label htmlFor="nameInput">
          Phone:
          <input type="text" />
        </label>
        <label htmlFor="nameInput">
          Message:
          <input type="textarea" />
        </label>
      </form>
    </div>
  );
};

Contact.propTypes = {

};

export default Contact;
