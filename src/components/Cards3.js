import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';

const FirstThreeCards = () => {
    return (
        <Row className="mb-4">
            <Col>
                <Card>
                    <Card.Img variant="top" src="../images/img1.jpg" />
                    <Card.Body>
                        <Card.Title>Montañas Majestuosas</Card.Title>
                        <Card.Text>
                            "Las montañas se elevan majestuosas contra el cielo, cubiertas de sol. El aire frío y limpio revitaliza los sentidos, mientras el paisaje invernal ofrece una belleza tranquila y serena. La brisa suave acaricia las flores, llenando el aire con su dulce aroma."
                        </Card.Text>
                        <Button variant="primary">Ver más</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src="../images/img2.jpg" />
                    <Card.Body>
                        <Card.Title>Amanecer en el Bosque</Card.Title>
                        <Card.Text>
                            "Los primeros rayos del sol atraviesan el denso follaje, pintando el suelo del bosque con un suave resplandor dorado. El silencio de la mañana es roto solo por el canto de los pájaros, creando un momento de pura serenidad."
                        </Card.Text>
                        <Button variant="primary">Ver más</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src="../images/img3.jpg" />
                    <Card.Body>
                        <Card.Title>Cascada Secreta</Card.Title>
                        <Card.Text>
                            "Escondida en lo profundo de la selva, esta cascada se despliega en un torrente de agua cristalina, rodeada de una exuberante vegetación. El sonido del agua cayendo es un recordatorio del poder y la belleza de la naturaleza."
                        </Card.Text>
                        <Button variant="primary">Ver más</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}

export default FirstThreeCards;
