import Banner from "../components/Banner";
import BookList from "../components/book/BookList";
import Navbar from "../components/shared/Navbar";

export default function Homepage() {
	return (
		<div className="container mx-auto">
			<Navbar />
            <Banner />
            <BookList />
		</div>
	);
}
