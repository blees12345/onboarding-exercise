import './App.css';
import Home from './Components/Home';
import Menu from './Components/Menu';
import Navigation from './Components/Navigation';
import { Routes, Route } from 'react-router-dom';
import Modal from './Components/Modal'
function App() {
	return (
		<main className='main'>
			<Navigation />
			<Modal />
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/menu' element={<Menu />}></Route>
			</Routes>
		</main>
	);
}

export default App;
