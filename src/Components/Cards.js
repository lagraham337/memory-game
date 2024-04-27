import { useState } from 'react'
import Card from './Card'

export default function Cards() {

    const [cards, setCards] = useState([
        { id: 0, name: 'Grandpa', status: '', img: '/images/Grandpa.png'},
        { id: 0, name: 'Grandpa', status: '', img: '/images/Grandpa.png'},
        { id: 1, name: 'Gus', status: '', img: '/images/Gus.png'},
        { id: 1, name: 'Gus', status: '', img: '/images/Gus.png'},
        { id: 2, name: 'Leo', status: '', img: '/images/Leo.png'},
        { id: 2, name: 'Leo', status: '', img: '/images/Leo.png'},
        { id: 3, name: 'Marnie', status: '', img: '/images/Marnie.png'},
        { id: 3, name: 'Marnie', status: '', img: '/images/Marnie.png'},
        { id: 4, name: 'Pierre', status: '', img: '/images/Pierre.png'},
        { id: 4, name: 'Pierre', status: '', img: '/images/Pierre.png'},
        { id: 5, name: 'Robin', status: '', img: '/images/Robin.png'},
        { id: 5, name: 'Robin', status: '', img: '/images/Robin.png'},
        { id: 6, name: 'Sandy', status: '', img: '/images/Sandy.png'},
        { id: 6, name: 'Sandy', status: '', img: '/images/Sandy.png'},
        { id: 7, name: 'Wizard', status: '', img: '/images/Wizard.png'},
        { id: 7, name: 'Wizard', status: '', img: '/images/Wizard.png'}
    ])
    return (
        <div className="container">
            { cards.map((card, index) => {
                return <Card card = {card}/>

            })}
        </div>
    );
}