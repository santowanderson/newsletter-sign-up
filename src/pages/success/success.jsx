import React from 'react';
import { useNavigate, useParams } from 'react-router';
import { IoIosCheckmarkCircle } from 'react-icons/io';

import './success.css';
import Button from '../../components/button/button';

function Success() {
  const navigate = useNavigate();

  return (
    <section id="success-container">
      <div className="content-container">
        <IoIosCheckmarkCircle />

        <h1 className="title">Thanks for subscribing!</h1>

        <p className="text-content">
          A confirmation email has been sent to{' '}
          <span>ash@loremcompany.com.</span> Please open it and click the button
          inside to confirm your subscription.
        </p>
      </div>

      <div className="button-container">
        <Button buttonType="button" handleClick={() => navigate('/')}>
          Dismiss message
        </Button>
      </div>
    </section>
  );
}

export default Success;
