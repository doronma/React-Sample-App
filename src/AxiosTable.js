import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

const AxiousTable = () => {

    const [userdata, setUserData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            setUserData(response.data)
        }
        fetchData()
    }, [])

    const tableRow = () => {
        if (userdata) {
            return userdata.map((person) => {
                return (
                    <tr key={person.id}>
                        <td>{person.name}</td>
                        <td>{person.username}</td>
                        <td>{person.email}</td>
                    </tr>
                );
            })
        }
    }

    return (
        <div>
            <br/>
            <h2> AxiosTable - User Data from server</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>UserName</th>
                        <th>Mail</th>
                    </tr>
                </thead>
                <tbody>
                    {tableRow()}
                </tbody>
            </table>
        </div>
    )
}

export default AxiousTable