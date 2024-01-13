"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

import SideHeader from "../SmallHeader";
import SideMiniPost from "./SideMiniPost";
// import { referrersData } from "../../app/data";
import MainPost from "@/components/Main/MainPost";

export default function SideBar({
	// setMainContent,
	// sideContent,
	// isSearch,
	jobs,
}) {
	// const [referrers, setReferrers] = useState([]);

	// useEffect(() => {
	// 	if (isSearch) {
	// 		setReferrers(sideContent);
	// 	} else {
	// 		setReferrers(jobs);
	// 	}
	// }, [isSearch, sideContent, jobs]);

	return (
		<>
			<MainPost job={jobs[0]} />
			<section id="sidebar">
				<section className="mini-posts">
					{/* {isSearch && sideContent.length === 0 && (
						<h3>No results found.</h3>
						// setMainContent({})
					)} */}

					{jobs.map((job) => {
						return (
							<SideMiniPost
								key={job.jobId}
								id={job.jobId}
								job={job}
								// setMainContent={setMainContent}
							/>
						);
					})}
				</section>
			</section>
		</>
	);
}
