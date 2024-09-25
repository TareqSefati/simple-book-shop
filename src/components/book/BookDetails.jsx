export default function BookDetails({ book }) {
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
				<p>Tags: {book.tags} </p>
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
				</div>
			</div>
		</div>
	);
}

function showToastCart(bookId, bookName) {
	alert("BookId: " + bookId + " - " + bookName + " added to your cart.");
}

function showToastWish(bookId, bookName) {
	alert("BookId: " + bookId + " - " + bookName + " added to your wish list");
}
