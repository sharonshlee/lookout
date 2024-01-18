"use server";

import { redirect } from "next/navigation";

import { addJob } from "@/lib/jobs";

const referJob = async (formData) => {
	const newJob = {
		jobId: crypto.randomUUID(),
		jobTitle: formData.get("jobTitle"),
		company: formData.get("company"),
		location: formData.get("location"),
		country: formData.get("country"),
		salaryRange: formData.get("salaryRange"),
		jobType: formData.get("jobType"),
		jobContent: {
			jobDescription: formData.get("jobDescription"),
			aboutCompany: formData.get("aboutCompany"),
			aboutTeamRole: formData.get("aboutTeamRole"),
			responsibilities: formData.get("responsibilities"),
			minimumRequirements: formData.get("minimumRequirements"),
			preferredRequirements: formData.get("preferredRequirements"),
		},
	};
	console.log(newJob);
	await addJob(newJob);

	redirect("/jobs");
};

export default referJob;
