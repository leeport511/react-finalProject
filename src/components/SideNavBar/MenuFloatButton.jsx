import React from 'react'

export const MenuFloatButton = ({toogleMenuDisplay, handleMenuDisplay}) => {
  return (  
    <button className={`absolute ${toogleMenuDisplay ? 'left-48 top-28 transition-all ease-out duration-200' : 'left-3 top-28 transition-all ease-out duration-200' }  bg-greenBlue rounded-full w-[70px] border-ligthOrange border-2 drop-shadow-2xl hover:drop-shadow-md z-50 xl:hidden`} onClick={handleMenuDisplay}>
        <img src="../../assets/images/computadora-de-escritorio.png" alt="Logo Fake Store" className="p-1"/>
    </button>
  )
}
