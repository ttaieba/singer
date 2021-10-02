import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Employe = () => {
    let { id } = useParams();
    const [employee, setEmployee] = useState([])
    // const [empol, setEmpol] = useState([])



    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => res.json())
            .then(data => setEmployee(data))
    }, [])

    // useEffect(() => {
    //     const found = employeeDetails.find(employe => employe.id === id)
    //     console.log(found)

    //     // setEmpol(found)
    // }, [employeeDetails])




    return (
        <div className="App">
            <h2 >{id}</h2>
            <h2>{employee.name} </h2>

            <h4>work at : {employee.company?.name} </h4>
            <h4>phone : {employee.phone} </h4>
            <h2>Email via: {employee.email} </h2>



        </div>
    );
};

export default Employe;