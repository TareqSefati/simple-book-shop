import { Link } from "react-router-dom";
import { ROUTES } from "../../routes";

export default function Navbar() {
	return (
		<header>
			<nav className="navbar bg-base-100">
				<div className="navbar-start">
					<div className="dropdown">
						<div
							tabIndex={0}
							role="button"
							className="btn btn-ghost lg:hidden"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</div>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
						>
							<li>
								<Link to={ROUTES.HOME}>Home</Link>
							</li>
							<li>
								<Link to={ROUTES.ABOUT}>About</Link>
							</li>
							<li>
								<Link to={ROUTES.BLOG}>Blog</Link>
							</li>
							<li>
								<Link to={ROUTES.FAQ}>FAQ</Link>
							</li>
						</ul>
					</div>
					<Link to={ROUTES.HOME}>
						<img
							className="size-8"
							src="/src/assets/logo.png"
							alt="logo"
						/>
					</Link>
					<a className="font-bold text-sm ml-1 md:text-xl md:font-extrabold">
						Book Shop
					</a>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1">
						<li>
							<Link to={ROUTES.HOME}>Home</Link>
						</li>
						<li>
							<Link to={ROUTES.ABOUT}>About</Link>
						</li>
						<li>
							<Link to={ROUTES.BLOG}>Blog</Link>
						</li>
						<li>
							<Link to={ROUTES.FAQ}>FAQ</Link>
						</li>
					</ul>
				</div>
				<div className="navbar-end space-x-2">
					<a className="btn">Buy Book</a>
					<a className="btn">Sign In</a>
				</div>
			</nav>
		</header>
	);
}
