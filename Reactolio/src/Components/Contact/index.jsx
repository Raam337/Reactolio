import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container'
import contacts from "../../assets/contact.json"


function Contact(){
    return (
    <Container>
        {contacts.map( (item)=>{
            return <InfoCard key={item.name} ico={item.ico} name={item.name} action={item.action} link={item.link} />
        })}
    </Container>)
}


function InfoCard(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <FontAwesomeIcon icon={props.ico} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Button variant="primary" href={props.link}>{props.action}</Button>
      </Card.Body>
    </Card>
  );
}

export {Contact};