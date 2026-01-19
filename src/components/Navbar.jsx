import { Link, NavLink } from "react-router";

const Navbar = () => {
	return (
		<nav className="bg-white p-4">
			<div className="container mx-auto flex flex-col sm:flex-row sm:justify-between sm:items-center">
				<h1 className="text-blue-800 font-bold text-xl">
					<Link to="/">MixMaster</Link>
				</h1>
				<div className="flex flex-col sm:flex-row gap-4">
					<NavLink
						to="/"
						className={({ isActive }) =>
							isActive
								? "text-blue-800"
								: "text-blue-400 hover:text-blue-800"
						}
					>
						Home
					</NavLink>
					<NavLink
						to="/about"
						className={({ isActive }) =>
							isActive
								? "text-blue-800"
								: "text-blue-400 hover:text-blue-800"
						}
					>
						About
					</NavLink>
					<NavLink
						to="/newsletter"
						className={({ isActive }) =>
							isActive
								? "text-blue-800"
								: "text-blue-400 hover:text-blue-800"
						}
					>
						Newsletter
					</NavLink>
					<NavLink
						to="/contact"
						className={({ isActive }) =>
							isActive
								? "text-blue-800"
								: "text-blue-400 hover:text-blue-800"
						}
					>
						Contact
					</NavLink>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
