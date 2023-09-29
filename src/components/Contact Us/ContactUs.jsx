import { Button, Input, Textarea } from "@nextui-org/react";
import { useForm } from "../../hooks/useForm";
import Swal from "sweetalert2";
import { validateEmail, validateName, validateSubject, validateDescription } from "../../reusable/validForm";

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
            <section className="backgroundSVG-home home-height flex flex-col items-center xl:items-stretch xl:px-16 animate-fade">
                <div className="text-center my-10 font-montserrat">
                    <h3 className="font-montserrat font-bold tracking-wider text-greenBlue text-2xl xl:text-3xl uppercase">contact us</h3>
                </div>
                <div className="flex flex-col items-center font-hindMadurai">
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-4 xl:w-[60%] text-greenBlue items-center"
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
                            isInvalid={!validateName(name)}
                            color={!validateName(name) ? 'danger' : 'success'}
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
                            isInvalid={!validateSubject(subject)}
                            color={!validateSubject(subject) ? 'danger' : 'success'}
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
                            isInvalid= {!validateEmail(email)}
                            color={!validateEmail(email) ? "danger" : "success"}
                            errorMessage={!validateEmail(email) && "Please enter a valid email"}
                            
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
                            isInvalid= {!validateDescription(description)}
                            color={!validateDescription(description) ? "danger" : "success"}
                            errorMessage={!validateDescription(description) && "Please type more than 50 characters"}
                        />
                        <Button type="submit" className="mt-10 capitalize tracking-widest text-greenBlue bg-ligthOrangeOpacity text-lg font-semibold w-64 xl:w-96">Send It</Button>
                    </form>
                </div>
            </section>
        </>
    );
};

export default ContactUs;
