import * as React from "react";
import { Routes, Route } from "react-router-dom";
import {AuthPage} from './views/AuthPage/AuthPage';
import { FilmsListingPage } from "./views/FilmsListingPage/FilmsListingPage";


export const Router = () => {
	return (
		<>
				<Routes>
					<Route path="" element={<AuthPage />} />
					<Route path="login" element={<AuthPage />} />
					<Route path="films" element={<FilmsListingPage />} />
				</Routes>
		</>
	);
};