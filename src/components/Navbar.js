import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="nav">
            <Link to="/"><h3>NEWS</h3></Link>
        </div>
    )
}

export default Navbar
