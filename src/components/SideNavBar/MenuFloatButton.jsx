import React from 'react'

export const MenuFloatButton = ({toogleMenuDisplay, handleMenuDisplay}) => {
  return (  
    <button className={`absolute ${toogleMenuDisplay ? 'left-48 top-28 transition-all ease-out duration-200' : 'left-3 top-28 transition-all ease-out duration-200' } unset bg-[#f8f8f8] rounded-full w-[60px] border-ligthOrange border-4 shadow-menuButton z-50 xl:hidden`} onClick={handleMenuDisplay}>
        <img src="../../assets/images/bar-de-hamburguesas.png" alt="Logo Fake Store" className=""/>
    </button>
  )
}
