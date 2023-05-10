import React from 'react'
import Image from '../atom/Image'
import access from '../../images/accesslogo.jpg'
import ash from '../../images/ashtrom.jpg'
import inter from '../../images/interswitch.jpg'
import justice from '../../images/justice.jpg'
import kaduna from '../../images/kaduna.jpg'
import kunden from '../../images/kunden.jpg'
import lawma from '../../images/lawma.jpg'
import ondo from '../../images/ondologo.jpg'
import uba from '../../images/uba.jpg'
import providus from '../../images/providus.jpg'
import mastercard from '../../images/mastercard.jpg'
import otto from '../../images/otto.jpg'
import forte from '../../images/forte.jpg'
import indocorp from '../../images/indocorp.jpg'
import heritage from '../../images/heritage.jpg'
import verve from '../../images/verve.jpg'

const Partners = () => {
  return (
    <div className='d-flex align-items-center gap-3 py-4 part'>
        <div className='w-100 partner'>
            <Image className="patimg" src={access}/>
        </div>
        <div className='w-100 partner'>
            <Image className="patimg" src={ash}/>
        </div>
        <div className='w-100 partner'>
            <Image className="patimg" src={inter}/>
        </div>
        <div className='w-100 partner'>
            <Image className="patimg" src={justice}/>
        </div>
        <div className='w-100 partner'>
            <Image className="patimg" src={kaduna}/>
        </div>
        <div className='w-100 partner'>
            <Image className="patimg" src={kunden}/>
        </div>
        <div className='w-100 partner'>
            <Image className="patimg" src={lawma}/>
        </div>
        <div className='w-100 partner'>
            <Image className="patimg" src={ondo}/>
        </div>
        <div className='w-100 partner'>
            <Image className="patimg" src={uba}/>
        </div>
        <div className='w-100 partner'>
            <Image className="patimg" src={providus}/>
        </div>
        <div className='w-100 partner'>
            <Image className="patimg" src={mastercard}/>
        </div>
        <div className='w-100 partner'>
            <Image className="patimg" src={otto}/>
        </div>
        <div className='w-100 partner'>
            <Image className="patimg" src={forte}/>
        </div>
        <div className='w-100 partner'>
            <Image className="patimg" src={indocorp}/>
        </div>
        <div className='w-100 partner'>
            <Image className="patimg" src={heritage}/>
        </div>
        <div className='w-100 partner'>
            <Image className="patimg" src={verve}/>
        </div>
    </div>
  )
}

export default Partners
