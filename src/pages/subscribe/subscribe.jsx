import React from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';
import { IoIosCheckmarkCircle } from 'react-icons/io';

import './subscribe.css';
import mobileImage from '../../assets/images/illustration-sign-up-mobile.svg';
import desktopImage from '../../assets/images/illustration-sign-up-desktop.svg';
import Button from '../../components/button/button';

function Subscribe() {
  const md = useMediaQuery('(min-width: 768px)');

  return (
    <section>
      <figure>
        <img src={md ? desktopImage : mobileImage} alt="Image" />
      </figure>

      <div>
        <h1>Stay updated!</h1>

        <p>Join 60,000+ product managers receiving monthly updates on:</p>

        <ul>
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

        <form>
          <label>Email address</label>
          <input
            type="email"
            name="email"
            autoComplete="off"
            required
            placeholder="email@company.com"
          />
          <Button buttonType="submit">Subscribe to monthly newsletter</Button>
        </form>
      </div>
    </section>
  );
}

export default Subscribe;
