import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../queeery-logo.png';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import Categories from './Categories';
function ColorSchemesExample() {
	return (
		<>
			<Navbar bg='light' variant='light'>
				<Container>
					<Link to='./'>
						<img className='nav-logo' alt='logo' src={logo}></img>
						<Navbar.Brand href='#home'>Queeery Movies</Navbar.Brand>
					</Link>

					<Nav className='me-auto'>
						<Link to='./Home.js'>
							<LinkContainer to='/'>
								<Nav.Link href='#home'>Home</Nav.Link>
							</LinkContainer>
						</Link>
						<Link to={Categories}>
							<LinkContainer to='./Categories'>
								<Categories/>
							</LinkContainer>
						</Link>

					</Nav>
				</Container>
			</Navbar>
		</>
	);
}

export default ColorSchemesExample;
