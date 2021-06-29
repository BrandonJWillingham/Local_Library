function findAccountById(accounts, id) {
  return accounts.find((account) => account.id == id)
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((a,b) => a.name.last > b.name.last ? 1 : -1)
  
}

function getTotalNumberOfBorrows(account, books) {
  let total = 0;
  let {id} = account;
  books.forEach(currentBook => currentBook.borrows.forEach((borrows) => id == borrows.id ? total++ : total + 0 ))
  return total;
}

// function getBooksPossessedByAccount(account, books, authors) {
//   let {id} = account;
//   // getting filtered books
//   let borrowedBooks = books.filter(currentBook => currentBook.borrows.filter(borrows => false === borrows.returned && borrows.id === id))
  
//   // reconstructing the author data onto borrowedBooks below

//   //just testing
//   console.log(borrowedBooks);
//   return borrowedBooks;
// }
function getBooksPossessedByAccount(account, books, authors) {
  let {id} = account;
  // getting filtered books
  let borrowedBooks = books.filter(currentBook => currentBook.borrows.find((borrow) => id === borrow.id && !borrow.returned))
  // reconstructing the author data onto borrowedBooks below
  borrowedBooks.forEach(book=>{
    let author = authors.find(person => person.id === book.authorId);
    book['author'] = author;
  })
//just testing
  console.log(borrowedBooks);
  return borrowedBooks;
}
module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
