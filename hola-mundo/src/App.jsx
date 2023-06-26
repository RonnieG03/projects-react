import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App(){
    return (
        <section className='App'>
            <TwitterFollowCard userName="ronnie">
                Ronnie G
            </TwitterFollowCard>

            <TwitterFollowCard userName="maria">
                Maria Gomez
            </TwitterFollowCard>

            <TwitterFollowCard userName="pablo">
                Pablo Perez
            </TwitterFollowCard>
        </section>
    )
}