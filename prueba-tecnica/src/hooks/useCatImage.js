import { useEffect, useState } from "react"

export function useCatImage ({ fact }) {
    const [imageUrl, setImageUrl] = useState()
    
     // para recuperar la imagen cada vex que tenemos una cita nueva
     useEffect(() => {
        if(!fact) return
        
        const threeFirsttWord = fact.split(' ', 3).join(' ')
        console.log(threeFirsttWord)

        fetch(`https://cataas.com/cat/says/${threeFirsttWord}?size=50&color=red&json=true`)
            .then(res => res.json())
            .then(Response => {
                const { url } = Response
                setImageUrl(url)
            })
    }, [fact])

    return{ imageUrl }
}