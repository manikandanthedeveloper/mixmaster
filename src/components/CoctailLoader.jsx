import singleCocktailSearchQuery from "../queries/singleCocktailSearchQuery";

const CoctailLoader =
	(queryClient) =>
	async ({ params }) => {
		const { id } = params;
		await queryClient.ensureQueryData(singleCocktailSearchQuery(id));
		return { id };
	};

export default CoctailLoader;

// import cocktailSearchQuery from "../queries/cocktailSearchQuery";

// const LandingLoader =
// 	(queryClient) =>
// 	async ({ request }) => {
// 		const url = new URL(request.url);
// 		const searchTerm = url.searchParams.get("search") || "";
// 		console.log(searchTerm);
// 		await queryClient.ensureQueryData(cocktailSearchQuery(searchTerm));
// 		return { searchTerm };
// 	};

// export default LandingLoader;
