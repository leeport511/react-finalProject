import React from "react";

const Footer = () => {
    return (
        <section className="flex gap-x-6">
            <a
                href="https://www.linkedin.com/in/leonardo-portillo-8b94b615b/"
                target="_blank"
            >
                <img
                    className="w-[35px] xl:w-[42px]"
                    src="../../assets/images/linkedin.png"
                    alt="linkedin"
                />
            </a>
            <a
                href="https://instagram.com/leito.portillo16?utm_source=qr&igshid=MzNlNGNkZWQ4Mg=="
                target="_blank"
            >
                <img
                    className="w-[35px] xl:w-[42px]"
                    src="../../assets/images/instagram.png"
                    alt="instagram"
                />
            </a>
        </section>
    );
};

export default Footer;
