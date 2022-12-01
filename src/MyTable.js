import React from 'react'

const MyTable = () => {

    const dave = { firstName: "Dave", lastName: "Avivi", age: 20 }
    const gabi = { firstName: "Gabi", lastName: "Halvati", age: 25 }
    const ronen = { firstName: "Ronen", lastName: "Haron", age: 27 }
    const persons = [dave, gabi, ronen]
    
    const tableRow = persons.map((person) => {
        return (
            <tr key={person.firstName}>
                <td>{person.firstName}</td>
                <td>{person.lastName}</td>
                <td>{person.age}</td>
            </tr>
        );
    })


    return (
        <div>
            <br/>
            <h2>MyTable</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>age</th>
                    </tr>
                </thead>
                <tbody>
                    {tableRow}
                </tbody>
            </table>
        </div>
    )
}

export default MyTable