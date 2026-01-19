import { useLoaderData } from "react-router";
import CocktailItems from "../components/CocktailItems";
import SearchForm from "../components/SearchForm";
import { useQuery } from "@tanstack/react-query";
import cocktailSearchQuery from "../queries/cocktailSearchQuery";

const LandingPage = () => {
	const { searchTerm } = useLoaderData();
	const { data: drinks } = useQuery(cocktailSearchQuery(searchTerm));

	return (
		<>
			<SearchForm searchTerm={searchTerm} />
			<CocktailItems drinks={drinks} />
		</>
	);
};

export default LandingPage;
