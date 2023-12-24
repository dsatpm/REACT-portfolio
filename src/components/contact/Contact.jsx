import React, { useState } from 'react';
import './contact.scss';

function ContactForm() {
	const [form, setForm] = useState({
		name: '',
		email: '',
		message: '',
	});

	const [errors, setErrors] = useState({
		name: '',
		email: '',
		message: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({
			...form,
			[name]: value,
		});

		const newErrors = validateField(name, value);
		setErrors({
			...errors,
			[name]: newErrors[name],
		});
	};

	const validateField = (name, value) => {
		const newErrors = { ...errors };

		switch (name) {
			case 'name':
				newErrors.name = value.trim() === '' ? 'Name is required' : '';
				break;
			case 'email':
				newErrors.email = !isValidEmail(value) ? 'Invalid email' : '';
				break;
			case 'message':
				newErrors.message =
					value.trim() === '' ? 'Message is required' : '';
				break;
			default:
				break;
		}

		return newErrors;
	};

	const isValidEmail = (email) => {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
	};

	return (
		<div className='contact'>
			<form className='contact-form'>
				<h2>Contact</h2>
				<div className='form-group'>
					<label htmlFor='name'>Name</label>
					<input
						type='text'
						name='name'
						id='name'
						value={form.name}
						onChange={handleChange}
						required
					/>
					{errors.name && (
						<p className='invalid-response'>{errors.name}</p>
					)}
				</div>
				<div className='form-group'>
					<label htmlFor='email'>Email</label>
					<input
						type='email'
						name='email'
						id='email'
						value={form.email}
						onChange={handleChange}
						required
					/>
					{errors.email && (
						<p className='invalid-response'>{errors.email}</p>
					)}
				</div>
				<div className='form-group'>
					<label htmlFor='message'>Message</label>
					<textarea
						name='message'
						id='message'
						rows='3'
						value={form.message}
						onChange={handleChange}
						required
					/>
					{errors.message && (
						<p className='invalid-response'>{errors.message}</p>
					)}
				</div>
				<button
					type='submit'
					className='btn btn-primary'>
					Submit
				</button>
			</form>
		</div>
	);
}

export default ContactForm;
