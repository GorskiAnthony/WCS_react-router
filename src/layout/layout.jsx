import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
	return (
		<div className="flex flex-col h-screen justify-between">
			<Navbar />
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="max-w-3xl mx-auto">{children}</div>
			</div>
			<Footer />
		</div>
	);
};

export default Layout;
