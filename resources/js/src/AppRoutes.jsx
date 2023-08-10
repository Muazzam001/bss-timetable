import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "@/src/Pages/Auth/Login";


class AppRoutes extends React.Component{
	render() {
		return (
			<BrowserRouter>
				<div>
					<Routes>
						<Route path={`/`}  element={<Login />} />
						{/*<Route path={`${process.env.APP_URL}/profile`} exact element={<Profile />}/>*/}
					</Routes>
				</div>
			</BrowserRouter>
		);
	}
}

export default AppRoutes
