import React, { createContext, useContext, useEffect, useState } from 'react'


// Model, Context, ContextProvider, Hook
export interface UserModel{
    userName: string;
    userSurname: string;
}
export interface UserManageModel{
    setUserName: (value:string)=>void;
    setUserSurname: (value:string)=>void;
}
export type UserContextModel = UserModel & UserManageModel;

const defaultUserModel = {
    userName: 'abc',
    userSurname: 'pqr',
    setUserName: (value:string)=>{},
    setUserSurname: (value:string)=>{}
};

export const UserContext =  createContext<UserContextModel>(defaultUserModel);

export const useUserHook = () =>{
    return useContext(UserContext);
}

const UserContextProvider=(props:any)=> {
    const [_userName, set_UserName] = useState("Subha1");
    const [_userSurname, set_UserSurName] = useState("Sahoo1");

    const constructSurName = (value:string) =>{
        console.log('constructSurName triggered', value);
        set_UserSurName(value.toUpperCase());
    }

    useEffect(()=>{
        console.log('_userName', _userName);
    },[_userName])


  return (
    <UserContext.Provider value = {{
        userName: _userName,
        userSurname: _userSurname,
        setUserName: set_UserName,
        setUserSurname: constructSurName
    }}>
        {props.children}
    </UserContext.Provider>
  )
}
export default UserContextProvider

