import React from 'react'

const Home = () => {
  return (
    <section className="flex flex-col  justify-center items-center home-height backgroundSVG-home">
        <img src="../../assets/images/computadora-de-escritorio.png" alt="Logo"/>
        <h2 className=" font-montserrat font-bold tracking-[3px] mt-2 text-4xl text-orange">FAKE E STORE</h2>
        <p  className="mt-6 font-hindMadurai tracking-[2px] text-xl text-greenBlue font-medium capitalize">A place to find the best resources for upgrade or have a new computer.</p>
    </section>
  )
}

export default Home