import './services.scss';

const Services = () => {
	return (
		<>
			<section
				id='services'
				className='services'>
          <h2>Services Offered</h2>
				<div className='services-container'>
					{serviceItems.map((item) => {
						const { id, title, description } = item;
						return (
							<div
								key={id}
								className='card'>
								<div className='card-header'>
									<h3>{title}</h3>
								</div>
								<div className='card-body'>
									<p>{description}</p>
								</div>
							</div>
						);
					})}
				</div>
			</section>
		</>
	);
};

const serviceItems = [
  {
    id: 1,
    title: 'Crafting Engaging Front End Experiences',
    description:
      'Immerse your audience in captivating web experiences tailored to modern standards. Whether it’s building a brand new website or enhancing your existing one, I’ve got you covered.',
  },
  {
    id: 2,
    title: 'Database Wizardry',
    description:
      'Unlock the power of seamless database management for your business or personal needs. Entrust me with the magic of organizing and optimizing your data, making complexity disappear.',
  },
  {
    id: 3,
    title: 'Dynamic Back End Solutions',
    description:
      'Leverage the strength of robust back-end development to create a website that goes beyond expectations. Whether it’s a new venture or refining an existing masterpiece, count on me for excellence.',
  }
];


export default Services;
