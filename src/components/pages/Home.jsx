import React, { useRef, useState } from 'react'
import ProductImg from '../../assets/img/prod.png';

const Home = ({myDate, setMyDate}) => {

	console.log(myDate);

	const [changeDate, setChangeDate] = useState(myDate !== undefined);

	const dateInput = useRef(null);

	const handleClick = () => {
		setMyDate(dateInput.current.value);
	}

	return <div className={ `px-2 text-center ${myDate !== undefined ? 'bg-gradient-silver' : 'bg-gradient-radial' } h-full` }>
		<div className='container mx-auto py-4'>
			<header className='flex justify-center items-center w-full max-w-[512px] mx-auto'>
				<div className='w-1/3 sm:w-1/5 px-4'>
					<img src={ProductImg} alt="Durex Gel Lubricante Naturals" className='max-w-[150px] w-full' />
				</div>
				<div className='w-2/3 sm:w-4/5 px-4'>
					<div className='bg-primary text-white inline-block px-8 rounded-full font-bold text-xl mb-4'><span className='font-OneNightSansExtended block'>NUEVO</span> LUBRICATE</div>
					<h1 className='text-lg sm:text-xs'><span className='block text-4xl sm:text-3xl font-bold'>¡LUBRICATE!</span> HACELO COMO TE GUSTA</h1>
					<p><span className='font-thin'>Identificá los días en los que tu vagina</span> <br /> <strong className='uppercase'>no cuenta con una lubricación óptima debido a tu ciclo menstrual</strong></p>
				</div>
			</header>
			<p className='font-thin mt-8'>Indicá la <strong>fecha de tu última menstruación</strong></p>
			<div className='flex justify-center items-center w-full sm:w-1/2 mx-auto'>
				<div className='flex-grow-0 px-4'>
					<div className='bg-primary rounded-md py-2 px-4 my-4'>
						<input type='date' className='w-full' ref={dateInput} value={myDate} onChange={ () => setChangeDate(true) } />
					</div>
					{ changeDate && <button className='bg-primary rounded py-2 px-4 my-4 text-white hover:bg-primary/75' onClick={handleClick}>Calcular</button> }
				</div>
			</div>
			<p className='text-xs my-4 w-full sm:w-1/2 mx-auto'>Recordá que no todos los ciclos menstruales son iguales y que cada cuerpo es diferente. Esto está basado en un ciclo menstrual promedio regular. Siempre tené en cuenta que tu médico es quien te puede dar la asesoría personalizada y adecuada.</p>
			<p className='text-xs my-8'>Lee la etiqueta del producto antes de su uso. <br /> RB-M-98318.</p>
		</div>
	</div>
}

export default Home