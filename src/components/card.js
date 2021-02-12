import axios from "axios"

const Card = (article) => {
  const card = document.createElement('div')
  const headLine = document.createElement('div')
  const author = document.createElement('div')
  const imgCont = document.createElement('div')
  const photo = document.createElement('img')
  const authorN = document.createElement('span')

  card.appendChild(headLine)
  card.appendChild(author)
  author.appendChild(imgCont)
  author.appendChild(authorN)
  imgCont.appendChild(photo)

  card.classList.add('card')
  headLine.classList.add('headline')
  author.classList.add('author')
  imgCont.classList.add('img-container')

  headLine.textContent = headline
  photo.src = authorPhoto
  authorN.textContent = `By ${authorName}`

  card.addEventListener('click', event => {
    console.log(headLine)
  });

  return card

  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
}

const entryCard = document.querySelector('.cards-container')

// axios.get('https://lambda-times-api.herokuapp.com/articles')
// .then (() =>{
//   console.log(axios)
// })
// .catch(() => {

// })
const cardAppender = (selector) => {
  //selector.forEach(element => {
    axios.get(`https://lambda-times-api.herokuapp.com/articles`)
    .then((res) => {
    console.log(res)
    const card = Card(res.bootstrap)
    entryCard.appendChild(card)
    })
    .catch((err) => {
    console.log('Access Denied!!!')
    });

  //});
  // axios.get(`https://lambda-times-api.herokuapp.com/articles`)
  // .then((res) => {
  //   console.log(res)
  //   const card = Card(res)
  //   entryCard.appendChild(card)
  // })
  // .catch((err) => {
  //   console.log('Access Denied!!!')
  // });

  


  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.>>
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles` 
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
