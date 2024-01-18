"use server";

import { redirect } from "next/navigation";

import { addJob } from "@/lib/jobs";

const referJob = async (formData) => {
	const newJob = {
		jobId: crypto.randomUUID(),
		jobTitle: encodeURI(formData.get("jobTitle")),
		company: encodeURI(formData.get("company")),
		location: encodeURI(formData.get("location")),
		country: encodeURI(formData.get("country")),
		salaryRange: encodeURI(formData.get("salaryRange")),
		jobType: encodeURI(formData.get("jobType")),
		jobContent: {
			jobDescription: encodeURI(formData.get("jobDescription")),
			aboutCompany: encodeURI(formData.get("aboutCompany")),
			aboutTeamRole: encodeURI(formData.get("aboutTeamRole")),
			responsibilities: encodeURI(formData.get("responsibilities")),
			minimumRequirements: encodeURI(formData.get("minimumRequirements")),
			preferredRequirements: encodeURI(
				formData.get("preferredRequirements")
			),
		},
	};
	console.log(newJob);
	await addJob(newJob);

	redirect("/jobs");
};

export default referJob;
