function findAccountById(accounts, id) {
  return accounts.find((account) => account.id == id)
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((a,b) => a.name.last > b.name.last ? 1 : -1)
  
}

// REDUCE USED IN THIS FUNCTION
function getTotalNumberOfBorrows(account, books) {
  let acc = 0;
  let borrArr = []
  let {id} = account;
  books.forEach(currBook =>{
    let lol = currBook.borrows.filter(borrows => borrows.id == id)
    borrArr.push(lol.length)
  })
  let total = borrArr.reduce((x,y)=> x+y,acc)
//   books.forEach(currentBook => currentBook.borrows.forEach((borrows) => id == borrows.id ? total++ : total + 0 ))
  return total;
}

function getBooksPossessedByAccount(account, books, authors) {
  let {id} = account;
  // getting filtered books
  let borrowedBooks = books.filter(currentBook => currentBook.borrows.find((borrow) => id === borrow.id && !borrow.returned))
  // reconstructing the author data onto borrowedBooks below
  borrowedBooks.forEach(book=>{
    let author = authors.find(person => person.id === book.authorId);
    book['author'] = author;
  })
  console.log(borrowedBooks);
  return borrowedBooks;
}
module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
