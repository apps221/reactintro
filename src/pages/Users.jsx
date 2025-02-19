import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
function Users() {
console.log( useParams())
const { id } = useParams() // must match the <Route path="/users/:username" element={<Users />} />, so in this case the word username has to match
const [users, setUser] = useState({})
async function main() {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    setUser(data)
}
useEffect(() => {
main();
},[])
return (
    <div>
<p>{users.id}</p>
<p>{users.name}</p>
<p>{users.email}</p>
<p>{users.username}</p>
</div>
)
}
export default Users