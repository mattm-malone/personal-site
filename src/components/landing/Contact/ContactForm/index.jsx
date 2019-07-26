import React from 'react'
import { Formik, FastField, ErrorMessage } from 'formik'
import { Button, Input } from 'Common'
import { Error, Center, InputField, FormDiv } from './styles'

const ContactForm = () => (
  <FormDiv>
    <h2>Say hi!</h2>
    <Formik
      initialValues={{ email: '', name: '', message: '' }}
      validate={values => {
        const errors = {}
        if (!values.email) {
          errors.email = 'Required'
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address'
        }

        if (!values.name) {
          errors.name = 'Required'
        }
        if (!values.message) {
          errors.message = 'Required'
        }
        return errors
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form
          id="fs-frm"
          name="simple-contact-form"
          acceptCharset="utf-8"
          action="https://formspree.io/hey@mattmalone.dev"
          method="post"
        >
          <InputField>
            <Input
              type="text"
              name="name"
              aria-label="name"
              placeholder="Name*"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              error={touched.name && errors.name}
            />
            <ErrorMessage component={Error} name="name" />
          </InputField>
          <InputField>
            <Input
              type="email"
              name="email"
              aria-label="email"
              placeholder="Email*"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              error={touched.email && errors.email}
            />
            <ErrorMessage component={Error} name="email" />
          </InputField>
          <InputField>
            <Input
              as={FastField}
              component="textarea"
              aria-label="message"
              id="message"
              rows="6"
              type="text"
              name="message"
              placeholder="Message*"
              error={touched.message && errors.message}
            />
            <ErrorMessage component={Error} name="message" />
          </InputField>
          <Center>
            <Button secondary type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </Center>
        </form>
      )}
    </Formik>
  </FormDiv>
)

export default ContactForm
