
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import User from "../coponents/User.jsx"
import { Link } from 'react-router-dom'
function Home() {
const [users, setUsers] = useState([])
    async function main() {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/users")
        console.log(data)
        setUsers(data)
    }
    useEffect(() => {
       
    main();
    },
    [])
    return (
       <div>
       { users.map((user) => (
        <Link to={`users/${user.id}`} key={user.id}>
        <User id={user.id} name={user.name} email={user.email} username={user.username}/>
        </Link>
        ))}
        </div>
      /*  <div>
    <h1>{users.length > 0 ? users[0].name : <h1>Loading</h1>}</h1>
    </div>
    user?.id is the same thing as the operator two lines above*/
)
}
export default Home