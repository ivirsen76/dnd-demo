import React, { useState } from 'react';
import Card from './Card';
import { DndProvider } from 'react-dnd-multi-backend';
import HTML5toTouch from 'react-dnd-multi-backend/dist/cjs/HTML5toTouch';
import update from 'immutability-helper';

const style = {
    width: 200,
};

const DndOld = () => {
    const [cards, setCards] = useState([
        {
            id: 1,
            text: 'Write a cool JS library',
        },
        {
            id: 2,
            text: 'Make it generic enough',
        },
        {
            id: 3,
            text: 'Write README',
        },
        {
            id: 4,
            text: 'Create some examples',
        },
        {
            id: 5,
            text: 'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
        },
        {
            id: 6,
            text: '???',
        },
        {
            id: 7,
            text: 'PROFIT',
        },
        {
            id: 8,
            text: 'Lorerm sjglsj klsjdfkl jsklf skljfl ksjd fl jioweiuoi sjfgoiuwoi sjmoddiosoj fjsodf osjdof osjof sojfo sdojo',
        },
        {
            id: 9,
            text: 'Lorerm sjglsj klsjdfkl jsklf skljfl ksjd fl jioweiuoi sjfgoiuwoi sjmoddiosoj fjsodf osjdof osjof sojfo sdojo',
        },
        {
            id: 10,
            text: 'Lorerm sjglsj klsjdfkl jsklf skljfl ksjd fl jioweiuoi sjfgoiuwoi sjmoddiosoj fjsodf osjdof osjof sojfo sdojo',
        },
        {
            id: 11,
            text: 'Lorerm sjglsj klsjdfkl jsklf skljfl ksjd fl jioweiuoi sjfgoiuwoi sjmoddiosoj fjsodf osjdof osjof sojfo sdojo',
        },
        {
            id: 12,
            text: 'Lorerm sjglsj klsjdfkl jsklf skljfl ksjd fl jioweiuoi sjfgoiuwoi sjmoddiosoj fjsodf osjdof osjof sojfo sdojo',
        },
        {
            id: 13,
            text: 'Lorerm sjglsj klsjdfkl jsklf skljfl ksjd fl jioweiuoi sjfgoiuwoi sjmoddiosoj fjsodf osjdof osjof sojfo sdojo',
        },
    ]);

    const moveCard = (dragIndex, hoverIndex) => {
        const dragCard = cards[dragIndex];
        setCards(
            update(cards, {
                $splice: [
                    [dragIndex, 1],
                    [hoverIndex, 0, dragCard],
                ],
            })
        );
    };

    // console.log(HTML5toTouch);

    // HTML5toTouch.backends[0].options = { delay: 500 };
    HTML5toTouch.backends[1].options = { ...HTML5toTouch.backends[1].options, delayTouchStart: 120, ignoreContextMenu: true };

    return (
        <DndProvider options={HTML5toTouch}>
            <div style={style}>
                {cards.map((card, i) => (
                    <Card key={card.id} index={i} id={card.id} text={card.text} moveCard={moveCard} />
                ))}
            </div>
        </DndProvider>
    );
};


export default DndOld;