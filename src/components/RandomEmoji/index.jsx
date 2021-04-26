import { useState, useEffect } from 'react'

const emojis = "📀 💽 💾 💿 💻".split(" ") 

const RandomEmoji = () =>{
    const [emoji, setEmoji] = useState('📀')

    useEffect(() =>{
        setInterval(function(){
            setEmoji(executeRandomize())
        }, 2000)
    }, [])
        
    const executeRandomize = () =>{
        let currentEmoji = emoji
        let emo = emojis[Math.floor(Math.random() * emojis.length)]
        while (emo == currentEmoji){
            emo = emojis[Math.floor(Math.random() * emojis.length)]
        }
        return emo
    }
    
    return (
        <>{emoji}</>
    )
}

export default RandomEmoji


