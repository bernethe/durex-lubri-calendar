import React from 'react'
import Month from './Month'
import MyLogo from '../../assets/img/logo-durex.svg';
import St0 from '../../assets/img/st0.png'
import St1 from '../../assets/img/st1.png'
import St2 from '../../assets/img/st2.png'
import St3 from '../../assets/img/st3.png'
import St4 from '../../assets/img/st4.png'

const Calendar = ({myDate}) => {
    return <div className='bg-gradient-radial h-full' id='calendar'><div className='px-2 flex flex-col justify-between bg-tropical'>
        <p className='text-center text-2xl my-4'><span className='font-thin'>TU CICLO MENSTRUAL Y</span> <br /> <strong className='text-3xl'>NIVELES DE LUBRICACIÓN</strong></p>
        <Month myDate={myDate} />
        <div className='mx-auto bg-secondary-dark p-4  my-4'>
            <h4>Etapas</h4>
            <table className='bg-primary-light'>
                <tbody>
                    <tr>
                        <td><img src={St0} alt="Durex" className='w-[2rem]' /></td>
                        <td>Menstruación</td>
                    </tr>
                    <tr>
                        <td><img src={St1} alt="Durex" className='w-[2rem]' /></td>
                        <td>Seca</td>
                    </tr>
                    <tr>
                        <td><img src={St2} alt="Durex" className='w-[2rem]' /></td>
                        <td>Lubricada</td>
                    </tr>
                    <tr>
                        <td><img src={St3} alt="Durex" className='w-[2rem]' /></td>
                        <td>Extra Lubricada</td>
                    </tr>
                    <tr>
                        <td><img src={St4} alt="Durex" className='w-[2rem]' /></td>
                        <td>Poco Lubricada</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className='w-1/3 sm:w-1/6 mx-auto py-4'>
            <img src={MyLogo} alt="Durex" className='max-w-full w-full' />
        </div>
        <div className='text-xs font-thin py-2'>
            <div className='text-center'>Fuente: Chappell et al. Am J Obstet Gynecol 2014;211:226.e1-7. <br /> RB-M-98318.</div>
        </div>
    </div></div>
}

export default Calendar