const Header = (titleP, dateP, tempP) => {
  //instantiate
  const header = document.createElement('div')
  const date = document.createElement('span')
  const title = document.createElement('h1')
  const temp = document.createElement('span')

  //structure
  header.appendChild(date)
  header.appendChild(title)
  header.appendChild(temp)

  //add class
  header.classList.add('header')
  date.classList.add('date')
  temp.classList.add('temp')

  //text content
  date.textContent = dateP
  title.textContent = titleP
  temp.textContent = tempP

  return header;
}
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


const headerAppender = (selector) => {
  const appendee = document.querySelector(selector)
  appendee.appendChild(Header('Lambda Times', 'JANUARY 6, 2021', "26°"))
}

  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

export { Header, headerAppender }
