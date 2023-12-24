import './socials.scss';
import { BsLinkedin, BsGithub, BsTwitterX } from 'react-icons/bs';

const Socials = () => {
	return (
		<>
			<div className='socials'>
				<a
					href='https://www.linkedin.com/in/jeremiah-haynes/'
					target='_blank'
					rel='noreferrer'>
					<BsLinkedin />
				</a>
				<a
					href='https://www.github.com/dsatpm'
					target='_blank'
					rel='noreferrer'>
					<BsGithub />
				</a>
				<a
					href='https://www.twitter.com/__dsatpm'
					target='_blank'
					rel='noreferrer'>
					<BsTwitterX />
				</a>
			</div>
		</>
	);
};

export default Socials;
