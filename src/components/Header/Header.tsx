import React from 'react'

import HeaderContent from '../HeaderContent/HeaderContent'
import HeaderImage from '../HeaderImage/HeaderImage'


function Header() {
  return (
    <section className="bg-[#FF5349] text-white py-16 px-8 ">
      <div className="max-w-6xl mx-auto flex   items-start justify-between gap-10 max-[830px]:flex-col max-[830px]:items-center">
        
        <HeaderContent />
        
        <HeaderImage />
      </div>
    </section>
  );
}
export default Header