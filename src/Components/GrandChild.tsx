import react, { } from 'react';
import {  useUserHook } from '../Context/UserContextProvider';


export default function(){
    let {userName, userSurname}= useUserHook();
    return(
        <div>
            <h1>This is my grand child component</h1>
            <h3>Userrname {userName}</h3>
            <h3>surname {userSurname}</h3>
        </div>
    )
}