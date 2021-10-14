import { Button, Card } from "react-bootstrap";


const Course = (props) => {

  const { picture, duration, name, students, overview } = props.course;

  return (
    <div>
      <Card className="rounded" style={{ width: '20rem', margin: '15px 10px'}}>
        <Card.Img style={{height: '212px'}} variant="top" src={picture} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text style={{height: '245px', color: 'black'}}>
            {overview} 
          </Card.Text>
          <h6>Duration: {duration}</h6>
          <p className="text-info">{students}</p>
          <Button variant="outline-primary">Start This Course</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Course;