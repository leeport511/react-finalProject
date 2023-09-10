import { Button, Divider } from "@nextui-org/react";
import { DeleteIcon } from "./DeleteIcon";
import { useCart } from "../../hooks/useCart";

export const CartItem = ({id ,image, name, price, quantity }) => {

    const {deleteFromCart} = useCart();

    

    return (
        <article className="flex flex-col font-hindMadurai px-3 py-3">
            <div className="flex justify-around items-center mb-5 text-greenBlue">
                <img
                    src={`../../assets/images/products-images/${image}`}
                    alt={name}
                    className="w-32 h-28 object-contain border rounded-2xl border-greenBlue p-1"
                />
                <div className="text-xl flex flex-col gap-y-3 w-64">
                    <h4>{name}</h4>
                    <h6 className="text-2xl font-semibold">${price}</h6>
                </div>
                <p className="text-xl">Quantity: {quantity}</p>
                <Button
                    color="danger"
                    variant="bordered"
                    startContent={
                        <DeleteIcon />
                    }
                    className="px-5 uppercase font-bold"
                    onClick={() => deleteFromCart(id)}
                >delete</Button>
            </div>
            <Divider />
        </article>
    );
};
