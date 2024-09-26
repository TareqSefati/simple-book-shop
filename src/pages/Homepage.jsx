import Banner from "../components/Banner";
import BookList from "../components/book/BookList";

export default function Homepage() {
	return (
		<div className="container mx-auto w-11/12">
			<Banner />
			<BookList />
		</div>
	);
}
