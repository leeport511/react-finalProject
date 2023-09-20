import { Button, Input, Textarea } from "@nextui-org/react";
import { useForm } from "../../hooks/useForm";
import Swal from "sweetalert2";

const initialValues = {
    name: "",
    subject: "",
    email: "",
    description: "",
};

const ContactUs = () => {
    const { name, subject, email, description, onInputChange, onResetForm } =
        useForm(initialValues);

    const handleSubmit = (e) => {
      
      onResetForm(e)


      const newMessage = {name, subject, email, description}

      
      if (newMessage && description !== '') {
        Swal.fire({
          icon: "success",
          title: "your Message was sent successfully",
          timer: 2000,
          showConfirmButton: false,
          position: 'center',
          toast: true,
        })
      } else {
        Swal.fire({
          icon: "error",
          title: "oops...Something Wrong",
          timer: 2000,
          showConfirmButton: false,
          position: 'center',
          toast: true,
        })
        
      }
      
      
    };

    return (
        <>
            <section className="backgroundSVG-home home-height flex flex-col px-16 animate-fade">
                <div className="text-center my-10 font-montserrat">
                    <h3 className="font-montserrat font-bold tracking-wider text-greenBlue text-3xl uppercase">contact us</h3>
                </div>
                <div className="flex flex-col items-center font-hindMadurai">
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-4 w-[60%] text-greenBlue items-center"
                    >
                        <Input
                            label="Name"
                            variant="underlined"
                            type="text"
                            placeholder=""
                            name="name"
                            isRequired
                            size="lg"
                            classNames={{
                                label: "text-greenBlue text-md tracking-wide font-semibold",
                            }}
                            value={name}
                            onChange={onInputChange}
                        />
                        <Input
                            label="Subject"
                            variant="underlined"
                            type="text"
                            placeholder=""
                            name="subject"
                            isRequired
                            size="lg"
                            classNames={{
                                label: "text-greenBlue text-md tracking-wide font-semibold",
                            }}
                            value={subject}
                            onChange={onInputChange}
                        />
                        <Input
                            label="Email"
                            variant="underlined"
                            type="email"
                            placeholder=""
                            name="email"
                            isRequired
                            size="lg"
                            classNames={{
                                label: "text-greenBlue text-md tracking-wide font-semibold",
                            }}
                            value={email}
                            onChange={onInputChange}
                        />
                        <Textarea
                            label="Message"
                            variant="underlined"
                            type="text"
                            placeholder=""
                            name="description"
                            size="lg"
                            classNames={{
                                label: "text-greenBlue text-md tracking-wide font-semibold",
                            }}
                            value={description}
                            onChange={onInputChange}
                            maxRows={5}
                        />
                        <Button type="submit" className="mt-10 capitalize tracking-widest text-greenBlue bg-ligthOrangeOpacity text-lg font-semibold w-96">Send It</Button>
                    </form>
                </div>
            </section>
        </>
    );
};

export default ContactUs;
