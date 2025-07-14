import { Card, Row, Col, Button } from "react-bootstrap";

function CarritoCardBootstrap({ producto, funcionDisparadora }) {
    function borrarDelCarrito() {
        funcionDisparadora(producto.id);
    }

    return (
        <Card className="mb-3">
        <Card.Body>
            <Row className="align-items-center">
            <Col md={3}>
                <Card.Img
                variant="top"
                src={producto.image}
                style={{ maxHeight: "100px", objectFit: "contain", width: "100%" }}
                />
            </Col>
            <Col md={2}>
                <span>{producto.name}</span>
            </Col>
            <Col md={1}>
                <span>Cantidad: {producto.cantidad}</span>
            </Col>
            <Col md={2}>
                <span>Precio: $ {producto.price}</span>
            </Col>
            <Col md={2}>
                <span>Subtotal: $ {producto.cantidad * producto.price}</span>
            </Col>
            <Col md={2}>
                <Button variant="danger" onClick={borrarDelCarrito}>
                Sacar del carrito
                </Button>
            </Col>
            </Row>
        </Card.Body>
        </Card>
    );
}

export default CarritoCardBootstrap;
