import React from 'react'
import { useState, useEffect } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { querySnapshot } from "./../fireBase/db.js"


function ItemListContainer() {

    const [items, setItems] = useState([]);

    const { category } = useParams();

    const getProducts = () => new Promise((res) => {res(querySnapshot.docs.map(doc => ({id: doc.id,...doc.data()})))});


    useEffect(() => {

        if (category == undefined) {
            getProducts().then(res => setItems(res));
            return;
        }
        if (category == 'phones') {
            getProducts().then(res => setItems(res.filter(item => item.categoria == 'phones')));
            return;
        }
        if (category == 'laptops') {
            getProducts().then(res => setItems(res.filter(item => item.categoria == 'laptops')));
            return;
        }
        if (category == 'consoles') {
            getProducts().then(res => setItems(res.filter(item => item.categoria == 'consoles')));
            return;
        }
        if (category == 'periferics') {
            getProducts().then(res => setItems(res.filter(item => item.categoria == 'periferics')));
            return;
        }
        


    }, [category]);





    return (

        <div>

            <ItemList items={items} />

        </div>

    )

}

export default ItemListContainer;