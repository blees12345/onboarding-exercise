import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../queeery-logo.png';
function Example() {
	const [show, setShow] = useState(true);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<div className='modal'>
			<Modal show={show} onHide={handleClose}>
				<img className='modal-logo' src={logo}></img>
				<Button variant='secondary' onClick={handleClose}>
					Lets check out some movies!
				</Button>
			</Modal>
		</div>
	);
}

export default Example
