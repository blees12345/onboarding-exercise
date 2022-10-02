import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../queeery-logo.png';
function Example() {
	const [show, setShow] = useState(true);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
    setTimeout(() => {
			handleClose();
		}, 4000);
	return (
		<div className='modal'>
			<Modal show={show} onHide={handleClose}>
				<div className='modal-container'>
					<img className='modal-logo' alt='logo' src={logo}></img>
				</div>

				<Button variant='secondary' onClick={handleClose}>
					Lets check out some movies!
				</Button>
				<div></div>
			</Modal>
		</div>
	);
}

export default Example
