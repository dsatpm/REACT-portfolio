import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';
import './navbar.scss';

const Navbar = () => {
	const [scrollPosition, setScrollPosition] = useState(0);
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPosition = window.scrollY;

			if (currentScrollPosition > scrollPosition && visible) {
				setVisible(false);
			} else if (currentScrollPosition < scrollPosition && !visible) {
				setVisible(true);
			}
			setScrollPosition(currentScrollPosition);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [scrollPosition, visible]);

	return (
		<>
			<nav className={`navbar ${'visible' ? '' : 'hidden'}`}>
				<span>Jeremiah Haynes</span>
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
