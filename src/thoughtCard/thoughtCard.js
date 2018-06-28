import React from 'react';

export const ThoughtCard = ( { id, title, body }) => {
  return (
    <div className='thought' id={ id }>
      <h2>{ title }</h2>
      <p>{ body }</p>
      <button>Delete</button>
    </div>
  )
}
