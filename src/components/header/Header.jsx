import './header.scss';
import CallToAction from './cta/CallToAction';
import { myFace } from '../../assets';

const Header = () => {
	return (
		<>
			<header className='header'>
				<div className='wrapper'>
					<div className='text-container'>
						<h1>Hello, World!</h1>
						<h2>
							I'm <span>Jeremiah Haynes</span>
						</h2>
						<h5 className='text-light'>Full Stack Developer</h5>
						<CallToAction />
					</div>
					<div>
						<div className='image-container'>
							<img
								src={myFace}
								alt='Jeremiah Haynes'
							/>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
