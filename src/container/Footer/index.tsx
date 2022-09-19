import React, { useState } from 'react';
import { Form, Formik } from 'formik';

import { CustomInput, CustomTextarea, Loader } from '../../components';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import { images } from '../../constants';
import { contactSchema } from '../../schemas/contactSchema';
import './Footer.scss';

const Footer = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values, actions) => {
    const { userName, email, message } = values;
    setLoading(true);
    try {
      const contact = {
        _type: 'contact',
        name: userName,
        email,
        message,
      };
      await client.create(contact);
      setLoading(false);
      setIsFormSubmitted(true);
    } catch (error) {
      setLoading(false);
      setIsFormSubmitted(false);
      actions.resetForm();
    }
  };
  return (
    <>
      <h2 className='head-text'>Contact with me</h2>

      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt='email' />
          <a href='mailto:rodion.leginkov@gmail.com' className='p-text'>rodion.leginkov@gmail.com</a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt='mobile' />
          <a href='tel:+7 (989) 502-87-27' className='p-text'>+7 (989) 502-87-27</a>
        </div>
      </div>

      {!isFormSubmitted
        ? (
          <Formik
            initialValues={{ userName: '', email: '', message: '' }}
            validationSchema={contactSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className='app__footer-form app__flex'>
                <div className='app__flex app__footer-form-container'>
                  <CustomInput
                    name="userName"
                    type="text"
                    placeholder="Your name"
                  />
                </div>
                <div className='app__flex app__footer-form-container'>
                  <CustomInput
                    name="email"
                    type="email"
                    placeholder="Your email"
                  />
                </div>
                <div className='app__flex app__footer-form-container'>
                  <CustomTextarea
                    name="message"
                    type="message"
                    placeholder="Your Message"
                  />
                </div>
                {!loading
                  ? <button disabled={isSubmitting} type="submit">
                  Submit
                  </button>
                  : <Loader />}

              </Form>
            )}
          </Formik>
        )
        : (
          <h3 className='head-text'>Thank you for getting in touch!</h3>
        )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__footerbg',
);
