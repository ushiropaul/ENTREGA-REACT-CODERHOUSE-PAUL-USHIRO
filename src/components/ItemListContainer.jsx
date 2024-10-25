import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemList from './ItemList'




function ItemListContainer (){
  const [items, setItems] =useState([])
  const {id} = useParams()
  console.log(id)

  useEffect(() =>{
    const url='https://dummyjson.com/products'
    const urlCategory = `https://dummyjson.com/products/category/${id}`
    

    fetch(id ? urlCategory : url)
      .then(res =>res.json())
      .then(res =>setItems(res.products))
  }, [id])

    return (
          <ItemList items={items}/>
    )
}

export default ItemListContainer