import React from 'react'
import './card-list.css'
import { Card } from '../card/card.component'

export const CardList = (props) => (
<div className='card-list'>

    {props.monsters.map(monster => (
            <Card key={props.id} monsters={ monster }> </Card> 
        ))}

</div>

)