import React from "react";
import AppRoutes from "@/src/appRoutes.jsx";
import Header from "./shared/header/header";

export default function Index() {
	return(
		<>
			<Header />
			<AppRoutes />
		</>
	);
}
