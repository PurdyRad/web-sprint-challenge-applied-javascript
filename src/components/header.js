const Header = (title, date, temp) => {
  const header = document.createElement('div')
  const day = document.createElement('span')
  const titl = document.createElement('h1')
  const tem = document.createElement('span')
  
  header.classList.add('header')
  day.classList.add('date')
  tem.classList.add('temp')

  day.textContent = date
  titl.textContent = title
  tem.textContent = temp

  header.appendChild(day)
  header.appendChild(titl)
  header.appendChild(tem)

  console.log(header)

  return header
// TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
};

const entryHeader = document.querySelector('.header-container');

const headerAppender = (selector) => {
  //console.log(headerAppender())
  const header = Header("BREAKING NEWS", "4/20/69", "Humid af")
  console.log(header)
  entryHeader.appendChild(header)
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
};

export { Header, headerAppender }
