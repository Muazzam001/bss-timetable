import React from "react";
import AppRoutes from "@/src/AppRoutes.jsx";
import Header from "./components/shared/header/header";

export default function Index() {
	return(
		<>
			<Header />
			<AppRoutes />
		</>
	);
}
