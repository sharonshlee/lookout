import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import classes from "./Banner.module.css";

import Link from "next/link";

export default function Banner() {
	return (
		<section id={classes.banner}>
			<h2>
				<Link href="/">Lookout</Link>
			</h2>
			<p>Connecting us for a better job</p>

			<ul className="actions special">
				<li>
					<Link href="#" className="button primary">
						Sign Up
					</Link>
				</li>
				<li>
					<Link href="/about" className="button">
						Learn More
					</Link>
				</li>
			</ul>
		</section>
	);
}
