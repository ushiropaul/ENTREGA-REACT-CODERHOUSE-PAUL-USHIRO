import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'

import { Link } from 'react-router-dom';

function Item({item}) {
  return (
    <Col xs={12} md={6} lg={4}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={item.thumbnail} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
            {item.category}
          </Card.Text>
          <Card.Text>
            {item.description}
          </Card.Text>
           <Button variant="outline-dark"
           as={Link}
           to={`/item/${item.id}`}
           >
            Ver mas
            </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Item