import React, { useState, useContext } from 'react'
import GithubContext from '../context/github/GithubContext'
import AlertContext from '../context/alert/AlertContext'
import { searchUsers } from '../context/github/GithubActions'

const UserSearch = () => {
    const [text, setText] = useState("")
    const { users, clearUsers, dispatch } = useContext(GithubContext)
    const { alert, setAlert } = useContext(AlertContext)
    const handleChange = (e) => {
        setText(e.target.value)
    }


    const handleSubmit = async (e) => {
        e.preventDefault()

        if (text === "") {
            setAlert("please enter something", "")
        } else {
            dispatch({
                type: "SET_LOADING"
            })
            // here we call action function
            const users = await searchUsers(text)
            dispatch({
                type: "GET_USERS",
                payload: users
            })
            console.log(text)
            setText("")
        }
    }

    return (
        <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>

            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <div className="relative">
                            <input placeholder='Search' type="text" className="w-full pr-40 bg-gray-200 input  text-black" value={text} onChange={handleChange} />
                            <button type='submit' className="absolute top-0 right-0 rounded-l-none w-36 btn ">Go</button>
                        </div>
                    </div>
                </form>
            </div>
            {users.length > 0 && (
                <div>
                    <button className='btn btn-ghost ' onClick={() => dispatch({ type: "CLEAR_USERS" })}>
                        Clear
                    </button>
                </div>
            )}

        </div>
    )
}

export default UserSearch