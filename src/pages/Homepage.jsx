import Banner from "../components/Banner";
import LatestBookList from "../components/book/LatestBookList";

export default function Homepage() {
	return (
		<div className="container mx-auto w-11/12">
			<Banner />
			<LatestBookList />
		</div>
	);
}
