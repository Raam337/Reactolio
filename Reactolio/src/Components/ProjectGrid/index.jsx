import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import projectList from "../../assets/project_link.json"
import "./style.css"

function ProjectGrid() {
  return (
    <Container fluid className='my-3'>
      <Row className='row-gap-3'>
        {projectList.map( (item)=>{
            return(
            <Col s={12} md={6}>
                <ProjectCard img={item.img} title={item.name} skills={item.skills} link={item.link} />
            </Col>)
        } )}
      </Row>
    </Container>
  );
}



function ProjectCard(props) {
    return (
      <Card className='d-flex flex-row'>
        <Card.Img className='projectImg' variant="top" src={props.img} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.skills.map( (item)=> {
                return "#" + item + " ";
            } )}
          </Card.Text>
          <Card.Link href={props.link}>Open the project</Card.Link>
        </Card.Body>
      </Card>
    );
  }
  


export {ProjectGrid};