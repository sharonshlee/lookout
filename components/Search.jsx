import React from "react";
import Link from "next/link";

import SmallHeader from "./SmallHeader";

import classes from "./Search.module.css";

export default function Search() {
	// export default function Search({ setSideContent, setIsSearch }) {
	// const [titleReferrerCompanyInput, setTitleReferrerCompanyInput] =
	// 	useState("");
	// const [typeCountryInput, setTypeCountryInput] = useState("");

	// const handleSetSideContent = (
	// 	titleReferrerCompanyValue,
	// 	typeCountryValue
	// ) => {
	// 	setIsSearch(!!titleReferrerCompanyValue || !!typeCountryValue);

	// 	const searchResult = referrersData.filter((data) => {
	// 		const result1 =
	// 			!titleReferrerCompanyValue ||
	// 			data?.jobTitle
	// 				.toLowerCase()
	// 				.includes(titleReferrerCompanyValue?.toLowerCase()) ||
	// 			data?.company
	// 				.toLowerCase()
	// 				.includes(titleReferrerCompanyValue?.toLowerCase()) ||
	// 			data?.referredBy
	// 				.toLowerCase()
	// 				.includes(titleReferrerCompanyValue?.toLowerCase());

	// 		const result2 =
	// 			!typeCountryValue ||
	// 			(data.country &&
	// 				data?.country
	// 					.toLowerCase()
	// 					.includes(typeCountryValue?.toLowerCase())) ||
	// 			data?.location
	// 				.toLowerCase()
	// 				.includes(typeCountryValue?.toLowerCase());

	// 		return result1 && result2;
	// 	});

	// 	setSideContent(searchResult);
	// };

	return (
		<div id={classes.headerAndSearch}>
			<div id={classes.searchGroup}>
				<div id={classes.searchBar}>
					<input
						id="jobTitleReferrerCompany"
						type="text"
						name="query"
						placeholder="Search: job title | referrer | company"
						// onChange={(e) => {
						// 	setTitleReferrerCompanyInput(e.target.value);
						// }}
					/>
					<input
						id="jobTypeCountryInput"
						type="text"
						name="query"
						placeholder="(remote . hybrid . on-site) | country"
						// onChange={(e) => {
						// 	setTypeCountryInput(e.target.value);
						// }}
					/>
					<Link
						href="#"
						className="button primary"
						// onClick={() => {
						// 	handleSetSideContent(
						// 		titleReferrerCompanyInput,
						// 		typeCountryInput
						// 	);
						// }}
					>
						Search
					</Link>
				</div>

				<div className={classes.filter}>
					<Link
						href="#"
						id={classes.filter}
						className="button primary"
					>
						Date Posted
					</Link>
					<Link
						href="#"
						id={classes.filter}
						className="button primary"
					>
						Experience Level
					</Link>
					<Link
						href="#"
						id={classes.filter}
						className="button primary"
					>
						Salary
					</Link>
					<Link
						href="#"
						id={classes.filter}
						className="button primary"
					>
						Company
					</Link>
					<Link
						href="#"
						id={classes.filter}
						className="button primary"
					>
						Location
					</Link>
				</div>
			</div>
			<SmallHeader />
		</div>
	);
}
