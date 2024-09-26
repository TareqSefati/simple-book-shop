import { useEffect, useState } from "react";
import Book from "./Book";
import { getAllBooks } from "../../utils/Books";

export default function BookList() {
	const [books, setBooks] = useState([]);
    const getAllBooksData = async () => {
        const value = await getAllBooks();
        setBooks(value);
        console.log(books);
    }
	useEffect(() => {
        // One way to get book by id fetching in here.
		// fetch("/data/books-data.json")
		// 	.then((res) => res.json())
		// 	.then((data) => setBooks(data))
		// 	.catch((error) => console.log("Error", error));

        //Another way to get book by Id using this util function.
        getAllBooksData();
	}, []);

	return (
		<div>
			<div className="mb-5 mt-10">
				<h1
					id="category-name"
					className="text-center font-bold text-5xl mb-5"
				>
					All Books
				</h1>
				<hr className="w-3/4 mx-auto" />
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{books?.map((book) => (
					<Book key={book.bookId} book={book} />
				))}
			</div>
		</div>
	);
}
