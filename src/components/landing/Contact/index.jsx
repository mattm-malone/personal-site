import React from 'react'
import { Container } from 'Common'
import contact from 'Static/illustrations/mail.svg'
import { Wrapper, altWrap, Details, Thumbnail } from './styles'
import ContactForm from './ContactForm'

export const Contact = () => (
  <Container id="contact">
    <Wrapper>
      <Details>
        <ContactForm />
      </Details>
      <Thumbnail>
        <img src={contact} alt="I'm Matt and I'm a software engineer!" />
      </Thumbnail>
    </Wrapper>
    {/* <altWrap>
      <Details>
        <p>
          Or email me directly:{' '}
          <a href="mailto:hey@mattmalone.dev">hey@mattmalone.dev</a>
        </p>
      </Details>
    </altWrap> */}
  </Container>
)
