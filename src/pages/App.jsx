import React from "react";
import { Routes, Route } from "react-router-dom";
import HtmlDefinition from "./HtmlDefinition";
import Home from "./Home";
import CssDefinition from "./CssDefinition";
import JsDefinition from "./JsDescription";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="html" element={<HtmlDefinition />} />
			<Route path="css" element={<CssDefinition />} />
			<Route path="js" element={<JsDefinition />} />
		</Routes>
	);
};

export default App;
