import React from 'react'

const Fact = () => {
    return <div className='x-2 flex flex-col justify-between bg-white w-full sm:w-1/2 mx-auto'>
        <div className='my-4'>
            <p className='text-center text-2xl'><strong className='text-3xl'>LA POCA LUBRICACIÓN PUEDE AFECTAR TU SALUD <br /> VAGINAL Y SEXUAL</strong></p>
        </div>
        <div className='my-4 text-center'>
            <div className='bg-primary text-white inline-block px-8 py-2 rounded-full font-bold text-xl mb-4'>¿SABÍAS QUE?</div>
        </div>
        <div className="my-4 grid grid-cols-2 divide-x divide-primary font-thin text-xl">
            <div className='text-right px-4'>Pasás 2/3 del mes en donde no contás con la lubricación vaginal adecuada</div>
            <div className='text-left px-4'>Después de la menstruación tenés 3 días secos o con cero lubricación</div>
        </div>
        <div className='my-4 text-center'>
            <p>
                RECORDÁ QUE ES MÁS NORMAL <br />
                <strong className='text-4xl'>DE LO QUE CREÉS</strong> <br />
                Y NO OLVIDÉS TOMAR EN CUENTA QUE
            </p>
        </div>
        <div className='my-4 text-center'>
            <div className='text-white bg-primary py-2 px-4 rounded-t-3xl inline-block text-3xl'>
                9/10 MUJERES <br />
                LO PREFIEREN <br />
                <strong>CON LUBRICANTE *</strong>
            </div>
        </div>
        <div className='my-4 text-xs font-thin py-2'>
            <div className='text-center'>* Fuente: Chappell et al. Am J Obstet Gynecol 2014;211:226.e1-7. <br /> RB-M-98318.</div>
        </div>
    </div>
}

export default Fact