import { useEffect, useState } from "react";
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
//const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function App() {
    const [fact, setfact] = useState()
    const [imageUrl, setImageUrl] = useState()

    // para recuperar la cita al cargar la pagina
    useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_FACT)
            .then(res => res.json())
            .then(data => {
                const { fact } = data
                setfact(fact)
            })
    }, [])

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

    return (
        <main>
            <h1>App de gatitos</h1>
            {/* <section> */}
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt=
                {`Image extracted using the first three words for ${fact}`} />}
            {/* </section> */}
        </main>
    )
}