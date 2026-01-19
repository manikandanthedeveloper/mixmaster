import CocktailItem from "./CocktailItem";

const CocktailItems = ({ drinks }) => {
	if (!drinks || drinks.length === 0) {
		return (
			<h2 className="section-title">
				No cocktails matched your search criteria
			</h2>
		);
	}

	return (
		<section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
			{drinks.map((drink) => {
				return <CocktailItem key={drink.idDrink} drink={drink} />;
			})}
		</section>
	);
};

export default CocktailItems;
