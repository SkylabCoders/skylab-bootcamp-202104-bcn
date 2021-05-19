import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { createContact } from '../../redux/actions/actionCreators';
import Loader from '../common/Loader';
import './Contact.css';

const Contact = ({ actions, hasSentContact }) => {
  const [contact, setContact] = useState({
    name: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleInputChange = ({ target: { name, value } }) => {
    setContact({
      ...contact,
      [name]: value,
    });
  };

  const submitContact = () => {
    if (
      contact.name
      && contact.lastName
      && contact.phone
      && contact.email
      && contact.message) {
      actions.createContact(contact);
    }
  };

  const title = 'Contact';
  const thankYouMessage = 'Thank you for your message!';
  return (
    <div className="contact">
      {
      hasSentContact?.isLoading
        ? <Loader /> : (
          <>
            <h2>{hasSentContact.success ? thankYouMessage : title}</h2>
            {
              !hasSentContact.success && (
                <>
                  <form className="contact-form">
                    <label htmlFor="nameInput">
                      <span> Name:</span>
                      <input type="text" required value={contact.name} onChange={handleInputChange} name="name" />
                    </label>
                    <label htmlFor="nameInput">
                      <span>Lastname:</span>
                      <input type="text" required value={contact.lastName} onChange={handleInputChange} name="lastName" />
                    </label>
                    <label htmlFor="nameInput">
                      <span>Email:</span>
                      <input type="email" required value={contact.email} onChange={handleInputChange} name="email" />
                    </label>
                    <label htmlFor="nameInput">
                      <span>Phone:</span>
                      <input type="text" required value={contact.phone} onChange={handleInputChange} name="phone" />
                    </label>
                    <label htmlFor="nameInput">
                      <span>Message:</span>
                      <input type="textarea" required value={contact.message} onChange={handleInputChange} name="message" />
                    </label>
                    <button type="button" onClick={submitContact}>Send Message</button>
                  </form>
                </>
              )
            }

          </>
        )
      }
    </div>
  );
};

Contact.propTypes = {
  hasSentContact: PropTypes.string.isRequired,
  actions: PropTypes.shape({
    createContact: PropTypes.func.isRequired,
  }).isRequired,
};

function mapStateToProps({ hasSentContact }) {
  return { hasSentContact };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      { createContact },
      dispatch,
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
