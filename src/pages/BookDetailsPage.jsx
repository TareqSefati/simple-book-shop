import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookDetails from "../components/book/BookDetails";
import { getBookById } from "../utils/Books";

export default function BookDetailsPage() {
	let { bookId } = useParams();
	//const { books } = useLoaderData();
	const [book, setBook] = useState({});
	const getSingleBook = async (bookId) => {
		const value = await getBookById(bookId);
		setBook(value);
	};
	useEffect(() => {
		// One way to get book by id fetching in here.
		// fetch("/data/books-data.json") //Need to be careful.
		// 	.then((res) => res.json())
		// 	.then((data) => {
		// 		data.map((bookItem) => {
		// 			if (bookItem.bookId == bookId) {
		// 				setBook(bookItem);
		// 			}
		// 		});
		// 	})
		// 	.catch((error) => console.log("Error", error));

		//Another way to get book by Id using this util function.
		getSingleBook(bookId);
	}, []);

	return (
		<div className="container mx-auto w-11/12">
			<BookDetails book={book} />
		</div>
	);
}
