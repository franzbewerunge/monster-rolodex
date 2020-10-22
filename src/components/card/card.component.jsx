import React from 'react'
import './card.css'


export const Card = props => (
    <div className='card'>
        <img
            className='image'
            src={`https://robohash.org/${props.monsters.id}?set=set2&size=180x180`}
            alt=''
            
        />
        <h1> {props.monsters.name} </h1>
        <h2> {props.monsters.email}</h2>


    </div> 
)
