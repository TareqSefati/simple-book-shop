export async function getAllBooks() {
    let books = []
    await fetch("/data/books-data.json") //Need to be careful.
        .then((res) => res.json())
        .then((data) => {
            books = data;
            // console.log(books);
        })
        .catch((error) => console.log("Error", error));
    return books;
}

export async function getBookById(id) {
    let book = {};
    await fetch("/data/books-data.json") //Need to be careful.
        .then((res) => res.json())
        .then((data) => {
            data.map((bookItem) => {
                if (bookItem.bookId == id) {
                    book = bookItem;
                    // console.log(book);
                }
            });
        })
        .catch((error) => console.log("Error", error));
    return book;
}