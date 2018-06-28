import React from 'react';
import { ThoughtCard } from '../thoughtCard/thoughtCard';

export const ThoughtList = ( {thoughtList} ) => {
  
  const createThoughts = thoughtList.map(( thought, index) =>{
    return < ThoughtCard 
              { ...thought }
              key={ index }
              />
  })

  return (
    <div>
   { createThoughts }
    </div>
  );
}
