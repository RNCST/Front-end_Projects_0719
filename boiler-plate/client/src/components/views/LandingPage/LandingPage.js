import React,{useEffect} from 'react'
import axios from 'axios';

function LandingPage() {

    useEffect(() => {
        axios.get('/api/Hello')
        .then(Response => {console.log(Response)})
    }, [])


    return (
        <div>
            LandingPage
        </div>
    )
}

export default LandingPage
