import React from 'react'

const Footer = () => {
    return (
        <div className="footer">
            <p>&copy; NewsApi, {new Date().getFullYear() + '. All Rights Reserved.'} </p>
        </div>
    )
}

export default Footer
