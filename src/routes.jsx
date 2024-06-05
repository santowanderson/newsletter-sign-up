import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Subscribe from './pages/subscribe/subscribe.jsx';
import Success from './pages/success/success.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Subscribe />,
  },
  {
    path: 'success',
    element: <Success />,
  },
]);
