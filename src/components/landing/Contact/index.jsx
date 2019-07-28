import React from 'react'
import { Container } from 'Common'
import contact from 'Static/illustrations/mail.svg'
import { Wrapper, Details, Thumbnail } from './styles'
import ContactForm from './ContactForm'

export const Contact = () => (
  <Wrapper as={Container} id="contact">
    <Details>
      <ContactForm />
    </Details>
    <Thumbnail>
      <img src={contact} alt="I'm Matt and I'm a software engineer!" />
    </Thumbnail>
  </Wrapper>
)
