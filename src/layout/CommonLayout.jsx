import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/shared/Navbar";

export default function CommonLayout() {
	return (
		<>
			<Navbar />
			<Outlet />
			<Footer />
		</>
	);
}
