import { createBrowserRouter } from "react-router-dom";
import AuthorDetails from "../components/author/AuthorDetails";
import AuthorList from "../components/author/AuthorList";
import AllBooks from "../components/book/AllBooks";
import CommonLayout from "../layout/CommonLayout";
import BookDetailsPage from "../pages/BookDetailsPage";
import FaqPage from "../pages/FaqPage";
import Homepage from "../pages/Homepage";
import NotFoundPage from "../pages/NotFoundPage";
import { ROUTES } from "../routes";
import { getAllAuthors } from "../utils/Authors";
const router = createBrowserRouter([
	{
		path: `${ROUTES.HOME}`,
		element: <CommonLayout />,
		errorElement: <NotFoundPage />,
		children: [
			{
				path: `${ROUTES.HOME}`,
				element: <Homepage />,
			},
			{
				path: `${ROUTES.BOOKS}`,
				element: <AllBooks />,
			},
			{
				path: `${ROUTES.AUTHORS}`,
				loader: getAllAuthors,
				element: <AuthorList />,
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
				errorElement: <NotFoundPage />,
				// loader: booksLoader,
			},
			{
				path: `${ROUTES.SINGLE_AUTHOR.STATIC}`,
				element: <AuthorDetails />,
				errorElement: <NotFoundPage />,
				// loader: booksLoader,
			},
		],
	},
	// {
	//     path: "*",
	//     element: <NotFoundPage />,
	// },
]);

export default router;
