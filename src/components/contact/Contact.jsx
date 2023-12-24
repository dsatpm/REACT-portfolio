import './contact.scss';

const Contact = () => {
	return (
		<>
			<section
				id='contact'
				className='contact'>
				<form className='contact-form'>
					<h2>Contact</h2>
					<div className='form-group'>
						<label htmlFor='name'>Name</label>
						<input
							type='text'
							name='name'
							id='name'
							placeholder='Your Name...'
							required
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='email'>Email</label>
						<input
							type='email'
							name='email'
							id='email'
							required></input>
					</div>
					<div className='form-group'>
						<label htmlFor='message'>Message</label>
						<textarea
							name='message'
							id='message'
							rows='3'
							required></textarea>
					</div>
					<button
						type='submit'
						className='btn btn-primary'>
						Submit
					</button>
				</form>
			</section>
		</>
	);
};

export default Contact;
