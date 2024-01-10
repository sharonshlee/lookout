import React from "react";

export default function MainPostContent({
	jobDescription,
	aboutCompany,
	aboutTeamRole,
	responsibilities,
	minimumRequirements,
	preferredRequirements,
	additionalRequirements,
	company,
}) {
	return (
		<div className="post-content">
			<h2>Job Description</h2>
			{jobDescription}
			<br />
			<br />
			<h3>About {company}</h3>
			{aboutCompany}
			<br />
			<br />
			<h3>About The Team and Role</h3>
			{aboutTeamRole}
			<br />
			<br />
			<h3>Responsibilities</h3>
			{responsibilities}
			<br />
			<br />
			<h3>Minimum Requirements</h3>
			{minimumRequirements}
			<br />
			<br />
			<h3>Preferred Requirements</h3>
			{preferredRequirements}
			<br />
			<br />
			<h3>Additional Information</h3>
			{additionalRequirements}
		</div>
	);
}
