import React, { useState } from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { Form, redirect, useActionData } from 'react-router-dom';

import './subscribe.css';
import mobileImage from '../../assets/images/illustration-sign-up-mobile.svg';
import desktopImage from '../../assets/images/illustration-sign-up-desktop.svg';
import Button from '../../components/button/button';

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get('email');
  const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailValidation.test(email)) {
    throw redirect(`/success?email=${email}`);
  }
  return 'Valid email required';
}

function Subscribe() {
  const md = useMediaQuery('(min-width: 768px)');
  const actionData = useActionData();

  return (
    <section id="subscribe-container">
      <figure className="image-container">
        <img src={md ? desktopImage : mobileImage} alt="Image" />
      </figure>

      <div className="subscribe-content-container">
        <h1 className="title">Stay updated!</h1>

        <p>Join 60,000+ product managers receiving monthly updates on:</p>

        <ul className="list-container">
          <li>
            <IoIosCheckmarkCircle />
            Product discovery and bulding what metters
          </li>
          <li>
            <IoIosCheckmarkCircle />
            Measuring to ensure updates are a success
          </li>
          <li>
            <IoIosCheckmarkCircle />
            And much more!
          </li>
        </ul>

        <Form method="post">
          <div className="label-container">
            <label>Email address</label>
            {/* {formErrorMessage && (
              <h3 className="form-error-message">{formErrorMessage}</h3>
            )} */}
          </div>
          <input
            type="email"
            name="email"
            autoComplete="off"
            required
            placeholder="email@company.com"
          />
          <Button buttonType="submit">Subscribe to monthly newsletter</Button>
        </Form>
      </div>
    </section>
  );
}

export default Subscribe;
