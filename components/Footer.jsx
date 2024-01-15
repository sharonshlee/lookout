import React from "react";
import Link from "next/link";

import classes from "./Footer.module.css";

export default function Footer() {
	const EMAIL = "lookout@gmail.com";

	return (
		<div className={classes.footer}>
			<h3>About Lookout</h3>
			<Link href="/about">About Lookout</Link>
			<Link href="/">Future of Job Search: Our vision</Link>

			<h3>Contact Us</h3>
			{/* <ul className="actions">
				<li>
					<input type="text" placeholder="Email Address"></input>
				</li>
				<li>
					<Link href="#" className="button">
						Sign Up
					</Link>
				</li>
			</ul> */}

			<Link href={`mailto:${EMAIL}`}>Email Us</Link>
			<Link href="/post-job">Post A Job</Link>

			<h3>Careers</h3>
			<Link href="/">Lookout is hiring</Link>
			<Link href="/">Join our job alert</Link>

			<ul className={classes.icons}>
				<li>
					<Link
						href="#"
						className={`${classes.icon} ${classes.brands} fa-twitter`}
					>
						<span className={classes.label}>Twitter</span>
					</Link>
				</li>
				<li>
					<Link
						href="#"
						className={`${classes.icon} ${classes.brands} fa-facebook-f`}
					>
						<span className={classes.label}>Facebook</span>
					</Link>
				</li>
				<li>
					<Link
						href="#"
						className={`${classes.icon} ${classes.brands} fa-instagram`}
					>
						<span className={classes.label}>Instagram</span>
					</Link>
				</li>
				<li>
					<Link
						href="#"
						className={`${classes.icon} ${classes.solid} fa-rss`}
					>
						<span className={classes.label}>RSS</span>
					</Link>
				</li>
				<li>
					<Link
						href="#"
						className={`${classes.icon} ${classes.solid} fa-envelope`}
					>
						<span className={classes.label}>Email</span>
					</Link>
				</li>
			</ul>
			<p className={classes.copyright}>
				&copy;2023 Lookout, Inc. All rights reserved.
			</p>
		</div>
	);
}
