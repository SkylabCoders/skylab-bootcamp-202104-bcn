function newContactTemplateCreator(contactDataObject) {
  return (
    `New contact from ${contactDataObject.name} ${contactDataObject.lastName}
  
  Phone: ${contactDataObject.phone}
  Email: ${contactDataObject.email}
  Message: ${contactDataObject.message}
  `
  );
}

module.exports = newContactTemplateCreator;
