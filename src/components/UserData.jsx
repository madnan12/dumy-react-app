import React, {useEffect, useState} from 'react'
import SingleUser from './SingleUser';

const url = "https://jsonplaceholder.typicode.com/users/";

const UserData = () => {
    
    const [userData, setUserData] = useState([]);

    const fetchData = () => {
        return fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => setUserData(data));
    }
    
    useEffect(() => {
        fetchData();
    },[])
    

    return (
        <div>
            <h2>User Data</h2>
            {
            userData?.map((u, i)=>{
               return <SingleUser key={i} user={u} />
            })
            }
            
        </div>
    )
}

export default UserData
