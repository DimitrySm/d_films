import { Routes, Route, Navigate } from "react-router-dom";
import {AuthPage} from './views/AuthPage/AuthPage';
import { FilmPage } from "./views/FilmPage/FilmPage";
import { FilmsListingPage } from "./views/FilmsListingPage/FilmsListingPage";
import PageNotFound from "./views/PageNotFound/PageNotFound";


export const Router = () => {
	const routes = [
		{ url: "/signUp", component: <AuthPage/> },
		{ url: "/login", component: <AuthPage/> },
		{ url: "/films", component: <FilmsListingPage/> },
		{ url: "/film/:id", component: <FilmPage/> },
		{ url: "*", component: <PageNotFound/> },
		{ url: "/", component: <Navigate to="/films" /> },
];

	return (
		<Routes>
			{routes.map((data, i) => (
				<Route
					key={i}
					path={`/${data.url}`}
					element={data.component}
				/>
			))}
		</Routes>
	);
};