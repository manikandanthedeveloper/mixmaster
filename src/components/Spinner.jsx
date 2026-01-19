import { ImSpinner9 } from "react-icons/im";

const Spinner = () => {
	return (
		<div className="flex justify-center items-center h-screen text-4xl animate-spin text-blue-600">
			<ImSpinner9 />
		</div>
	);
};

export default Spinner;
