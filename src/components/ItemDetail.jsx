import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount'

function ItemDetail({detail}) {
    return(
        
          <Card style={{ width: '25rem' }}>
          <Card.Img variant="top" src={detail?.thumbnail} />
          <Card.Body>
            <Card.Title>{detail?.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
            <Card.Text>
            {detail?.description}
            </Card.Text>
            <ItemCount />
          </Card.Body>
        </Card>
    )
}

export default ItemDetail