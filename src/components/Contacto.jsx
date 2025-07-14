import { Card, Row, Col, Button } from "react-bootstrap";

function Contacto () {

    return(
        <Row>
            <Col md={6}>
                <div className="p-4 my-3 border rounded shadow">
                <h3 className="mb-3">Contactanos</h3>
                <input type="text" className="form-control mb-3" placeholder="Nombre" />
                <input type="text" className="form-control mb-3" placeholder="Mensaje" />
                <input type="email" className="form-control mb-3" placeholder="email" />
                <button className="btn btn-success w-100">Enviar</button>
                </div>
            </Col>
        </Row>
    )
}

export default Contacto;