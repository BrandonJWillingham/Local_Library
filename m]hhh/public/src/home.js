function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  let borrowedBooks = books.filter(currentBook => currentBook.borrows.some(checking => !checking.returned))
  return borrowedBooks.length
}
// MAP METHOD USED HERE
function getMostCommonGenres(books) {
  // const allGenres = []
  const temp = []
  const allGenres = books.map(currentBook =>currentBook.genre)
  allGenres.forEach((currentGenre) =>{
    const genreLocation = temp.findIndex((element) => element.name === currentGenre);
    if (genreLocation >= 0) {
      temp[genreLocation].count = temp[genreLocation].count + 1;
      //else, if it don't exist, push a new genre object onto array with count of 1
    } else {
      temp.push({ name: currentGenre, count: 1 });
    }
  });
  temp.sort((a, b) => b.count - a.count);
  if (temp.length > 5) {
    return temp.slice(0, 5);
  }
  return temp;
}


function getMostPopularBooks(books) {
  const allTitles = []
  const temp = []
  books.forEach(currentBook =>{
    if(!allTitles.includes(currentBook.title)){
      allTitles.push(currentBook.title)
      temp.push({ name: currentBook.title, count: 0 })
     }
  })
  // console.log(temp)
  books.forEach((currentBook) =>{
    const TitleLocation = temp.findIndex((element) => element.name === currentBook.title);
    temp[TitleLocation].count = temp[TitleLocation].count + currentBook.borrows.length;
  });
  temp.sort((a, b) => b.count - a.count);
  if (temp.length > 5) {
    return temp.slice(0, 5);
  }
  console.log(temp)
  return temp;
}

function getMostPopularAuthors(books, authors) {
  const allAuthors = []
  const temp = []
  books.forEach(currentBook =>{
    let bookId = currentBook.authorId
    const foundAuthor = findAuthor(authors, bookId)
    // const foundAuthor = authors.find(currentAuthor => currentAuthor.id === currentBook.authorId )
     const {id, name} = foundAuthor;
    const fullName = `${name.first} ${name.last}`
    if(!allAuthors.includes(id)){
      allAuthors.push(id)
      temp.push({ name: fullName, count: 0 })
     }
  })
  books.forEach(currentBook => {
    let bookId = currentBook.authorId
    const foundAuthor = findAuthor(authors, bookId)
     // const foundAuthor = authors.find(currentAuthor => currentAuthor.id === currentBook.authorId )
    const {name:{first, last }} = foundAuthor;
    const fullName = `${first} ${last}`
    const tempAuthorLocation = temp.findIndex(element => element.name == fullName)
    temp[tempAuthorLocation].count = temp[tempAuthorLocation].count + currentBook.borrows.length;
  })
  console.log(temp);
  temp.sort((a,b) => b.count - a.count);
  return temp.slice(0,5)
}  

//HELPER FUNCTIONS
function findAuthor (authors,id){
    const foundAuthor = authors.find(currentAuthor => currentAuthor.id === id)
    return foundAuthor
}
function checker(arr){
    if(arr == ""|| arr == undefined){
      return 0
    } else{
      return arr.length
    }
}
module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
