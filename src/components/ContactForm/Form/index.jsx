import { useState } from "react";
import emailjs, { init } from 'emailjs-com';
import { handleValidation } from './validation'
import { FormContainer, InputGroup, SubmitButton } from './index.style'

const Form = ({ setIsEmailSent }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [contactFormErrors, setContactFormErrors] = useState({
    name: '', email: '', message: ''
  })

  const handleSubmit = (event) => {
    event.preventDefault()

    if(handleValidation(name, email, message, setContactFormErrors)) {
      init("user_FokKGGu0nYvixQZZQCMYz")

      const params = {
        from_name: name,
        email: email,
        message: message
      };
  
      emailjs.send('service_e2649gi', 'template_8vmolpe', params)
        .then((response) => {
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