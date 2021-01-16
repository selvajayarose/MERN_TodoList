import React, {useState} from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import CreateUser from './CreateUser'
import Users from './Users'

const Blog = () => {
    const [users, setUsers]  = useState(['frank', 'sj'])

    const updateUserList = (value) => {
        let new_users_list = [...users, value]
        // console.log(new_users_list)
        setUsers(new_users_list)
    }

    return (
        <div> 
            <Link  to="/"> Home </Link> 
            <Link to="users"> Users</Link>
            <Link to="create_user"> Create User</Link>
            <Switch>
                <Route path="/users/" >
                    <Users users={users}></Users>
                </Route>
                <Route path="/create_user/">
                    <CreateUser updateUserList={updateUserList}></CreateUser>
                </Route>                
            </Switch>

        </div>
    )
}

export default Blog
