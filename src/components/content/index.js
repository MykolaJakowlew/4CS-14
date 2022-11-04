import React, { useState } from "react";
import './style.css';
import Card from './card';
import Article from './article';
import mockCards from './mock/cards.json';

function Content () {
 const cards = mockCards;

 const [selectedTag, setSelectedTag] = useState();
 console.log('selectedTag:', selectedTag);

 // let display = 'none';
 // if (selectedTag) {
 //  display = 'block';
 // }
 // const display = selectedTag ? 'block' : 'none';
 // <condition> ? <value if true> : <value if false>

 let selectedTagStyle = {};
 if (selectedTag) {
  selectedTagStyle.opacity = 1;
  selectedTagStyle.transform = 'scaleY(1)';
 }

 /**
  * == -- we will check value
  * 5 == 5 => true
  * 5 == '5' => true
  * 
  * === -- we will check type and value
  * 5 === 5 => true
  * 5 === '5' => false 
  */
 // const showCards = cards.filter(card => {
 //  if (selectedTag) {
 //   return card.tag === selectedTag;
 //  }
 //  return true;
 // });
 const [selectedCard, setSelectedCard] = useState();
 console.log('selectedCard:', selectedCard);
 return (
  <div className="content-container">
   <div
    className="selected-tag"
    style={selectedTagStyle}
   >{selectedTag}</div>
   {
    !selectedCard && cards.map(el => {
     let isVisible = true;
     if (selectedTag) {
      isVisible = selectedTag === el.tag;
     }
     return (<Card
      isVisible={isVisible}
      image={el.image}
      description={el.description}
      title={el.title}
      tag={el.tag}
      date={el.date}
      setTag={setSelectedTag}
      setSelectedCard={() => setSelectedCard(el)}
     />);
    })
   }
   {selectedCard && <Article card={selectedCard}/>}
   <div
    className="return-button"
    onClick={() => {
     setSelectedTag();
     setSelectedCard();
    }}
   >All posts</div>
  </div>
 );
}

export default Content;

/**
 * let a = 45;
 * let b = 67;
 * let c;
 * c = a && b; // => 67      ✓
 *                   45 + 67
 *                   4567
 *                   45
 *                   error 
 * c = a || b; // => 45      ✓
 * 
 * c = ("" || "abc") && { v: 1 }; // => "abc"
 *                                      { v: 1 }  ✓
 */
