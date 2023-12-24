import Socials from './socialMedia/Socials';
import './footer.scss';

const Footer = () => {
	return (
		<>
			<section
				id='footer'
				className='footer'>
				<Socials />
				<p>
					<span>Jeremiah Haynes</span> &copy; 2023
				</p>
			</section>
		</>
	);
};

export default Footer;
