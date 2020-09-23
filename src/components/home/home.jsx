import React from 'react'

import Layout from '../layout/layout'
import './home.css'

class Home extends React.Component {

    constructor(props){
        super()
        console.log('construc')

    }

    componentDidMount(){
        console.log('didmount')
    }

    componentDidUpdate(){
        console.log('after view init ')
    }

    

    render() {
        console.log('render')
        return (
            <div>
                <h1>Home</h1>
            </div>
        )
    }
}


// const Home = ()=>{
//     return  (
//         <h>Home page</h>
//     )
// }

export default Home
