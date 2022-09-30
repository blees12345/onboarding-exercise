import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../queeery-logo.png'
function ColorSchemesExample() {
	return (
		<>
		
			<Navbar bg='light' variant='light'>
				<Container>
					<img className='nav-logo' src={logo}></img>
					<Navbar.Brand href='#home'>Navbar</Navbar.Brand>
					<Nav className='me-auto'>
						<Nav.Link href='#home'>Home</Nav.Link>
						<Nav.Link href='#features'>Features</Nav.Link>
						<Nav.Link href='#pricing'>Pricing</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
			
		</>
	);
}

export default ColorSchemesExample;
