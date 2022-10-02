import React,{useState}from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Movies from '../movies'
const MoviesCards = (props) => {
	 const [like, setLike] = useState({Movies});
	
	const handleLike = (value) => {
		setLike(like +1)
		setLike(current =>[...current,value])
		console.log(value)
		};
		
	return (
		<div className='card-container'>
			<div className='cards'>
				{props.details.map((value, index) => (
					<Card className='card' key={index}>
						<Card.Body>
							<Card.Title className='card-title'>{value.title}</Card.Title>
							<Card.Text>{value.category}</Card.Text>
						</Card.Body>
						<Card.Img alt='pic' src={value.url}></Card.Img>
						<div className='likes'>
							<Button className='likeButton' onClick={() => handleLike(value.likes + 1)} >
								+
							</Button>
							<p>Likes:{value.likes}</p>
							<p>Dislikes:{value.dislikes}</p>
							<Button className='likeButton'>-</Button>
						</div>
					</Card>
				))}
			</div>
		</div>
	);
};

export default MoviesCards;
