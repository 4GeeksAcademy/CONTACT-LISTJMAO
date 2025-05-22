import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
				<i class="fa-solid fa-circle-user"></i>
					<span className= "navbar-brand mb-0 h1">Contacts Saved</span>
				</Link>
				<div className="ml-auto">
					<Link to="/add-contact">
						<button className="btn btn-primary">Add New Contact</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};