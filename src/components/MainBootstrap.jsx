import { Container, Row, Col, Image } from "react-bootstrap";

function MainBootstrap() {
  return (
    <Container className="my-4">
      <Row className="align-items-center">
        <Col xs={12} md={4} lg={4}>
          <Image
            src="https://i.pinimg.com/736x/49/ae/f1/49aef1a855d7e0b0b71d77da735d6235.jpg"
            alt="Japan books"
            fluid
            rounded
          />
        </Col>
        <Col xs={12} md={8} lg={8}>
          <h2>Literatura japonesa</h2>
          <p>
            Acá encontrarán libros japoneses de después de la restauración Meiji.
          </p>
          <p>Buraiha, Literatura socialista japonesa y de la escuela de las Nuevas Sensaciones.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default MainBootstrap;
