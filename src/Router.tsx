import * as React from "react";
import { Routes, Route } from "react-router-dom";
import {AuthPage} from './views/AuthPage/AuthPage';
import { FilmPage } from "./views/FilmPage/FilmPage";
import { FilmsListingPage } from "./views/FilmsListingPage/FilmsListingPage";


export const Router = () => {
	const routes = [
		{ url: "/signUp", component: <AuthPage/> },
		{ url: "/login", component: <AuthPage/> },
		{ url: "/films", component: <FilmsListingPage/> },
		{ url: "/film/:id", component: <FilmPage/> },
	
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