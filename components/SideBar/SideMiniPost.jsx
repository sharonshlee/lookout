import React from "react";
import Link from "next/link";

export default function SideMiniPost({ id, job }) {
	const {
		jobTitle,
		location,
		salaryRange,
		jobType,
		country,
		company,
		avatar,
		referredBy,
	} = job;

	// const handleSetMainContent = () => {
	// 	setMainContent(referrer);
	// };

	return (
		<article
			className="mini-post"
			key={id}
			// onClick={() => {
			// 	handleSetMainContent();
			// }}
		>
			<header>
				<h2>
					<Link href="#">{jobTitle}</Link>
				</h2>
				<p>{company}</p>
				<p>
					{country} . {location} - {jobType}
				</p>
				{/* <p>{salaryRange}</p> */}

				<p>
					<Link href="#" className="author">
						<img
							src={`/images/${avatar ? avatar : "avatar.jpg"}`}
							alt="Sharon"
							title={`Sharon@${company}`}
						/>
					</Link>
					2 days ago | by {referredBy}
				</p>

				{/* <Link href="#" className="author">
					<img
						src={`/images/${avatar}`}
						alt="Sharon"
						title={`Sharon@${company}`}
					/>
				</Link> */}
			</header>
		</article>
	);
}
