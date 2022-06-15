import React from 'react'

import Header from '../components/Header/Header'
import Banner from '../components/Banner/Banner'
import Biography from '../components/Biography/Biography'
import Reviewer from '../components/Reviewer/Reviewer'
import About from '../components/About/About'

function Home() {
    return (
        <div className='Home'>
            <Header />
            <Banner />
            <Biography />
            <Reviewer />
            <About />
        </div>
    )
}

export default Home