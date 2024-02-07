import { useEffect, useState } from 'react'
import './Header.css' 


export default function Header(){
    const [now, setNow] = useState (new Date())

    useEffect(() => {
        const interval = setInterval(() => setNow(new Date()), 1000)

        return() => {
            clearInterval(interval)
            console.log('cleaning....');
        }
    }, [])


    return (
        <header>
            <span>Говно</span>
            <span>Время сейчас: {now.toLocaleTimeString()}</span>
        </header>
    )
}