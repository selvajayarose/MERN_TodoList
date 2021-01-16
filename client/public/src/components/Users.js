import React from 'react'

const Users = ({users}) => {
    return (
        <div>
            Users are 
            <ul>
            { users.map((value, index) => { return <li key={index}>{value}</li>})}
            </ul>

        </div>
    )
}

export default Users
