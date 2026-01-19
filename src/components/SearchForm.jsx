import { Form, useNavigation } from "react-router";

const SearchForm = ({ searchTerm }) => {
	const navigation = useNavigation();
	const isSubmitting = navigation.state === "submitting";

	return (
		<>
			<div className="mt-4 my-8 flex justify-center">
				<Form className="flex justify-center bg-white p-4 shadow-2xs">
					<input
						type="search"
						name="search"
						placeholder="Search your favorite cocktail"
						className="border-2 border-gray-300 rounded-l-md px-4 py-2 w-64 focus:outline-none"
						defaultValue={searchTerm}
					/>
					<button
						type="submit"
						className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors"
						disabled={isSubmitting}
					>
						{isSubmitting ? "Searching..." : "Search"}
					</button>
				</Form>
			</div>
		</>
	);
};

export default SearchForm;
