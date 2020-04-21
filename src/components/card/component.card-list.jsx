import React from 'react';
import './component.card.style.css';
import {JustCard} from './component.card';
export const CardList = props =>{
return <div className="card-item">
    {
        props.monsters_list.map(item => 
            <JustCard key={item.id} monster={item}/>
        )
    }
            
    </div>
}