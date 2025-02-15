import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'

function App() {
    return (
        <>
            <div className='fixed'>
                <Navbar/>
            </div>
            <Home/>
        </>

    )
}
export default App