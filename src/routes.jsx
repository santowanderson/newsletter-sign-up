import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Subscribe, {
  action as subscribeAction,
} from './pages/subscribe/subscribe.jsx';
import Success from './pages/success/success.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Subscribe />,
    action: subscribeAction,
  },
  {
    path: 'success',
    element: <Success />,
  },
]);
