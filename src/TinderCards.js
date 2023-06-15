

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
        name: 'Mila Kunis',
        imgUrl: 'https://media1.popsugar-assets.com/files/thumbor/VsVs0tkuGVM8H0q9BErCaBqPTCQ/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2018/08/03/063/n/44701584/7e798f20bda4abc7_GettyImages-96916682/i/Sexy-Mila-Kunis-Pictures.jpg',
      },
      {
        name: 'Chris Hemsworth',
        imgUrl: 'https://media1.popsugar-assets.com/files/thumbor/7MhSgIx8LRivGjgymfhvEpGSj5o/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2020/08/11/412/n/38922769/fb17b06589862dd9_Chris-Hemsworth-Men-In-Black-Cast/i/Hot-Photos-Chris-Hemsworth.jpg',
      },
      {
        name: 'Jenna Ortega',
        imgUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiZW58Sd7xGQgZWQXhMP2jrvADOpDCgiTO6wc2SJNLr44k_WgOoFjCUDadu-d6bFB2U0Vxo-gi1w7iWSV5JJmykAPG7EvIWyngxbU5-q9aQ4103hf-VRQOFcPjWko-LYarfj__METI4nCpAeo9GuTg3oDEyuJATGkWO1FhCa_yLeRb-dKJ7zuOT1CQH/s1600/Genna%20Ortega%20Sexy%20Bikini%20Photos%20%2810%29.jpg',
      },

      {
        name: 'Elon Musk',
        imgUrl: 'https://i.insider.com/551705a769bedda110343a79?width=1080&format=jpeg',
      },
    

      {
        name: 'Johnny Depp',
        imgUrl: 'https://akns-images.eonline.com/eol_images/Entire_Site/2015114/rs_634x835-151204105741-634-johnny-depp-21-jump-street.jpg?fit=around%7C776:1023&output-quality=90&crop=776:1023;center,top',
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
