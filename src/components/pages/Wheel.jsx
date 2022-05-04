import React from 'react'
// import MyLogo from '../../assets/img/logo-durex.svg';
import Rueda from '../../assets/img/wheel.svg';

const Wheel = () => {
    return <div className='px-2 bg-gradient-radial text-center flex flex-col justify-between'><div className='container mx-auto bg-tropical'>
        <p className='w-10/12 mx-auto my-4'><strong>TENER UN ESTIMADO DE CUÁLES SON TUS DÍAS SECOS, PUEDE AYUDARTE A COMBATIR LA INCOMODIDAD PARA QUE PODÁS SENTIRTE Y DISFRUTAR AÚN MÁS</strong></p>
        <div className='my-4 '>
            <div className='bg-primary text-white inline-block px-8 py-2 rounded-full font-bold text-xl mb-4'>¿CUÁLES SON LAS FASES?</div>
        </div>
        <div className='container mx-auto my-4'>
            <img src={Rueda} alt="Durex" className='w-full sm:w-5/12 mx-auto' />
        </div>
        <div className='text-xs font-thin my-4 container mx-auto'>
            <div className="w-full sm:w-2/3 mx-auto mb-12">
                <div className='text-center'>Fuente: Chappell et al. Am J Obstet Gynecol 2014;211:226.e1-7. <br /> RB-M-98318.</div>
            </div>
        </div>
    </div></div>
}

export default Wheel