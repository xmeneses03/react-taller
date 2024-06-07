import React from 'react';
import { Form } from 'react-bootstrap';

const ContactForm = () => {
    return (
        <Form className="mt-4">
            <Form.Group className="mb-3" controlId="floatingInputEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="floatingInputName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Nombre" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="floatingInputPhone">
                <Form.Label>Número de celular</Form.Label>
                <Form.Control type="tel" placeholder="Número de celular" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="floatingTextarea">
                <Form.Label>Comentario</Form.Label>
                <Form.Control as="textarea" placeholder="Leave a comment here" />
            </Form.Group>
            <button type="submit" className="btn btn-dark mt-3">Enviar solicitud</button>
        </Form>
    );
}

export default ContactForm;
