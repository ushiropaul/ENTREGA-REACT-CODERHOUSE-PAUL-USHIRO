import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from './ItemDetail';
import { getProductById } from './../fireBase/db.js'

function DetailItemConteiner() {


    const [item, setItem] = useState(Object);

    const { idSelected } = useParams()

    useEffect(() => {
        const fetchProduct = async () => {
            const fetchedItem = await getProductById(idSelected); 
            setItem(fetchedItem); 
        };

        fetchProduct();

    }, [idSelected]);



    return (
        <>

            <ItemDetail item={item} />

        </>
    )
};

export default DetailItemConteiner;