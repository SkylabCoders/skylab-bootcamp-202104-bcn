import actionTypes from '../actions/actionTypes';

function contactReducer(hasSentContact = {
  isLoading: false,
  success: false,
}, action) {
  let updatedContact = hasSentContact;

  switch (action.type) {
    case actionTypes.CONTACT_SUCCESS:
      updatedContact = {
        isLoading: false,
        success: true,
      };
      break;
    case actionTypes.CONTACT_PENDING:
      updatedContact = {
        isLoading: true,
        success: false,
      };
      break;
    case actionTypes.CONTACT_RESET:
      updatedContact = {
        isLoading: false,
        success: false,
      };
      break;
    default:
      break;
  }

  return updatedContact;
}

export default contactReducer;
