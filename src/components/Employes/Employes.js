import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Employes = () => {
    const [employes, setEmployes] = useState([])
    // const { name, id, phone, website, email } = employ(ekhan theke tokhono data pawa jabe, jokhon props kora hobe)


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(res => res.json())
            .then(data => setEmployes(data))
    }, [])
    return (
        <Container>
            <div>
                <Table responsive="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>email</th>
                            <th>website</th>
                            <th>phone</th>
                            <th>visit</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            employes.map(employ => (
                                <tr>
                                    <td>{employ?.id}</td>
                                    <td>{employ?.name}</td>
                                    <td>{employ?.email}</td>
                                    <td>{employ?.website}</td>
                                    <td>{employ?.phone}</td>
                                    <td>
                                        <NavLink
                                            to={`/Employe/${employ?.id}`}
                                            activeStyle={{
                                                fontWeight: "bold",
                                                color: "red"
                                            }}
                                        >
                                            Details
                                        </NavLink>

                                    </td>

                                </tr>
                            ))
                        }

                    </tbody>
                </Table>
            </div>
        </Container >
    );
};

export default Employes;


