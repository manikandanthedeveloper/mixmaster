import { createBrowserRouter } from "react-router";
import OneColumnLayout from "./layouts/OneColumnLayout";
import {
	LandingPage,
	AboutPage,
	ContactPage,
	ErrorPage,
	NewsLetter,
} from "./pages";
import LandingLoader from "./components/LandingLoader";
import SinglePageError from "./pages/SinglePageError";
import Spinner from "./components/Spinner";
import CocktailPage from "./pages/CocktailPage";
import CoctailLoader from "./components/CoctailLoader";

const AppRouter = (queryClient) => createBrowserRouter([
	{
		path: "/",
		element: <OneColumnLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <LandingPage />,
				loader: LandingLoader(queryClient),
				errorElement: <SinglePageError />,
				hydrateFallbackElement: <Spinner />,
			},
			{
				path: "/cocktail/:id",
				element: <CocktailPage />,
				loader: CoctailLoader(queryClient),
				errorElement: <SinglePageError />,
				hydrateFallbackElement: <Spinner />,
			},
			{
				path: "/about",
				element: <AboutPage />,
			},
			{
				path: "/contact",
				element: <ContactPage />,
			},
			{
				path: "/newsletter",
				element: <NewsLetter />,
			},
		],
	},
]);

export default AppRouter;
