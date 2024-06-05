import React from 'react';
import { useNavigate } from 'react-router';
import { IoIosCheckmarkCircle } from 'react-icons/io';

import './success.css';
import Button from '../../components/button/button';

function Success() {
  const navigate = useNavigate();

  return (
    <section>
      <IoIosCheckmarkCircle />

      <h1>Thanks for subscribing!</h1>

      <p>
        A confirmation email has been sent to <span>ash@loremcompany.com.</span>{' '}
        Please open it and click the button inside to confirm your subscription.
      </p>

      <Button buttonType="button" handleClick={() => navigate('/')}>
        Dismiss message
      </Button>
    </section>
  );
}

export default Success;
