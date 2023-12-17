import './navbar.scss';
import { Link } from 'react-scroll';

const Navbar = () => {
	return (
		<>
			<nav className='navbar'>
				<Link
					to='header'
					spy={true}
					smooth={true}
					duration={300}
					activeClass='active'>
					Home
				</Link>
				<Link
					to='about'
					spy={true}
					smooth={true}
					duration={300}
					activeClass='active'>
					About
				</Link>
				<Link
					to='experience'
					spy={true}
					smooth={true}
					duration={300}
					activeClass='active'>
					Experience
				</Link>
				<Link
					to='services'
					spy={true}
					smooth={true}
					duration={300}
					activeClass='active'>
					Services
				</Link>
				<Link
					to='portfolio'
					spy={true}
					smooth={true}
					duration={300}
					activeClass='active'>
					Portfolio
				</Link>
				<Link
					to='contact'
					spy={true}
					smooth={true}
					duration={300}
					activeClass='active'>
					Contact
				</Link>
			</nav>
		</>
	);
};

export default Navbar;
