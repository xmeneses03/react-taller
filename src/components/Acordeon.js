import React from 'react';
import { Col, Accordion} from 'react-bootstrap';

const FAQAccordion = () => {
    return (
        <Col lg={7} id="faq">
            <Accordion flush id="accordionFlush" defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        ¿Cómo comenzaste tu carrera en la fotografía?
                    </Accordion.Header>
                    <Accordion.Body>
                            Desde pequeño siempre me sentí atraído por las artes visuales, pero mi verdadero amor por la fotografía comenzó cuando recibí mi primera cámara como regalo de cumpleaños. Empecé a experimentar con ella y a capturar momentos cotidianos, y rápidamente me di cuenta de que había encontrado mi pasión. Decidí formarme de manera más formal, asistiendo a cursos y talleres, y finalmente comencé a trabajar como fotógrafo profesional.
                    </Accordion.Body>                  
                </Accordion.Item>
                
                <Accordion.Item eventKey="1">
                    <Accordion.Header>¿Qué consejo le darías a alguien que está empezando en la fotografía?</Accordion.Header>
                    <Accordion.Body>Mi consejo principal sería practicar constantemente y no tener miedo de experimentar. La fotografía es un arte que se perfecciona con el tiempo y la práctica. También es importante estudiar el trabajo de otros fotógrafos, aprender sobre la composición y la luz, y siempre estar dispuesto a salir de tu zona de confort. Por último, nunca olvides la razón por la que amas la fotografía y deja que esa pasión guíe tu trabajo.</Accordion.Body>
                </Accordion.Item>   

                <Accordion.Item eventKey="2">
                    <Accordion.Header>¿Cómo encuentras inspiración para tus fotos?</Accordion.Header>
                    <Accordion.Body>
                            La inspiración puede venir de muchas fuentes: la naturaleza, la gente, la música, los viajes, e incluso de los momentos cotidianos. Mantengo una mente abierta y siempre estoy observando el mundo a mi alrededor. También me inspiro mucho al ver el trabajo de otros artistas y al leer sobre diferentes técnicas y estilos fotográficos.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                    <Accordion.Header>¿Cuál es tu objetivo a largo plazo como fotógrafo?</Accordion.Header>
                    <Accordion.Body>
                        Mi objetivo a largo plazo es seguir creciendo y evolucionando como fotógrafo, explorando nuevos estilos y técnicas, y continuando mi viaje de aprendizaje. Me gustaría seguir contando historias a través de mis imágenes y, eventualmente, publicar un libro de fotografías que recopile mis trabajos más significativos. También espero poder seguir compartiendo mi pasión con otros, a través de la enseñanza y la colaboración en proyectos creativos.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Col>
    );
}

export default FAQAccordion;
