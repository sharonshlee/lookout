import React from "react";

import classes from "./page.module.css";
import referJob from "@/lib/actions";

export default function ReferJobPage() {
	return (
		<main>
			<div className={classes.wrapper}>
				<article className="post">
					<h2>Refer A Job</h2>
					<form action={referJob}>
						<div className={classes.item}>
							<label htmlFor="jobTitle">Title</label>
							<input
								type="text"
								id="jobTitle"
								name="jobTitle"
								required
							/>
						</div>
						<div className={classes.item}>
							<label htmlFor="company">Company</label>
							<input
								type="text"
								id="company"
								name="company"
								required
							/>
						</div>
						<div className={classes.item}>
							<label htmlFor="location">Location</label>
							<input
								type="text"
								id="location"
								name="location"
								placeholder="e.g. Remote | Hybrid | In person | Flexible"
								required
							/>
						</div>
						<div className={classes.item}>
							<label htmlFor="country">Country</label>
							<input
								type="text"
								id="country"
								name="country"
								required
							/>
						</div>
						<div className={classes.item}>
							<label htmlFor="salaryRange">Salary Range</label>
							<input
								type="text"
								id="salaryRange"
								name="salaryRange"
								placeholder="$80,000 - $100, 000"
								required
							/>
						</div>
						<div className={classes.item}>
							<label htmlFor="jobType">Job Type</label>
							<input
								type="text"
								id="jobType"
								name="jobType"
								placeholder="e.g. Full time | Part time | Contract | Volunteer"
								required
							/>
						</div>
						<hr />
						<div className={classes.item}>
							<label htmlFor="jobDescription">
								Job Description
							</label>
							<textarea
								id="jobDescription"
								name="jobDescription"
							/>
						</div>
						<div className={classes.item}>
							<label htmlFor="aboutCompany">About Company</label>
							<textarea id="aboutCompany" name="aboutCompany" />
						</div>
						<div className={classes.item}>
							<label htmlFor="aboutTeamRole">
								About Team Role
							</label>
							<textarea id="aboutTeamRole" name="aboutTeamRole" />
						</div>
						<div className={classes.item}>
							<label htmlFor="responsibilities">
								Responsibilities
							</label>
							<textarea
								id="responsibilities"
								name="responsibilities"
							/>
						</div>
						<div className={classes.item}>
							<label htmlFor="minimumRequirements">
								Minimum Requirements
							</label>
							<textarea
								id="minimumRequirements"
								name="minimumRequirements"
							/>
						</div>
						<div className={classes.item}>
							<label htmlFor="preferredRequirements">
								Prefered Requirements
							</label>
							<textarea
								id="preferredRequirements"
								name="preferredRequirements"
							/>
						</div>

						<button type="submit" className="button large">
							Refer Job
						</button>
					</form>
				</article>
			</div>
		</main>
	);
}
