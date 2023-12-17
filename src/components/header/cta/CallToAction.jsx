import './cta.scss';
import { resume } from '../../../assets';

const CallToAction = () => {
	return (
		<>
			<div className='call-to-action'>
				<a
					href={resume}
					download
					className='btn'>
					Resume
				</a>
				<a
					href='#contact'
					className='btn btn-primary'>
					Contact
				</a>
			</div>
		</>
	);
};

export default CallToAction;
