import Accordion from "../components/Accordion";
import Footer from "../components/Footer";
import Navbar from "../components/shared/Navbar";

export default function FaqPage() {
	return (
		<div className="container mx-auto w-11/12">
			<Navbar />
            <Accordion />
			<Footer />
		</div>
	);
}
