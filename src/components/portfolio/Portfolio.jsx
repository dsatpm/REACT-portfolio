import './portfolio.scss';

const Portfolio = () => {
	return (
		<>
			<section
				id='portfolio'
				className='portfolio'>
				<h1>Portfolio</h1>
        <div className="container">
          <div className="img-container">
            <img src="assets/1.png" alt="portfolio" />
            <img src="assets/2.png" alt="portfolio" />
            <img src="assets/3.png" alt="portfolio" />
            <img src="assets/4.png" alt="portfolio" />
          </div>
        </div>
			</section>
		</>
	);
};

export default Portfolio;
