import React from "react";
import Link from "next/link";

export default function MainPostHeader({
	jobTitle,
	location,
	country,
	jobType,
	datePosted,
	referredBy,
	company,
	avatar,
}) {
	return (
		<header>
			<div className="title">
				<h2>
					<Link href="/">{jobTitle}</Link>
				</h2>
				<p>
					{country} . {location} . {jobType} . 20 days ago
				</p>
			</div>
			<div className="meta">
				<time className="published" dateTime="2015-11-01">
					{datePosted}
				</time>
				<Link href="#" className="author">
					<span className="name">
						{referredBy}
						<br />@{company}
					</span>
					<img src={`/images/${avatar}`} alt="" />
				</Link>
			</div>
		</header>
	);
}
