import axios from "axios"

const Tabs = (topics) => {
  const topic = document.createElement('div')
  const jtab = document.createElement('div')
  const btab = document.createElement('div')
  const ttab = document.createElement('div')

  topic.appendChild(jtab)
  topic.appendChild(btab)
  topic.appendChild(ttab)

  topic.classList.add('topics')
  jtab.classList.add('tab')
  btab.classList.add('tab')
  ttab.classList.add('tab')

  jtab.textContent = 'javascript'
  btab.textContent = 'bootstrap'
  ttab.textContent = 'technology'
  // console.log(topic)

  return topic


  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
};

const entryTabs = document.querySelector('.tabs-container');

const tabsAppender = (selector) => {

axios.get('https://lambda-times-api.herokuapp.com/topics')
  .then((res) => {
    const topic = Tabs(res)
    entryTabs.appendChild(topic)
  })
  .catch((err) => {
    console.log('Access Denied!!')
  }) 

  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
}

export { Tabs, tabsAppender }
