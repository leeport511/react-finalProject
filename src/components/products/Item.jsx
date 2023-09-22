
import { useCart } from "../../hooks/useCart";
import { Badge } from "@nextui-org/badge";
import CheckIcon from "./CheckIcon";
import InsideItem from "./InsideItem";

const Item = ({ id, name, price, image }) => {

    const { cart } = useCart();
    const isInCart = cart.some((prop) => prop.id === id);
    const itemProps = { id, name, price, image };

    return (
        <>
            {isInCart ? (
                <Badge
                    isOneChar
                    size="xl"
                    content={<CheckIcon />}
                    placement="top-right"
                    className='absolute top-2 right-1 bg-orange'
                >
                    <InsideItem {...itemProps}/>
                    
                </Badge>
            ) : (
                <InsideItem {...itemProps}/>
                
            )}
        </>
    );
};

export default Item;
