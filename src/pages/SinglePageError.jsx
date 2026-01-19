import { Link, useRouteError } from "react-router";
import notFoundImg from "../assets/404.svg";

const SinglePageError = () => {
	const error = useRouteError();
	console.log(error);
	return (
		<div className="flex-row justify-center items-center h-screen text-2xl p-4">
			<img src={notFoundImg} alt="Not found" className="mx-auto" />
			<h3 className="text-2xl text-center my-2">Ohh!</h3>
			<p className="text-[15px] text-center my-2">
				{error.message ||
					"We can't seem to find page you are looking for"}
			</p>
			<Link
				to="/"
				className="block text-blue-600 capitalize w-30 mx-auto text-2xl"
			>
				back home
			</Link>
		</div>
	);
};

export default SinglePageError;
