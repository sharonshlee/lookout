import Link from "next/link";
import NavLink from "./NavLink";

import classes from "./Header.module.css";

export default function Header() {
	return (
		<header id={classes.header}>
			<h1>
				<Link href="/">Lookout</Link>
			</h1>
			<nav className={classes.links}>
				<ul>
					<li>
						<NavLink href="/jobs">Find A Job</NavLink>
					</li>
					<li>
						<NavLink href="/jobs/referJob">Refer A Job</NavLink>
					</li>
					<li>
						<NavLink href="/referrer">Referrer</NavLink>
					</li>
					<li>
						<NavLink href="/about">About Us</NavLink>
					</li>
				</ul>
			</nav>
			<nav className={classes.main}>
				<ul>
					<li className={classes.search}>
						<Link className="fa-search" href="#search">
							Search
						</Link>
						<form id={classes.search} method="get" action="#">
							<input
								type="text"
								name="query"
								placeholder="Search"
							/>
						</form>
					</li>
					<li className="menu">
						<Link className="fa-bars" href="#menu">
							Menu
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
