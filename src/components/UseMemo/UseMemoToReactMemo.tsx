import React, {useMemo, useState} from "react";


const NewMessagesCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log("hello memo")
    return <div>{
        props.users.map((el, i) => <div key={i}>{el}</div>)
    }</div>
}

const Users = React.memo(UsersSecret)


export const Example2UseMemoForReact = () => {
    console.log("usememohelp")
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Ilya", "Nastya", "Varya", "Aiki"])

    const newArray = useMemo(() => {
        const newArray = users.filter(el => el.toLowerCase().indexOf("a") > -1)
        return newArray
    }, [users])

    const addUsersHandler = () => {
        const newUsers = [...users, "Masha" + new Date().getTime()]
        setUsers(newUsers)
    }

    return <>
        <hr/>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => addUsersHandler()}>add user</button>
        {counter}
        <Users users={newArray}/>
        <hr/>
    </>
}