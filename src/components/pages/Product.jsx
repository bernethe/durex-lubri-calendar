import React from 'react'
import ProductImg from '../../assets/img/prod.png';
import MyLogo from '../../assets/img/logo-durex.svg';
import Car01 from '../../assets/img/car01.svg';
import Car02 from '../../assets/img/car02.svg';
import Car03 from '../../assets/img/car03.svg';

const ProductItem = ({img, alt=''}) => {
    return <div className='w-1/3 p-2 lg:px-8'>
        <img src={img} alt={alt} />
    </div>
}

const Product = () => {
    return <div className='min-h-screen px-2 bg-gradient-radial flex flex-col justify-between'>
		<div className='container mx-auto py-4'>
			<div className='flex items-center max-w-[400px] w-full sm:w-1/2 mx-auto'>
				<div className='w-1/3 px-4'>
					<img src={ProductImg} alt="Durex Gel Lubricante Naturals" className='max-w-[150px] w-full' />
				</div>
				<div className='w-2/3 px-4 text-center'>
					<div className='bg-primary text-white inline-block px-8 rounded-full font-bold text-xl mb-4'><span className='font-OneNightSansExtended block'>NUEVO</span> LUBRICANTE</div>
					<h1 className='text-lg'><span className='block text-4xl sm:text-4xl font-bold'>¡LUBRICATE!</span> HACELO COMO TE GUSTA</h1>
				</div>
			</div>
        </div>
        <div className='flex w-full sm:w-2/5 mx-auto'>
            <ProductItem img={Car01} alt='Ingredientes 100% Naturales' />
            <ProductItem img={Car02} alt='Dermatológicamente Testeado' />
            <ProductItem img={Car03} alt='A base de agua' />
        </div>
        <div className='w-1/3 sm:w-1/6 mx-auto py-4'>
            <img src={MyLogo} alt="Durex" className='max-w-full w-full' />
        </div>
        <div className='container mx-auto text-xs font-thin flex py-2'>
            <p className='w-full text-center mx-auto'>*Hecho con ingredientes de origen 100 % natural que ayudan a que el sexo se sienta naturalmente suave. <br /> Lea la etiqueta del producto antes de su uso. <br /> RB-M-98318.</p>
        </div>
    </div>
}

export default Product