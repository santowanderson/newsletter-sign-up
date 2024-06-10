import useMediaQuery from '../../hooks/useMediaQuery.jsx';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { Form, redirect, useActionData } from 'react-router-dom';

import './subscribe.css';
import mobileImage from '../../assets/images/illustration-sign-up-mobile.svg';
import desktopImage from '../../assets/images/illustration-sign-up-desktop.svg';
import Button from '../../components/button/button.jsx';

export async function action({ request }) {
	const formData = await request.formData();
	const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	const email = formData.get('email');
	if (!emailValidation.test(email)) {
		return 'Valid email required';
	}
	return redirect(`/success?email=${email}`);
}

function Subscribe() {
	const md = useMediaQuery('(min-width: 1024px)');
	const inputErrorMessage = useActionData();

	return (
		<section id="subscribe-container">
			<figure className="image-container">
				<img src={md ? desktopImage : mobileImage} alt={md ? 'Desktop image' : 'Mobile image'} />
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
						{inputErrorMessage && <h3 className="form-error-message">{inputErrorMessage}</h3>}
					</div>
					<input
						type="email"
						name="email"
						autoComplete="off"
						required
						placeholder="email@company.com"
						className="invalid-input"
					/>
					<Button buttonType="submit">Subscribe to monthly newsletter</Button>
				</Form>
			</div>
		</section>
	);
}

export default Subscribe;
