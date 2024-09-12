import { useEffect, useState } from 'react';
import '../styles/user.css'
import UserCard from '../components/user_card';

const Users = ()=>{

    const [allUsers,setAllUsers] = useState([]);

    //if set to empty array, called once in each render
    useEffect(
        ()=>{
            //fetch vaneko promise type return garchha i.e async/await tesaile then.
            fetch("https://jsonplaceholder.typicode.com/users").then(
                async (response)=>{
                    const users = await response.json()
                    console.log(users);
                    setAllUsers(users)
                }
            )
        },
        []
    )
    return(
        <div id='users'>
            <h1 id='title'>All Users</h1>
            <div id='user-grid'>
                {
                    allUsers.map(
                        (user)=>{
                            return <UserCard user = {user}/>
                        }
                    )
                }
            </div>
        </div>
    );
}

export default Users;