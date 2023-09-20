import React, { useEffect, useState } from "react";
import { getItem } from "../../data/dataMock";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import Loader from "../loader/Loader";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);

        const docRef = doc(db, 'products', id);

        getDoc(docRef)
            .then(documentSnapshot => {
                console.log(documentSnapshot);
                setItem({ id:documentSnapshot.id, ...documentSnapshot.data()});
            }).catch(err => {
                console.error(err);
            }).finally(() => {
                setLoading(false);
            })

        // getItem(id)
        //     .then((item) => {
        //         setItem(item);
        //     })
        //     .finally(() => {
        //         setLoading(false);
        //     });
    }, []);

 

    return (
        <div className="flex flex-col animate-fade">
            {loading ? (
                <Loader />
            ) : (
                <div className="flex justify-center items-center  mt-6 animate-fade">
                    <ItemDetail {...item} />
                </div>
            )}
        </div>
    );
};

export default ItemDetailContainer;
