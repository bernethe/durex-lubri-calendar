import React, { useState } from 'react'
import mouseWheel from '../../assets/img/mouse-wheel.svg'

const MouseDowner = () => {

    const [scrollAll, setScrollAll] = useState(false);

    document.addEventListener('scroll', (e) => {
        if (window.scrollY+window.innerHeight >= document.body.offsetHeight-10) {
            setScrollAll(true);
        }
    });

    return !scrollAll ? <div className='bg-black/50 backdrop-blur text-white text-center fixed p-2 w-24 h-28 bottom-2 left-[calc(50%-3rem)] rounded-xl'>
        <img src={mouseWheel} alt="" className='w-4 mx-auto' />
        <small className='leading-none'>Desplácese hacia abajo</small>
    </div> : <></>
}

export default MouseDowner