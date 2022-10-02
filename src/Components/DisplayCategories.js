const DisplayCategories = ({ type }) => {
	return (
		<section>
			<article>
				<div className='item'>
					<div className='title'>
						{type.title}/{m.desc}
					</div>
					 
					<div className='price'>${menu.price}</div>
				</div>
			</article>
		</section>
	);
};
export default DisplayCategories;
