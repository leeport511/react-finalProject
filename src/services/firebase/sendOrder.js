import {
    collection,
    documentId,
    query,
    where,
} from "firebase/firestore";
import { getDocs, writeBatch, addDoc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import { serverTimestamp } from "firebase/firestore";
import { showErrorMessage, showSuccessMessage } from "../../reusable/sweetAlertFuctions";

export const sendOrder = async (
    setLoading,
    cart,
    name,
    phone,
    email,
    totalPrice,
    navigate,
    removeCartList
) => {
    try {
        setLoading(true);

            //**create a new order with buyerData from Form, items from cart, etc...
            const newOrder = {
                buyer: { name: name, phone: phone, email: email },
                items: cart,
                totalPrice,
                date: serverTimestamp(),
            };

            //**Check stock and update if this change...
            const batch = writeBatch(db);
            const outOfStock = []; // if no stock, the item goes to this array

            const ids = cart.map((prod) => prod.id); // get all the ids of my cart into a new array

            //Create a reference to database, only the ids i have in the cart
            const productsRef = query(
                collection(db, "products"),
                where(documentId(), "in", ids)
            );

            const { docs } = await getDocs(productsRef);

            docs.forEach((doc) => {
                const fields = doc.data();
                const stockDatabase = fields.stock;

                const productAddedToCart = cart.find(
                    (prod) => prod.id === doc.id
                );
                console.log(productAddedToCart);

                const prodQuantity = productAddedToCart?.quantity;

                console.log(prodQuantity);

                if (stockDatabase >= prodQuantity) {
                    batch.update(doc.ref, {
                        stock: stockDatabase - prodQuantity,
                    });
                } else {
                    outOfStock.push({ id: doc.id, ...fields });
                }
            });

            if (outOfStock.length === 0) {
                const orderRef = collection(db, "orders"); //Create a new Ref for new Collection 'Orders'

                const { id: orderId } = await addDoc(orderRef, newOrder); //Create new Collection 'Orders'

                batch.commit();
                removeCartList();
                navigate("/products");
                showSuccessMessage(orderId, totalPrice)

            } else {
                showErrorMessage()
            }
    } catch (err) {
        alert("Error while data was processed");
    } finally {
        setLoading(false);
    }
};
