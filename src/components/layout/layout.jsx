import React from 'react'
import Headers from './header'
import Footer from './footer'


const Layout = (props) => {
    return (
        <div>
            <Headers />
                {props.children}
            <Footer />
        </div>

    )
}

export default Layout