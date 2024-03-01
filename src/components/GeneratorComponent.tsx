import React, { useEffect, useState } from 'react'
import getAdvice from '../DataServices/DataServices';
import Cookie from '../Interfaces/interface';
import Dice from '../assets/icon-dice.svg';
import DesktopDivide from '../assets/pattern-divider-desktop.svg';
import MobileDivide from '../assets/pattern-divider-mobile.svg'


const GeneratorComponent = () => {

    const [tip, setTip] = useState<Cookie>();
    const [switcheroo, setSwitcheroo] = useState<boolean>(false);

    useEffect(() => {
        const fortune = async () => {
            const dataFetch = await getAdvice();
            // console.log(dataFetch)
            setTip(dataFetch)
        }
        fortune();
    }, [switcheroo])

    const toggle = () => {
        setSwitcheroo(!switcheroo)
        console.log(switcheroo)
    }

    return (
        <div>
            <div className='center'>
                <div>
                <div className='divGrey'>
                    <h5 className='txtG'>ADVICE #{tip?.slip.id}</h5>
                    <h2>{tip?.slip.advice}</h2>
                    <img />
                </div>
                <button className='btnGreen' onClick={toggle}>
                    <img src={Dice} />
                </button>
                </div>
            </div>
        </div>
    )
}

export default GeneratorComponent