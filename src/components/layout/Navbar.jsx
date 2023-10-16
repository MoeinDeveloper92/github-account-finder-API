import React from 'react'
import { Link } from "react-router-dom"
import { FaGithub } from "react-icons/fa"
import PropTypes from 'prop-types'

const Navbar = ({ title }) => {
    return (
        <nav className='navbar mb-12 shadow-lg bg-neutral text-neutral-content'>

            <div className="container mx-auto flex justify-between items-center">
                <div className='px-2 mx-2 cursor-pointer flex items-center space-x-2'>
                    <FaGithub size={"40px"} />
                    <Link to={"/"} className='align-middle first-letter:text-2xl first-letter:font-bold tracking-wider'>{title}</Link>
                </div>

                <div className='sm:hidden'>
                    <h2 className='text-2xl first-letter:text-4xl ml-5'>
                        Welcome to the <span className='font-bold text-3xl text-black'>Github App</span>
                    </h2>
                </div>

                <div className='flex justify-end space-x-12'>
                    <button className='btn btn-sm btn-primary text-white'>
                        <Link to={"/"}>Home</Link>
                    </button>
                    <button className='btn btn-sm btn-outline text-white'>
                        <Link to={"/about"}>About</Link>
                    </button>
                </div>
            </div>

        </nav>
    )
}

Navbar.defaultProps = {
    title: "GithubFinder"
}

Navbar.propTypes = {
    title: PropTypes.string
}

export default Navbar