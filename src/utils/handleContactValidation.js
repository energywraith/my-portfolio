export default (name, email, message, setContactFormErrors) => {
  let formIsValid = true;
  let errors = { name: '', email: '', message: '' };

  if (name === '') {
    errors = { ...errors, name: 'Please fill out this field.' };
    formIsValid = false;
  }

  if (email === '') {
    errors = { ...errors, email: 'Please fill out this field.' };
    formIsValid = false;
  } else {
    const lastAtPos = email.lastIndexOf('@');
    const lastDotPos = email.lastIndexOf('.');

    if (lastAtPos === -1 || lastDotPos === -1) {
      errors = { ...errors, email: 'Email is not valid.' };
      formIsValid = false;
    }
  }

  if (message.length < 5) {
    errors = { ...errors, message: 'Message field must be atleast 5 characters long.' };
    formIsValid = false;
  }

  setContactFormErrors(errors);

  return formIsValid;
};
