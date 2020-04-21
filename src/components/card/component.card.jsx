import React from 'react';

export const JustCard = (props) =>{
  return  <div className="card-container">
        <img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} alt={props.monster.name} />
        <h4>{props.monster.name}</h4>
        <p>{props.monster.email}</p>
    </div>
}