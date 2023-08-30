import React from 'react'
import MissionStar from './MissionStar'

const About = () => {
  return (
    <section className="flex flex-col items-center font-hindMadurai">
        <div className="mt-10">
            <h3 className="text-4xl font-hindMadurai font-bold tracking-widest text-greenBlue  uppercase">About Us</h3>
        </div>
        <div className="mt-10 w-[75%]">
            <div className="relative mb-10">
                <MissionStar />
                <p className="text-lg text-greenBlue text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est culpa veniam atque nemo doloribus beatae fugit debitis, eaque, ratione quisquam rerum amet itaque quo et blanditiis ab, molestias distinctio nesciunt?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit obcaecati quidem quis doloribus assumenda, magni laborum ea! Ullam, eos. Dolores nulla eum quas ea inventore ut reprehenderit ullam reiciendis ipsa?Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quis necessitatibus. Esse fuga delectus, atque cumque hic, consequatur sint illo quam neque debitis ut non. A odit animi ipsum excepturi.</p>
            </div>
            <div className="relative">
                <MissionStar />
                <p className="text-lg text-greenBlue text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est culpa veniam atque nemo doloribus beatae fugit debitis, eaque, ratione quisquam rerum amet itaque quo et blanditiis ab, molestias distinctio nesciunt?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit obcaecati quidem quis doloribus assumenda, magni laborum ea! Ullam, eos. Dolores nulla eum quas ea inventore ut reprehenderit ullam reiciendis ipsa?Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quis necessitatibus. Esse fuga delectus, atque cumque hic, consequatur sint illo quam neque debitis ut non. A odit animi ipsum excepturi.</p>
            </div>
        </div>
        <div className='flex mt-28 items-center gap-x-8'>
            <img src="../../assets/images/computadora-de-escritorio.png" alt="Logo" className='w-[260px]'/>
            <h3 className='text-4xl uppercase relative tracking-[0.4rem] font-montserrat font-bold text-ligthOrange'>Fake e Store<small >&copy;</small></h3>
        </div>
    </section>
  )
}

export default About