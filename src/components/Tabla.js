import React from 'react';
import { Table } from 'react-bootstrap';

const PublicationScheduleTable = () => {
    return (
        <Table className="caption-top">
            <caption>Ten presente los horarios de publicación de cada categoría.</caption>
            <thead className="table-light">
                <tr>
                    <th scope="col">Categoría</th>
                    <th scope="col">Día</th>
                    <th scope="col">Hora</th>
                </tr>
            </thead>
            <tbody className="table-group-divider">
                <tr>
                    <td>Fotografía de paisajes</td>
                    <td>Lunes</td>
                    <td>10:00 AM</td>
                </tr>
                <tr>
                    <td>Fotografía de retratos</td>
                    <td>Martes</td>
                    <td>15:00 PM</td>
                </tr>
                <tr>
                    <td>Fotografía de naturaleza</td>
                    <td>Miércoles</td>
                    <td>12:00 PM</td>
                </tr>
                <tr>
                    <td>Fotografía de arquitectura</td>
                    <td>Jueves</td>
                    <td>14:00 PM</td>
                </tr>
                <tr>
                    <td>Fotografía de eventos</td>
                    <td>Viernes</td>
                    <td>18:00 PM</td>
                </tr>
                <tr>
                    <td>Fotografía de moda</td>
                    <td>Sábado</td>
                    <td>11:00 AM</td>
                </tr>
                <tr>
                    <td>Fotografía de viajes</td>
                    <td>Domingo</td>
                    <td>16:00 PM</td>
                </tr>
            </tbody>
        </Table>
    );
}

export default PublicationScheduleTable;
