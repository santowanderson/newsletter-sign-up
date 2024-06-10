import { useNavigate, useSearchParams } from 'react-router-dom';
import { IoIosCheckmarkCircle } from 'react-icons/io';

import './success.css';
import Button from '../../components/button/button.jsx';

function Success() {
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();

	return (
		<section id="success-container">
			<div className="content-container">
				{<IoIosCheckmarkCircle />}

				<h1 className="title">Thanks for subscribing!</h1>

				<p className="text-content">
					A confirmation email has been sent to <span>{searchParams.get('email')}.</span> Please open it and click the
					button inside to confirm your subscription.
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
