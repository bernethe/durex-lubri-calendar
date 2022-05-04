import React, { useEffect, useState } from 'react';
import Calendar from './components/pages/Calendar';
import Fact from './components/pages/Fact';
import Home from './components/pages/Home';
import MouseDowner from './components/pages/MouseDowner';
import Product from './components/pages/Product';
import Wheel from './components/pages/Wheel';

const App = () => {

	const [myDate, setMyDate] = useState('');

	useEffect(() => {
		if(myDate !== '') {
			document.getElementById('calendar').scrollIntoView();
		}
	} , [myDate]);

	return <>
		{ myDate === '' ? <Home setMyDate={setMyDate} /> : <>
			<div className='md:flex'>
				<div className='w-full md:w-1/3'>
					<Home myDate={myDate} setMyDate={setMyDate} />
				</div>
				<div className='w-full md:w-2/3'>
					<Calendar myDate={myDate} />
				</div>
			</div>
			<Fact />
			<Wheel />
			<Product />
			<MouseDowner />
		</> }
	</>
}

export default App