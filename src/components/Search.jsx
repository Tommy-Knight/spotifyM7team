import { Container, Card, Row, Spinner, Alert, Form } from "react-bootstrap";
import { useState } from "react";
// import { Link } from "react-router-dom";

export default function Search(props) {
	const [songs, setSongs] = useState([]);
	const [showSpinner, setShowSpinner] = useState(false);
	const [findError, setFindError] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");


	const fetchResults = async () => {
		try {
			setShowSpinner(true);

			let response = await fetch(
				"https://striveschool-api.herokuapp.com/api/deezer/search?q=" + searchQuery
			);
			if (response.ok) {
				let jsonData = await response.json();
				let data = jsonData.data;
				console.log(data);
				setSongs(data);
				setFindError(false);
				setShowSpinner(false);
			} else {
				setFindError(true);
				setShowSpinner(false);
			}
		} catch (error) {
			console.log(`${error} fetch failed`);
			setFindError(true);
			setShowSpinner(false);
		}
	};

	const onChangeFunction = (e) => {
		e.preventDefault();
		setSearchQuery(e.target.value);
		fetchResults();
	};

	return (
		<>
			<Container>
				<Form>
					<Form.Group className='mt-3'>
						<svg
							className='mr-2 mb-2'
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							stroke-width='2'
							stroke-linecap='round'
							stroke-linejoin='round'>
							<circle cx='11' cy='11' r='8'></circle>
							<line x1='21' y1='21' x2='16.65' y2='16.65'></line>
						</svg>
						<Form.Control
							style={{ display: "inline-block" }}
							type='text'
							placeholder='Search for Albums, Artists...'
							onChange={(e) => {
								onChangeFunction(e);
							}}
						/>
					</Form.Group>
				</Form>
			</Container>

			{findError && <Alert variant='success'>Uh Oh! We can't find what you're looking for. </Alert>}

			{showSpinner && <Spinner style={{ marginLeft: "6px" }} animation='grow' variant='success' />}
			<Container className='m-15 p-5' fluid>
				<h3 className='mt-4 text-white'>Searching for "{searchQuery}"</h3>
				<Row>
					{songs.map(song => (
							 <Card className='col-md-3 text-white my-2 bg-dark' key={song.id}>
						<Card.Img variant="top"  src={song.album.cover_medium} alt={song.album.id}
						 onClick={()=> props.history.push('/artist/' + song.artist.id)}  />
						<Card.Body>
						  <Card.Title>{song.album.title}</Card.Title>
						  <Card.Text>  - {song.artist.name}  </Card.Text>						  
						</Card.Body>
					  </Card> ))
}		
						
				</Row>
			</Container>
		</>
	);
}
