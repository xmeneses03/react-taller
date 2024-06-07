import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

const LastTwoCards = () => {
    return (
        <Row>
            <Col>
                <Card className="text-bg-dark">
                    <Card.Img src="../images/imgl1.jpg" className="card-img" alt="..." />
                    <Card.ImgOverlay>
                        <Card.Title>Lago en Invierno</Card.Title>
                    </Card.ImgOverlay>
                </Card>
            </Col>
            <Col>
                <Card className="text-bg-dark">
                    <Card.Img src="../images/imgl2.jpg" className="card-img" alt="..." />
                    <Card.ImgOverlay>
                        <Card.Title>Cascada Alta y Majestuosa</Card.Title>
                    </Card.ImgOverlay>
                </Card>
            </Col>
        </Row>
    );
}

export default LastTwoCards;
