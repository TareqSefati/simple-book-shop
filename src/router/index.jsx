import { createBrowserRouter } from "react-router-dom";
import BookDetailsPage from "../pages/BookDetailsPage";
import FaqPage from "../pages/FaqPage";
import Homepage from "../pages/Homepage";
import NotFoundPage from "../pages/NotFoundPage";
import { ROUTES } from "../routes";
import { booksLoader } from "../utils/BookLoader";
const router = createBrowserRouter([
	{
		path: `${ROUTES.HOME}`,
		element: <Homepage />,
	},
	{
		path: `${ROUTES.ABOUT}`,
		element: <span>About</span>,
	},
	{
		path: `${ROUTES.BLOG}`,
		element: <span>Blog</span>,
	},
	{
		path: `${ROUTES.FAQ}`,
		element: <FaqPage />,
	},
	{
		path: `${ROUTES.SINGLE_BOOK.STATIC}`,
		element: <BookDetailsPage />,
		loader: booksLoader,
	},
	{
		path: "*",
		element: <NotFoundPage />,
	},
]);

export default router;
