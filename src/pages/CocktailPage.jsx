import { useQuery } from "@tanstack/react-query";
import { Link, useLoaderData } from "react-router";
import singleCocktailSearchQuery from "../queries/singleCocktailSearchQuery";

const CocktailPage = () => {
	const { id } = useLoaderData();
	const { data } = useQuery(singleCocktailSearchQuery(id));
	const drink = data.drinks[0];
	const {
		strDrink: name,
		strDrinkThumb: image,
		strAlcoholic: info,
		strCategory: category,
		strGlass: glass,
		strInstructions: instructions,
	} = drink;

	const ingredients = Object.keys(drink)
		.filter((key) => key.startsWith("strIngredient") && drink[key])
		.map((key) => drink[key]);

	return (
		<div className="section cocktail-section bg-white p-8 shadow-2xs">
			<header className="section-title mb-4">
				<ul className="breadcrumb flex gap-2 text-blue-600 ">
					<li className="hover:underline">
						<Link to="/">{category}</Link>
					</li>
					/<li className="">{name}</li>
				</ul>
			</header>
			<article className="drink flex flex-col md:flex-row gap-8">
				<img src={image} alt={name} />
				<div className="drink-info">
					<h2 className="text-3xl font-bold">{name}</h2>
					<p className="my-4 ">
						<strong>Category :</strong> {category}
					</p>
					<p>
						<strong>Info :</strong> {info}
					</p>
					<p>
						<strong>Glass :</strong> {glass}
					</p>
					<p className="my-4">
						<strong>Instructions :</strong> {instructions}
					</p>
					<p className="my-4">
						<strong>Ingredients :</strong>
					</p>
					<ul className="ingredients-list">
						{ingredients.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				</div>
			</article>
		</div>
	);
};

export default CocktailPage;
