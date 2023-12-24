import './navbar.scss';
import { Link } from 'react-scroll';

const Navbar = () => {
	return (
		<>
			<nav className='navbar'>
				<Link
					to='header'
					activeClass='active'>
					Home
				</Link>
				<Link
					to='about'
					offset={-70}
					activeClass='active'>
					About
				</Link>
				<Link
					to='experience'		
					activeClass='active'>
					Experience
				</Link>
				<Link
					to='services'	
					activeClass='active'>
					Services
				</Link>
				<Link
					to='portfolio'		
					activeClass='active'>
					Portfolio
				</Link>
				<Link
					to='contact'		
					activeClass='active'>
					Contact
				</Link>
			</nav>
		</>
	);
};

export default Navbar;
