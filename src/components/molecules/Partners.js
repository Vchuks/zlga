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

const Partners = () => {
  return (
    <div className='d-flex align-items-center gap-3 py-4'>
        <div className='w-100 partner'>
            <Image className="w-100" src={access}/>
        </div>
        <div className='w-100 partner'>
            <Image className="w-100" src={ash}/>
        </div>
        <div className='w-100 partner'>
            <Image className="w-100" src={inter}/>
        </div>
        <div className='w-100 partner'>
            <Image className="w-100" src={justice}/>
        </div>
        <div className='w-100 partner'>
            <Image className="w-100" src={kaduna}/>
        </div>
        <div className='w-100 partner'>
            <Image className="w-100" src={kunden}/>
        </div>
        <div className='w-100 partner'>
            <Image className="w-100" src={lawma}/>
        </div>
        <div className='w-100 partner'>
            <Image className="w-100" src={ondo}/>
        </div>
        <div className='w-100 partner'>
            <Image className="w-100" src={uba}/>
        </div>
    </div>
  )
}

export default Partners
