import { useState, useEffect } from 'react'

const emojis = "📘 📕 📗 📙 📓 📔 💿 💽 💾 📀".split(" ") 
// const emojis = "💽 💾 💿 💻 📱 📊 📚 📖 📘 📂".split(" ") 

const RandomEmoji = () =>{
    const [emoji, setEmoji] = useState(emojis[Math.floor(Math.random() * emojis.length)])

    useEffect(() =>{
        setInterval(function(){
            setEmoji(executeRandomize())
        }, 1000)
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


