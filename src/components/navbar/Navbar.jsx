import './navbar.scss';
import { Link } from 'react-scroll';

const Navbar = () => {
	return (
		<>
			<nav className='navbar'>
				<Link
					to='header'
					smooth={true}
					activeClass='active'>
					Home
				</Link>
				<Link
					to='about'
					smooth={true}
					offset={-70}
					activeClass='active'>
					About
				</Link>
				<Link
					to='experience'
					smooth={true}				
					activeClass='active'>
					Experience
				</Link>
				<Link
					to='services'
					smooth={true}			
					activeClass='active'>
					Services
				</Link>
				<Link
					to='portfolio'
					smooth={true}				
					activeClass='active'>
					Portfolio
				</Link>
				<Link
					to='contact'
					smooth={true}				
					activeClass='active'>
					Contact
				</Link>
			</nav>
		</>
	);
};

export default Navbar;
