import React from 'react'

const Home = () => {
  return (
    <section className="flex flex-col  justify-center items-center home-height backgroundSVG-home">
        <img src="../../assets/images/computadora-de-escritorio.png" alt="Logo" className="animate-fade animate-delay-200 w-[290px] xl:w-[400px] shadow-Logo"/>
        <h2 className=" font-montserrat font-bold tracking-[3px] mt-6 text-2xl xl:mt-2 xl:text-4xl text-orange animate-flip-down animate-delay-200">FAKE E STORE</h2>
        <p  className="mt-6 font-hindMadurai tracking-[2px] text-base xl:text-xl px-5 xl:px-0 text-greenBlue text-justify font-medium capitalize animate-flip-down  animate-delay-200">A place to find the best resources for upgrade or have a new computer.</p>
    </section>
  )
}

export default Home