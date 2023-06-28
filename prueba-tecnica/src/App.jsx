import { useEffect, useState } from "react";
import './App.css'
import { getRandomFact } from "./service/facts";
import { useCatImage } from "./hooks/useCatImage";


//const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

const useCatFact = () => {
    const [fact, setfact] = useState()

    const refreshFact = () => {
        getRandomFact().then(setfact)
    }

    // para recuperar la cita al cargar la pagina
    useEffect(refreshFact, [])

    return { fact, refreshFact }
}

export function App() {
    const { imageUrl } = useCatImage({ fact })
    const { fact, refreshFact } = useCatFact()

    const handleClick = async () => {
        useCatFact()
    }

    return (
        <main>
            <h1>App de gatitos</h1>
            {/* <section> */}
            <button onClick={handleClick}>get new fact</button>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt=
                {`Image extracted using the first three words for ${fact}`} />}
            {/* </section> */}
        </main>
    )
}