import './App.css';
import Home from './Components/Home';
import Navigation from './Components/Navigation';
import { Routes, Route } from 'react-router-dom';
import Modal from './Components/Modal'
import Categories from './Components/Categories';
function App() {
	return (
		<main className='main'>
			<Navigation />
			<Modal />
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='categories' element={<Categories></Categories>}></Route>
			</Routes>
		</main>
	);
}

export default App;
