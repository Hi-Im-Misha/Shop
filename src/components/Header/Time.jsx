import { useEffect, useState } from 'react'

export default function Time(){
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
            <span>Время сейчас: {now.toLocaleTimeString()}</span>
        </header>
    )
}