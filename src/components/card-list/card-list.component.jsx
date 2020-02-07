import React from 'react';
import './card-list.styles.css';
import { Card } from '../card/card.component';

export const CardList = (props) => {
    return (
        props.stateOfCardList ? 
            <div className='card-list'>
            {
                props.monsters.map((monster) => (
                    <Card key={monster.id} monster={monster}>
                    </Card>
                ))
            }
            </div>
        :
        <div className="notFound">
            <h1>Monster Not Found</h1>
        </div>
        
    )
}