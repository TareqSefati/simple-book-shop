import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function BookDetails({ book }) {
    // console.log(book)
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
				<h2 className="card-title">
					Book Name: {book.bookName || "No Book found!"}
				</h2>
				<p>Author: {book.author || "No Book found!"} </p>
				<p>Category: {book.category || "No Book found!"} </p>
				<p>Review: {book.review || "No Book found!"} </p>
				<p>Tags: {book?.tags?.join(", ") || "No Book found!"} </p>
				<p>Total Pages: {book.totalPages || "No Book found!"} </p>
				<p>Publisher: {book.publisher || "No Book found!"} </p>
				<p>
					Year Of Publishing:{" "}
					{book.yearOfPublishing || "No Book found!"}{" "}
				</p>
				<p>Rating: {book.rating || "No Book found!"} </p>
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
