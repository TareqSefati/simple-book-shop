import { useLoaderData, useParams } from "react-router-dom";
import BookDetails from "../components/book/BookDetails";
import Footer from "../components/Footer";
import Navbar from "../components/shared/Navbar";

export default function BookDetailsPage() {
	let { bookId } = useParams();
	const { books } = useLoaderData();
	// const [books, setBooks] = useState([]);
	// useEffect(() => {
	// 	fetch("books-data.json")
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			// console.log(data);
	// 			setBooks(data);
	// 		})
	// 		.catch((error) => console.log("Error", error));
	// }, []);

	return (
		<div className="container mx-auto w-11/12">
			<Navbar />
			{books.map((book) => {
				if (book.bookId == bookId) {
					return <BookDetails key={book.bookId} book={book} />;
				}
			})}

			<Footer />
		</div>
	);
}
