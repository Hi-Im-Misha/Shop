import './Footer.css'

import { useEffect, useState } from 'react'

export default function Footer(){
    const [now, setNow] = useState (new Date())

    useEffect(() => {
        const interval = setInterval(() => setNow(new Date()), 1000)

        return() => {
            clearInterval(interval)
            console.log('cleaning....');
        }
    }, [])


    return (
        <footer>
            <span>Время сейчас: {now.toLocaleTimeString()}</span>
        </footer>
    )
}