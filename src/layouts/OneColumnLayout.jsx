import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const OneColumnLayout = () => {
	return (
		<>
			<Navbar />
			<div className="container mx-auto py-4 px-4 sm:px-0">
				<Outlet />
			</div>
		</>
	);
};

export default OneColumnLayout;
