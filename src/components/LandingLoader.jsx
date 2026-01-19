import cocktailSearchQuery from "../queries/cocktailSearchQuery";

const LandingLoader =
	(queryClient) =>
	async ({ request }) => {
		const url = new URL(request.url);
		const searchTerm = url.searchParams.get("search") || "";

		await queryClient.ensureQueryData(cocktailSearchQuery(searchTerm));
		return { searchTerm };
	};

export default LandingLoader;
