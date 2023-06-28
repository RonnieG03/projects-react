import './App.css'
import { useCatImage } from "./hooks/useCatImage";
import { useCatFact } from './hooks/useCatFact';

//const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function App() {
    const { fact, refreshFact } = useCatFact()
    const { imageUrl } = useCatImage({ fact })

    const handleClick = async () => {
        refreshFact()
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