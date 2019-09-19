import React from 'react'
import Hero from '../components/Hero'
import defaultBcg from '../images/defaultBcg.jpeg'
import {Link} from 'react-router-dom'

export default function Default() {
    return (
        <>
        <Hero title="404" max="true" img ={defaultBcg}>
            <h2>page not found</h2>
            <Link to="/" className="main-link" style={{margin:'2rem'}}>return homepage</Link>
        </Hero>
    </>
    )
}
