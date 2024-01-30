import React from "react";
import { notFound } from "next/navigation";

import MainPost from "@/components/Main/MainPost";
import { getJobById } from "@/lib/jobs";

export async function generateMetaData({ params }) {
	const jobId = params.jobSlug;
	const job = await getJobById(jobId);

	if (!job) {
		notFound();
	}

	return {
		title: job.jobTitle,
		description: job.jobContent.jobDescription,
	};
}

export default async function JobDetailsPage({ params }) {
	const jobId = params.jobSlug;
	const job = await getJobById(jobId);

	if (!job) {
		notFound();
	}

	return <MainPost job={job} />;
}
