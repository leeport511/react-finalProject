import { db } from "../../services/firebase/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";


export const getProducts = async (category) => {

    try {

        const productsRef = !category ? collection(db, "products") : query(collection(db, "products"), where('category', '==', category))

        const querySnapshot = await getDocs(productsRef);

        return querySnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}));
        
    } catch (error) {
        
        console.error(error);

    }

}


export const getProductsById = async (id) => {

    try {

        const docRef = doc(db, 'products', id);

        const documentSnapshot = await getDoc(docRef);

        return {id:documentSnapshot.id, ...documentSnapshot.data()}

    } catch (error) {
        console.error(error);
    }

}