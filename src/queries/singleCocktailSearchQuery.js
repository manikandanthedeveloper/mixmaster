import axios from "axios";
const cocktailSearchUrl =
	"https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const singleCocktailSearchQuery = (id) => {
	return {
		queryKey: ["cocktail", id],
		queryFn: async () => {
			const { data } = await axios.get(`${cocktailSearchUrl}${id}`);

			return data;
		},
	};
};

export default singleCocktailSearchQuery;
