import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container'
import contacts from "../../assets/contact.json"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./style.css"

function Contact(){

    return (
    <Container className="d-flex flex-row my-5 justify-content-center">
        <Row className='row-gap-3 gap-3' xs={1} md={2} lg={4}>
        {contacts.map( (item)=>{
            return (
            <Col>
              <InfoCard key={item.name} ico={item.ico} name={item.name} action={item.action} link={item.link} />
            </Col>
            )
          })}
        </Row>
    </Container>)
}


function InfoCard(props) {
  return (
    <Card className='infoCard  align-items-center' >
      <Card.Body className='justify-content-center d-flex flex-column'>
        <Card.Title>{props.name}</Card.Title>
        <Button variant="primary" href={props.link}>{props.action}</Button>
      </Card.Body>
    </Card>
  );
}

export {Contact};