import axios from "axios";
const cocktailSearchUrl =
	"https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const cocktailSearchQuery = (searchTerm) => {
	const search = searchTerm || "a";

	return {
		queryKey: ["cocktails", search],
		queryFn: async () => {
			const response = await axios.get(`${cocktailSearchUrl}${search}`);
			return response.data.drinks;
		},
	};
};

export default cocktailSearchQuery;
