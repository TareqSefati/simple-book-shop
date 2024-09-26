import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function BookDetails({ book }) {
	const showToastCart = (bookId, bookName) => {
		// alert("BookId: " + bookId + " - " + bookName + " added to your cart.");
		toast.success(
			`BookId: ${book.bookId} - ${book.bookName} has been successfully added to the cart.`
		);
	};

	const showToastWish = (bookId, bookName) => {
		// alert("BookId: " + bookId + " - " + bookName + " added to your wish list");
		toast.success(
			`BookId: ${book.bookId} - ${book.bookName} has been successfully added to the Wishlist.`
		);
	};

	return (
		<div className="card card-side bg-base-100 shadow-xl mt-10 p-4">
			<figure>
				<img src={book.image} alt="book-image" />
			</figure>
			<div className="card-body">
				<h2 className="card-title">Book Name: {book.bookName}</h2>
				<p>Author: {book.author} </p>
				<p>Category: {book.category} </p>
				<p>Review: {book.review} </p>
				<p>Tags: {book.tags.join(", ")} </p>
				<p>Total Pages: {book.totalPages} </p>
				<p>Publisher: {book.publisher} </p>
				<p>Year Of Publishing: {book.yearOfPublishing} </p>
				<p>Rating: {book.rating} </p>
				<p>Details</p>
				<div className="card-actions justify-end">
					<button
						onClick={() =>
							showToastWish(book.bookId, book.bookName)
						}
						className="btn btn-neutral"
					>
						Wish to Read
					</button>
					<button
						onClick={() =>
							showToastCart(book.bookId, book.bookName)
						}
						className="btn btn-primary"
					>
						Add to Cart
					</button>
					<ToastContainer
						position="bottom-right"
						autoClose={5000}
						hideProgressBar={false}
						newestOnTop={false}
						closeOnClick
						rtl={false}
						pauseOnFocusLoss
						draggable
						pauseOnHover
						theme="light"
					/>
				</div>
			</div>
		</div>
	);
}
