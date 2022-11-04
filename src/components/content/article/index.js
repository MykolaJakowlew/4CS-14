import React from "react";
import './style.css';

const getArticleComponentHeader = (text) => {
 return (<div className="article-header">{text}</div>);
};

const getArticleTextComponent = (text) => {
 return (<div className="article-text">{text}</div>);
};

function Article (props) {
 const { card } = props;
 return (
  <article>
   <div
    className="card-image"
    style={{
     backgroundImage: `url(${card.image})`
    }}></div>
   <div
    className="card-title"
   >{card.title}</div>
   <div className="card-description">{card.description}</div>
   {
    card.fullPage.map(el => {
     switch (el.type) {
      case 'header': {
       return getArticleComponentHeader(el.text);
      }
      case 'text': {
       return getArticleTextComponent(el.text);
      }
      default: { }
     }
    })
   }
  </article>
 );
}

export default Article;
