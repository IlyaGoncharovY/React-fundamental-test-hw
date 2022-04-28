import React, {useCallback, useMemo, useState} from "react";


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

const BooksSecret = (props: { /*books: Array<string>;*/ addBook: () => void }) => {
    console.log("BooksSecret")
    return <div>
        <button onClick={() => props.addBook()}>add book</button>
        {
            /* props.books.map((el, i) => <div key={i}>{el}</div>)*/
        }</div>
}

const Book = React.memo(BooksSecret)

export const LikeUseCallback = () => {
    console.log("LikeUseCallback")
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(["React", "JS", "TS", "HTML"])

    // const newArray = useMemo(() => {
    //     const newArray = books.filter(el => el.toLowerCase().indexOf("a") > -1)
    //     return newArray
    // }, [books])

   /* const addBookHandler = () => {

    }*/

    const memoizedAddBook = useMemo(() => {
        return () => {
            console.log(books)
            const newUsers = [...books, "Angular" + new Date().getTime()]
            setBooks(newUsers)
        }
    }, [books])

    const memoizedAddBook2 = useCallback(() => {
            console.log(books)
            const newUsers = [...books, "Angular" + new Date().getTime()]
            setBooks(newUsers)
    }, [books])

    return <>
        <hr/>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Book addBook={memoizedAddBook2}/>
        <hr/>
    </>
}