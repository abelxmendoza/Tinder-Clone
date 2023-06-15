

//UNCOMMENT THIS CODE TO MAKE IT WORK WITH THE BACKEND
/*
import React, { useState, useEffect } from 'react'
import './TinderCards.css'
import TinderCard from 'react-tinder-card'
import axios from './axios';


function TinderCards() {

    const [people, setPeople] = useState([]);


    /*
      
        {
            name: 'Elon Musk',
            url: 'https://phantom-marca.unidadeditorial.es/eca62c8214fde70c26e664d672a38b59/resize/1320/f/jpg/assets/multimedia/imagenes/2022/08/05/16596775100672.jpg',
        },
        {
            name: 'Ozzy Osborne',
            url: 'https://ca-times.brightspotcdn.com/dims4/default/1dbc5e0/2147483647/strip/true/crop/2209x3081+0+0/resize/1200x1674!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F57%2F3e%2F487912c24ee6ab014f992b87527f%2Fla-photos-1staff-485126-la-et-ms-ozzy-osbourne-parkinsons-disease3-mam.jpg',
        },
        
    */
/*
    useEffect(() => {
        async function fetchData() {
            const req = await axios.get('/tinder/cards');

            setPeople(req.data)
        }


        fetchData();
    }, [])

    console.log(people)
*/
    /*

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete)
        //setLastDirection(direction);
    }
      
    const outOfFrame = (name) => {
        console.log(name + ' left the screen')
    }

  return (
    <div className='tinderCards'>

        <div className='tinderCards_container'>

            {people.map((person) => ( 


               <TinderCard
                className='swipe'
                key = {person.name}
                preventSwipe={["up", "down"]}
                onSwipe={(dir) => swiped(dir, person.name)}
                onCardLeftScreen={() => outOfFrame(person.name)}
               >

                <div className='card'
                     style={{ backgroundImage: `url(${person.imgUrl})` }}
                     >
                    
                    <h3>{person.name}</h3>
                </div>

               </TinderCard>


            )) }

        </div>

        
    </div>
  )
}

export default TinderCards;

*/


//This is the part of the code without the backend
// HARDCODED 


import React from 'react';
import './TinderCards.css';
import TinderCard from 'react-tinder-card';

function TinderCards() {
  const people = [
    {
      name: 'Elon Musk',
      imgUrl: 'https://phantom-marca.unidadeditorial.es/eca62c8214fde70c26e664d672a38b59/resize/1320/f/jpg/assets/multimedia/imagenes/2022/08/05/16596775100672.jpg',
    },
    {
      name: 'Ozzy Osborne',
      imgUrl: 'https://ca-times.brightspotcdn.com/dims4/default/1dbc5e0/2147483647/strip/true/crop/2209x3081+0+0/resize/1200x1674!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F57%2F3e%2F487912c24ee6ab014f992b87527f%2Fla-photos-1staff-485126-la-et-ms-ozzy-osbourne-parkinsons-disease3-mam.jpg',
    },
  ];

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + ' left the screen');
  };

  return (
    <div className='tinderCards'>
      <div className='tinderCards_container'>
        {people.map((person) => (
          <TinderCard
            className='swipe'
            key={person.name}
            preventSwipe={['up', 'down']}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              className='card'
              style={{ backgroundImage: `url(${person.imgUrl})` }}
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
