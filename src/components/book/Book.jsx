import { Link } from "react-router-dom";
import { ROUTES } from "../../routes";

export default function Book(props) {
	const { book } = props;
	return (
		<div>
			<div className="card bg-base-100 shadow-xl h-96">
				<figure className="h-1/2">
					<img
						className="h-full rounded-md"
						src={book.image}
						alt={book.bookName + " book's image"}
					/>
				</figure>
				<div className="card-body">
					<h2 className="card-title">
						{book.bookName}
						<div className="badge badge-accent">{book.rating}</div>
					</h2>
					<p>Author: {book.author}</p>
					<p>Category: {book.category}</p>
					<p>Tags: {book.tags.join(", ")}</p>
					<div className="card-actions justify-end">
						<Link to={ROUTES.SINGLE_BOOK.DYNAMIC(book.bookId)}>
							<button className="btn btn-neutral btn-sm">
								Book Details
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
