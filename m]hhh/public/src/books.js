function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id)
}

function findBookById(books, id) {
  return books.find((book) => book.id == id)
}

function partitionBooksByBorrowedStatus(books) {
    let borrowedBooks = books.filter(currentBook => currentBook.borrows.some(checking => !checking.returned))
    let returnedBooks = books.filter(currentBook => currentBook.borrows.every(checking => checking.returned))
   
    return [borrowedBooks, returnedBooks]
  //   const borrowedBooks = [];
  //   const returnedBooks = [];
  //   books.forEach((book) => {
  //     if(!book.borrows[0].returned){
  //        borrowedBooks.push(book)
  //     } else {
  //       returnedBooks.push(book);
  //     }
  //   });
  
  //   return [borrowedBooks, returnedBooks];
  
}


function getBorrowersForBook(book, accounts) {
  const account = []
  book.borrows.forEach(person => {
    let personAcc = accounts.find(personalInfo => person.id == personalInfo.id)
    personAcc['returned'] = person.returned;
    account.push(personAcc);
  });
  return account.slice(0,10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
