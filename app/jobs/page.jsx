"use server";
import { getJobs } from "@/lib/jobs";

// import Menu from "@/components/Menu";
import SideBar from "@/components/SideBar/SideBar";
import Search from "@/components/Search";

export default async function Jobs() {
	const jobs = await getJobs();

	return (
		<>
			<Search />
			<div id="wrapper">
				{/* <Menu /> */}

				{jobs && (
					<SideBar
						// setMainContent={(a) => {
						// 	console.log(">>>>>>>A:", a);
						// }}
						// // sideContent={sideContent}
						// // isSearch={isSearch}
						jobs={jobs}
					/>
				)}
			</div>
		</>
	);
}
