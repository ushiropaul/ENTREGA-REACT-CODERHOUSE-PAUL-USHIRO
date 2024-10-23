import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

function ItemDetailContainer () {
  const [detail, setDetail] = useState()
  const { id } = useParams()
  
  useEffect(() => {
    fetch(`https://66d63577f5859a704268a79b.mockapi.io/products/${id}`)
      .then(res => res.json())
      .then(res => setDetail(res))
  }, [id])

  return (
    <div>
      <p>{detail?.name}</p>
    </div>
  )
}

export default ItemDetailContainer