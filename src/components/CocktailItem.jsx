import { Link } from "react-router";

const CocktailItem = ({ drink }) => {
	const {
		idDrink: id,
		strDrink: name,
		strDrinkThumb: image,
		strAlcoholic: info,
		strGlass: glass,
	} = drink;

	return (
		<article className="bg-white shadow-2xs p-4">
			<div className="card">
				<img src={image} alt={name} className="card-img-top" />
				<div className="card-body">
					<h5 className="card-title my-2 text-2xl font-bold">
						{name}
					</h5>
					<p className="text-sm text-gray-600">{glass}</p>
					<p className="text-sm text-gray-400">{info}</p>
					<Link
						to={`/cocktail/${id}`}
						className="px-4 py-2 bg-blue-600 text-white rounded mt-4 inline-block"
					>
						Details
					</Link>
				</div>
			</div>
		</article>
	);
};

export default CocktailItem;
