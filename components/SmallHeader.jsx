import React from "react";
import Link from "next/link";
import Image from "next/image";

import classes from "./SmallHeader.module.css";

export default function SmallHeader() {
	return (
		<section id={classes.intro}>
			<header id={classes.introHeader}>
				<h2>L</h2>
				<Link href="/" className={classes.logo}>
					<Image src="/images/logo.jpg" alt="logo" fill />
				</Link>
				<h2>okout</h2>
			</header>
			<header>
				<p>
					Bridging the job and you by{" "}
					<Link href="/referrer">me.</Link>
					<br />
				</p>
			</header>
		</section>
	);
}
