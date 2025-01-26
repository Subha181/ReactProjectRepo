import React, { useContext, useRef } from 'react'
import Child from './child'
import UserContextProvider, { UserContext } from '../Context/UserContextProvider'

export default function Parent() {
    const {userName, userSurname, setUserName , setUserSurname}= useContext(UserContext);
    const inputuserNameRef = useRef<any>('');
    const inputuserSurNameRef = useRef<any>('');

    //setUserName("Sanchita")
    const handleChange =() =>{
      // if(inputuserNameRef.current)
      // {
      //   const a = inputuserNameRef.current.vslue
      // }
      console.log('inputuserNameRef.current.value', inputuserNameRef.current.value);
      setUserName(inputuserNameRef.current.value);
      setUserSurname(inputuserSurNameRef.current.value);
    }

    const handleNameChange = (e:any)=>{
      setUserName(e.target.value)
    }
  return (
    
      <div>
        <h1> this is my parent component</h1>
        <div>
          Name<input type='text' ref={inputuserNameRef} /><br/><br/>
          SurName<input type='text' ref={inputuserSurNameRef} /><br/><br/>
          <button onClick={handleChange}>Set Name</button>
        </div>
        <Child/>
      </div>

  )
}

  