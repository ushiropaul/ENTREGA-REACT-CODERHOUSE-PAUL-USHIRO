import { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

function ItemListContainer () {
  const [items, setItems] = useState([])
  const { id } = useParams()

  useEffect(() => {
    fetch('https://66d63577f5859a704268a79b.mockapi.io/products')
      .then(res => res.json())
      .then(res => {
        if (!id) {
          setItems(res)
        } else {
          const productsByCategory = res.filter(item => item.category === id)
          setItems(productsByCategory)
        }
      })
  }, [id])

  return (
    <Container>
      <Row xs={1} md={2} lg={4} className="g-4">
        <ItemList items={items} />
      </Row>
    </Container>
  )
}

export default ItemListContainer