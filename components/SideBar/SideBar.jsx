"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

import SideHeader from "../SmallHeader";
import SideMiniPost from "./SideMiniPost";
import { referrersData } from "../../app/data";

export default function SideBar({ setMainContent, sideContent, isSearch }) {
	const [referrers, setReferrers] = useState([]);

	useEffect(() => {
		if (isSearch) {
			setReferrers(sideContent);
		} else {
			setReferrers(referrersData);
		}
	}, [isSearch, sideContent]);

	return (
		<section id="sidebar">
			<section className="mini-posts stickToTop">
				{isSearch && sideContent.length === 0 && (
					<h3>No results found.</h3>
					// setMainContent({})
				)}

				{referrers.map((referrer) => {
					return (
						<SideMiniPost
							key={referrer.jobId}
							id={referrer.jobId}
							referrer={referrer}
							setMainContent={setMainContent}
						/>
					);
				})}
			</section>

			{/* <section>
				<ul className="posts">
					<li>
						<article>
							<header>
								<h3>
									<a href="single.html">
										Lorem ipsum fermentum ut nisl vitae
									</a>
								</h3>
								<time
									className="published"
									dateTime="2015-10-20"
								>
									October 20, 2015
								</time>
							</header>
							<a href="single.html" className="image">
								<img src="/images/pic08.jpg" alt="" />
							</a>
						</article>
					</li>
					<li>
						<article>
							<header>
								<h3>
									<a href="single.html">
										Convallis maximus nisl mattis nunc id
										lorem
									</a>
								</h3>
								<time
									className="published"
									dateTime="2015-10-15"
								>
									October 15, 2015
								</time>
							</header>
							<a href="single.html" className="image">
								<img src="/images/pic09.jpg" alt="" />
							</a>
						</article>
					</li>
					<li>
						<article>
							<header>
								<h3>
									<a href="single.html">
										Euismod amet placerat vivamus porttitor
									</a>
								</h3>
								<time
									className="published"
									dateTime="2015-10-10"
								>
									October 10, 2015
								</time>
							</header>
							<a href="single.html" className="image">
								<img src="/images/pic10.jpg" alt="" />
							</a>
						</article>
					</li>
					<li>
						<article>
							<header>
								<h3>
									<a href="single.html">
										Magna enim accumsan tortor cursus
										ultricies
									</a>
								</h3>
								<time
									className="published"
									dateTime="2015-10-08"
								>
									October 8, 2015
								</time>
							</header>
							<a href="single.html" className="image">
								<img src="/images/pic11.jpg" alt="" />
							</a>
						</article>
					</li>
					<li>
						<article>
							<header>
								<h3>
									<a href="single.html">
										Congue ullam corper lorem ipsum dolor
									</a>
								</h3>
								<time
									className="published"
									dateTime="2015-10-06"
								>
									October 7, 2015
								</time>
							</header>
							<a href="single.html" className="image">
								<img src="/images/pic12.jpg" alt="" />
							</a>
						</article>
					</li>
				</ul>
			</section> */}
		</section>
	);
}
