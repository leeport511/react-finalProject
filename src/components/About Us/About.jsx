import React from "react";
import MissionStar from "./MissionStar";
import { Divider } from "@nextui-org/react";

const About = () => {
    return (
        <section className="flex flex-col items-center font-hindMadurai home-height backgroundSVG-home px-16">
            <div className="mt-10">
                <h3 className=" font-montserrat font-bold tracking-wider text-greenBlue text-3xl uppercase">
                    About Us
                </h3>
            </div>
            <div className="mt-10 w-[75%] ">
                <div className="relative mb-10 text-justify">
                    <MissionStar />
                    <p className="text-lg text-greenBlue">
                        "This is a fictitious company that was established in
                        mid-2023 with the purpose of creating a fake e-commerce
                        website to learn and practice everything about the{" "}
                        <b>REACT</b> framework. I would like to express our
                        gratitude to Professor <b>Sebas Zuviria</b> and{" "}
                        <b>Sofia Luciuk</b> for making this project possible. I
                        have learned a lot."
                    </p>
                </div>
                <div className="relative text-justify">
                    <MissionStar />
                    <p className="text-lg text-greenBlue text-justify">
                        Also, i would like to express my gratitude to all people
                        who, without their help, i could not have gained this
                        knowledge. A very special mention to{" "}
                        <b>Andreina Marcano</b>, <b>Pato Vicens</b> for help me
                        to understand REACT. Now it is time to continue learning
                        and improving my skills even more in this fantastic
                        programming world.
                    </p>
                </div>
            </div>
            <div className="flex gap-x-[70px] my-8">
                <a
                    href="https://www.linkedin.com/in/leonardo-portillo-8b94b615b/"
                    target="_blank"
                >
                    <img
                        className="w-[53px]"
                        src="../../assets/images/linkedin.png"
                        alt="linkedin"
                    />
                </a>
                <a
                    href="https://instagram.com/leito.portillo16?utm_source=qr&igshid=MzNlNGNkZWQ4Mg=="
                    target="_blank"
                >
                    <img
                        className="w-[53px]"
                        src="../../assets/images/instagram.png"
                        alt="instagram"
                    />
                </a>
            </div>
            <Divider />
            <div className="flex mt-20 items-center gap-x-8">
                <img
                    src="../../assets/images/computadora-de-escritorio.png"
                    alt="Logo"
                    className="w-[260px]"
                />
                <h3 className="text-4xl uppercase relative tracking-[0.4rem] font-montserrat font-bold text-ligthOrange">
                    Fake e Store<small>&copy;</small>
                </h3>
            </div>
        </section>
    );
};

export default About;
