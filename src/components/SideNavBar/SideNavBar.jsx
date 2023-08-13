import React from 'react';
import {menuItems} from '../../constants/index'
import Footer from './Footer';
import NavList from './NavList';



const SideNavBar = () => {
  return (
    <section className='bg-greenBlue text-ligthOrange py-8 px-10 flex flex-col items-center justify-between h-screen'>
        <div>
            <img className="w-[180px]" src="../../assets/images/computadora-de-escritorio.png" alt="Logo"/>
            <h2 className="text-center uppercase font-montserrat font-bold tracking-[3px] mt-2">fake e store</h2>
        </div>
        <div className='flex flex-col gap-y-24'>
            {
                menuItems.map(({id, name}) => {
                    return(
                        <NavList key={id} name={name}/>
                    )
                })
            }
        </div>
        <div>
            <Footer />
        </div>

    </section>
  )
}

export default SideNavBar