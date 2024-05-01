import { useState, useRef } from 'react'
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
        { id: 7, name: 'Wizard', status: '', img: '/images/Wizard.png'},
        { id: 8, name: 'Abigail', status: '', img: '/images/Abigail.png'},
        { id: 8, name: 'Abigail', status: '', img: '/images/Abigail.png'},
        { id: 9, name: 'Alex', status: '', img: '/images/Alex.png'},
        { id: 9, name: 'Alex', status: '', img: '/images/Alex.png'},
        { id: 10, name: 'Elliott', status: '', img: '/images/Elliott.png'},
        { id: 10, name: 'Elliott', status: '', img: '/images/Elliott.png'},
        { id: 11, name: 'Emily', status: '', img: '/images/Emily.png'},
        { id: 11, name: 'Emily', status: '', img: '/images/Emily.png'},
        { id: 12, name: 'Haley', status: '', img: '/images/Haley.png'},
        { id: 12, name: 'Haley', status: '', img: '/images/Haley.png'},
        { id: 13, name: 'Harvey', status: '', img: '/images/Harvey.png'},
        { id: 13, name: 'Harvey', status: '', img: '/images/Harvey.png'},
        { id: 14, name: 'Leah', status: '', img: '/images/Leah.png'},
        { id: 14, name: 'Leah', status: '', img: '/images/Leah.png'},
        { id: 15, name: 'Maru', status: '', img: '/images/Maru.png'},
        { id: 15, name: 'Maru', status: '', img: '/images/Maru.png'},
        { id: 16, name: 'Sebastian', status: '', img: '/images/Sebastian.png'},
        { id: 16, name: 'Sebastian', status: '', img: '/images/Sebastian.png'},
        { id: 17, name: 'Shane', status: '', img: '/images/Shane.png'},
        { id: 17, name: 'Shane', status: '', img: '/images/Shane.png'}
    ].sort(() => Math.random() - .5))



    const [previousCardState, setPreviousCardState] = useState(-1)
    const previousIndex = useRef(-1)

    const matchCheck = (currentCard) => {
        if(cards[currentCard].id === cards[previousCardState].id){
            cards[previousCardState].status = 'active matched'
            cards[currentCard].status = 'active matched'
            setPreviousCardState(-1)
        }else{
            cards[currentCard].status = 'active'
            setCards([...cards])
            setTimeout(() => {
                setPreviousCardState(-1)
                cards[currentCard].status = 'unmatch'
                cards[previousCardState].status = 'unmatch'
                setCards([...cards])
            }, 1000);
        }
    }

    const clickhandler = (index) => {
        if(index !== previousIndex.current) {
            if(cards[index].status === 'active matched'){
                alert('already matched')
            } else {
                if(previousCardState === -1){
                    previousIndex.current = index
                    cards[index].status = 'active'
                    setCards([...cards])
                    setPreviousCardState(index)
                } else {
                    matchCheck(index)
                    previousIndex.current = -1
                }
            }
        } else {
            alert('card currently selected')
        }
    }

    return (
        <div className="container">
            { cards.map((card, index) => {
                return <Card card = {card} key={index} index={index} clickhandler={clickhandler} />

            })}
        </div>
    );
}