import React,{useState,useEffect}from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useRef } from 'react';

const MoviesCards = (props) => {
	 const [like, setLike] = useState([]);
useEffect(() => {
	setLike(props.details);
}, []);
  const ref = useRef(null);

  function incrementVote(e){
	console.log(e.Target.index);
	
		if (like.id === e.currentTarget) {
			like.votes = like.votes + 1;
		}
		return like;
	  
	};
	let decrementVote = () => {
		setLike(like - 1);
		setLike({ ...like, votes: like });
	};
	

		console.log(props.details.id)
		
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
							<Button className='likeButton'  onClick={incrementVote}>
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
