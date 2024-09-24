import Footer from "../components/Footer";
import Navbar from "../components/shared/Navbar";

export default function BookDetailsPage() {
	return (
		<div className="container mx-auto w-11/12">
			<Navbar />

			<div className="card card-side bg-base-100 shadow-xl mt-10">
				<figure>
					<img src={book.image} alt="Movie" />
				</figure>
				<div className="card-body">
					<h2 className="card-title">New movie is released!</h2>
					<p>Click the button to watch on Jetflix app.</p>
					<div className="card-actions justify-end">
						<button
							onClick={showToastWish}
							className="btn btn-neutral"
						>
							Wish to Read
						</button>
						<button
							onClick={showToastCart}
							className="btn btn-primary"
						>
							Add to Cart
						</button>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
}

function showToastWish() {
	return (
		<div className="toast toast-end">
			<div className="alert alert-success">
				<span>Book is added to wish list.</span>
			</div>
		</div>
	);
}

function showToastCart() {
	return (
		<div className="toast toast-end">
			<div className="alert alert-success">
				<span>Book is added to cart.</span>
			</div>
		</div>
	);
}
