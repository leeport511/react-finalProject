import { Button, Divider } from "@nextui-org/react";
import { DeleteIcon } from "./DeleteIcon";
import { useCart } from "../../hooks/useCart";

export const CartItem = ({ id, image, name, price, quantity }) => {
    const { deleteFromCart } = useCart();

    return (
        <article className="flex flex-col font-hindMadurai px-1 py-2 xl:px-3 xl:py-3">
            <div className="flex flex-col items-center xl:flex-row xl:justify-between xl:items-center xl:px-16 mb-5 text-greenBlue">
                <div className="flex xl:flex-row xl:justify-evenly xl:gap-x-20 flex-col items-center">
                    <img
                        src={`../../assets/images/products-images/${image}`}
                        alt={name}
                        className="w-[200px] h-[100px] xl:w-32 xl:h-28 object-contain border rounded-2xl border-greenBlue p-1 mix-blend-multiply"
                    />
                    <div className="text-lg xl:text-xl text-center xl:text-left flex flex-col items-start gap-y-1 my-2 xl:my-0 xl:gap-y-3 w-60 xl:w-64">
                        <h4>{name}</h4>
                        <h6 className="xl:text-2xl text-xl  font-semibold">
                            ${price}
                        </h6>
                    </div>

                </div>
                <div className="flex items-center xl:gap-x-40 gap-x-10">
                    <p className="xl:text-xl text-base">Quantity: {quantity}</p>
                    <Button
                        color="danger"
                        variant="bordered"
                        startContent={<DeleteIcon />}
                        className="px-3 xl:px-5 uppercase font-bold"
                        onClick={() => deleteFromCart(id)}
                    >
                        delete
                    </Button>
                </div>
            </div>
            <Divider />
        </article>
    );
};
