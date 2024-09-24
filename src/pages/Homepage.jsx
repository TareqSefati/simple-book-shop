import Banner from "../components/Banner";
import BookList from "../components/book/BookList";
import Footer from "../components/Footer";
import Navbar from "../components/shared/Navbar";

export default function Homepage() {
	return (
		<div className="container mx-auto w-11/12">
			<Navbar />
            <Banner />
            <BookList />
            <Footer />
		</div>
	);
}
