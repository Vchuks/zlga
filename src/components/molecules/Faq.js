import React from 'react'
import Image from '../atom/Image'
import faqimg from '../../images/FAQs.png'
import FaqCard from './FaqCard';
import FaqList from './FaqList';
import 'boxicons'

const Faq = () => {
    const faq = FaqList.map((list) => {
        return <FaqCard key={list.id} list={list} />;
      });
  return (
    <div className='row p-3 p-lg-5'>
      <div className='d-none d-lg-block col-sm-12 col-md-12 col-lg-3 p-0 pt-lg-5'>
        <Image className="faqimg" src={faqimg}/>
      </div>
      <div className='col-sm-12 col-md-12 col-lg-9 p-0 pt-lg-5'>
        <p className='d-lg-none py-2 text-center fw-bold colordark fs-4'>Frequently Asked Questions</p>
        {faq}
      </div>
    </div>
  )
}

export default Faq
