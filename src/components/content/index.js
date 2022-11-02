import React, { useState } from "react";
import './style.css';
import image1 from './imgs/5e4b1a8c95e491e2e6265a89_photo-1441512673622-3eaa1c39ba28.jpg';
import image2 from './imgs/5e4b1a8c95e491b7e5265a8a_3f4eb74a.jpg';
import image3 from './imgs/5e4b1a8c95e4916f85265a88_photo-1433854304641-67729357fe18.jpg';
import image4 from './imgs/5e4b1a8c95e4911851265a87_photo-1443466612971-98a16c828136.jpg';
import Card from './card';

function Content () {
 const cards = [
  {
   image: image1,
   title: 'Coffee variety macchiato, as organic ut variety caffeine americano',
   description: 'Saucer, crema carajillo, bar, mocha medium, latte cappuccino and espresso acerbic to go. Coffee, irish foam turkish coffee blue mountain seasonal. Turkish grinder medium, plunger pot, coffee viennese crema galão macchiato. Filter, cinnamon, caffeine in, cortado, plunger pot decaffeinated cinnamon lungo con panna milk',
   date: 'June 25, 2020',
   tag: 'Travel',
  },
  {
   image: image2,
   title: 'Overlaid the jeepers uselessly much excluding',
   description: 'Saucer dark cup french press. Barista beans, organic eu variety skinny acerbic flavour caffeine white. Steamed, plunger pot ut dripper decaffeinated, caramelization, sit barista mug con panna shop turkish.',
   date: 'June 25, 2020',
   tag: 'Tech',
  },
  {
   image: image3,
   title: 'Wherever far wow thus a squirrel raccoon jeez jaguar this from along',
   description: 'Cup, caramelization viennese, cultivar macchiato flavour percolator ristretto frappuccino. Lungo extra macchiato cream chicory turkish caramelization.',
   date: 'June 25, 2020',
   tag: 'Art',
  },
  {
   image: image4,
   title: 'According a funnily until pre-set or arrogant well cheerful',
   description: 'Single shot cultivar beans as chicory caffeine. Medium brewed, milk extra that froth pumpkin spice mocha. Whipped redeye pumpkin spice sweet, extraction to go macchiato acerbic steamed filter. Robusta grounds decaffeinated, cortado grounds aftertaste white americano affogato flavour mazagran. Aged eu, extraction, cup seasonal frappuccino in seasonal saucer wings.',
   date: 'June 25, 2020',
   tag: 'Music',
  },
  {
   image: image4,
   title: 'According a funnily until pre-set or arrogant well cheerful',
   description: 'Single shot cultivar beans as chicory caffeine. Medium brewed, milk extra that froth pumpkin spice mocha. Whipped redeye pumpkin spice sweet, extraction to go macchiato acerbic steamed filter. Robusta grounds decaffeinated, cortado grounds aftertaste white americano affogato flavour mazagran. Aged eu, extraction, cup seasonal frappuccino in seasonal saucer wings.',
   date: 'June 25, 2020',
   tag: 'Music',
  }
 ];

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
 return (
  <div className="content-container">
   <div
    className="selected-tag"
    style={selectedTagStyle}
   >{selectedTag}</div>
   {
    cards.map(el => {
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
     />);
    })
   }
   <div
    className="return-button"
    onClick={() => setSelectedTag()}
   >All posts</div>
  </div>
 );
}

export default Content;
