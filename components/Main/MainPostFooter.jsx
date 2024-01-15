import React from "react";
import Link from "next/link";

export default function MainPostFooter() {
	return (
		<footer>
			<ul className="actions">
				<li>
					<Link href="/apply-job" className="button large">
						Apply
					</Link>
				</li>
			</ul>
			<ul className="stats">
				<li>
					<Link href="#">Software</Link>
				</li>
				<li>
					<Link href="#" className="icon solid fa-heart">
						28
					</Link>
				</li>
				<li>
					<Link href="#" className="icon solid fa-comment">
						128
					</Link>
				</li>
			</ul>
		</footer>
	);
}
