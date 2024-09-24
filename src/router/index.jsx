import { createBrowserRouter } from "react-router-dom";
import FaqPage from "../pages/Faqpage";
import Homepage from "../pages/Homepage";
import { ROUTES } from "../routes";
const router = createBrowserRouter([
	{
		path: `${ROUTES.HOME}`,
		element: <Homepage />,
	},
	{
		path: "/about",
		element: <span>About</span>,
	},
	{
		path: "/blog",
		element: <span>Blog</span>,
	},
	{
		path: `${ROUTES.FAQ}`,
		element: <FaqPage />,
	},
]);

export default router;
