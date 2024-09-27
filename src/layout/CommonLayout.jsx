import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/shared/Navbar";

export default function CommonLayout() {
    const navigation = useNavigation();
	return (
		<>
			<Navbar />
            {navigation.state === "loading" ? <h1 className="text-center font-bold text-5xl min-h-screen mt-48">Loading ...</h1> : <Outlet />}
			<Footer />
		</>
	);
}
