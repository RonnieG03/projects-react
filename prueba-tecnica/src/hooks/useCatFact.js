import { useState, useEffect } from "react"
import { getRandomFact } from "../service/facts"

export function useCatFact () {
    const [fact, setfact] = useState()

    const refreshFact = () => {
        getRandomFact().then(setfact)
    }

    // para recuperar la cita al cargar la pagina
    useEffect(refreshFact, [])

    return { fact, refreshFact }
}