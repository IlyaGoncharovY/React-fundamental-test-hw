import React, {useState} from "react";

export default {
    title: "React.memo demo"
}

const NewMessagesCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log("hello")
    return <div>{
        props.users.map((el, i) => <div key={i}>{el}</div>)
    }</div>
}

const Users = React.memo(UsersSecret)



export const Example1 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Ilya", "Nastya", "Varya", "Aiki"])

    const addUsersHandler = () => {
      const newUsers = [...users, "Masha" + new Date().getTime()]
        setUsers(newUsers)
    }

    return <>
        <hr/>
        <button onClick={()=>setCounter(counter+1)}>+</button>
        <button onClick={addUsersHandler}>add users</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
        <hr/>
    </>
}