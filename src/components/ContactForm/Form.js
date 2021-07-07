import { useState } from "react";
import emailjs, { init } from 'emailjs-com';

import { FormContainer, InputGroup, SubmitButton } from './Form.style'

const Form = ({ setIsEmailSent }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [contactFormErrors, setContactFormErrors] = useState({
    name: '', email: '', message: ''
  })

  const handleValidation = () => {
    let formIsValid = true
    let errors = { name: '', email: '', message: '' }

    if(name === '') {
      errors = { ...errors, name: "Please fill out this field." }
      formIsValid = false
    }

    if(email === '') {
      errors = { ...errors, email: "Please fill out this field." }
      formIsValid = false

    } else {
      let lastAtPos = email.lastIndexOf('@')
      let lastDotPos = email.lastIndexOf('.')

      if (lastAtPos === -1 || lastDotPos === -1) {
        errors = { ...errors, email: "Email is not valid." }
        formIsValid = false
      }
    }

    if(message.length < 5) {
      errors = { ...errors, message: "Message field must be atleast 5 characters long."}
      formIsValid = false
    }

    setContactFormErrors(errors)
    return formIsValid
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if(handleValidation()) {
      init("user_FokKGGu0nYvixQZZQCMYz")

      const params = {
        from_name: name,
        email: email,
        message: message
      };
  
      emailjs.send('service_e2649gi', 'template_8vmolpe', params)
        .then((response) => {
           console.log('SUCCESS!', response.status, response.text);
           setName('')
           setEmail('')
           setMessage('')
           setIsEmailSent(true)
        }, (error) => {
           console.log('FAILED...', error);
        });
    }
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <InputGroup error={contactFormErrors.name}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={({target}) => setName(target.value)} />
        <span> {contactFormErrors.name} </span>
      </InputGroup>
      <InputGroup error={contactFormErrors.email}>
        <input
          type="text"
          placeholder="Email Address"
          value={email}
          onChange={({target}) => setEmail(target.value)} />
        <span> {contactFormErrors.email} </span>
      </InputGroup>
      <InputGroup error={contactFormErrors.message}>
        <textarea
          placeholder="Message"
          value={message}
          onChange={({target}) => setMessage(target.value)} />
        <span> {contactFormErrors.message} </span>
      </InputGroup>
      <SubmitButton type="submit">
        Send a message
      </SubmitButton>
    </FormContainer>
  )
}

export default Form