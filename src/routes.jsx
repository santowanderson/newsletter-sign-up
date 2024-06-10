import { createBrowserRouter } from 'react-router-dom';

import Subscribe, { action } from './pages/subscribe/subscribe.jsx';
import Success from './pages/success/success.jsx';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Subscribe />,
		action: action,
	},
	{
		path: 'success',
		element: <Success />,
	},
]);
