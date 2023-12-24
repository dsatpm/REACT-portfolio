import './portfolio.scss';
import {
	jate,
	mytholotek,
	blog,
	social,
	skinscore,
	eCommerce,
} from '../../assets';

const Portfolio = () => {
	return (
		<>
			<section
				id='portfolio'
				className='portfolio'>
				<h2>Portfolio</h2>
				<div className='card-container'>
					{portfolioItems.map((item) => (
						<div
							key={item.id}
							className='card'>
							<div className='img-content'>
								<img
									src={item.src}
									alt={item.title}
								/>
								<div className='content'>
									<div className='heading'>{item.title}</div>
									{item.description}
									<div className='card-links'>
										<a
											href={item.link}
											className='btn btn-primary'>
											Live Demo
										</a>
										<a
											href={item.repo}
											className='btn'>
											Github
										</a>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>
		</>
	);
};

const portfolioItems = [
	{
		id: 1,
		title: 'J.A.T.E.',
		src: jate,
		link: 'https://j-a-t-e-y9ac.onrender.com/',
		repo: 'https://github.com/dsatpm/J.A.T.E.',
		description:
			"J.A.T.E. is not just another text editor; it's a tool that enhances your creativity and productivity",
	},
	{
		id: 2,
		title: 'Mytholoteck',
		src: mytholotek,
		link: 'https://drive.google.com/file/d/16OA3Wm7n1TzKn5nqhqbO2Ti_JunAb91O/view',
		repo: 'https://github.com/dsatpm/MYTHOLOTEK-employee-tracker',
		description:
			'Chart your workforce like never before, harnessing the power of mythical beings to manage your team effortlessly.',
	},
	{
		id: 3,
		title: 'Console.Blog',
		src: blog,
		link: 'https://console-dot-blog-9aca03c81354.herokuapp.com/',
		repo: 'https://github.com/dsatpm/CONSOLE.BLOG-coder-blogspot',
		description:
			"This coder's blogspot provides a platform to share insights, experiences, and code snippets. Unleash the power of words in the coding world!",
	},
	{
		id: 4,
		title: 'Social Media API',
		src: social,
		link: 'https://drive.google.com/file/d/1G2YK_ZnnkUWe72x0Gh2Mnd_EmgHoohCz/view',
		repo: 'https://github.com/dsatpm/SOCIAL-MEDIA-API',
		description:
			'Seamlessly integrating social interactions into your applications, this API is your gateway to creating engaging and dynamic user experiences.',
	},
	{
		id: 5,
		title: 'Skin Score',
		src: skinscore,
		link: 'https://skin-score-481d334348c9.herokuapp.com/login',
		repo: 'https://github.com/dsatpm/SKINSCORE-social-media-app',
		description:
			'Skin Score connects tattoo lovers worldwide. Rate, share, and discover the most stunning ink creations while building a community of passionate tattoo enthusiasts',
	},
	{
		id: 6,
		title: 'E-Commerce Backend API',
		src: eCommerce,
		link: 'https://drive.google.com/file/d/1GJcqHnqvjoOlteuK-z9bF3-picC00xXM/view',
		repo: 'https://github.com/dsatpm/E-COMMERCE-backend-project',
		description:
			'This backend solution provides seamless integration, secure transactions, and efficient management of your online business.',
	},
];

export default Portfolio;
