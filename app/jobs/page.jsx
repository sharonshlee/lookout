// "use server";

import { getJobs } from "@/lib/jobs";

// import Menu from "@/components/Menu";
import SideBar from "@/components/SideBar/SideBar";
import Error from "./error";

export default async function Jobs() {
	const jobs = await getJobs();

	return (
		<>
			{!jobs && <Error />}
			{jobs && (
				<div id="wrapper">
					{/* <Menu /> */}

					<SideBar
						// setMainContent={(a) => {
						// 	console.log(">>>>>>>A:", a);
						// }}
						// // sideContent={sideContent}
						// // isSearch={isSearch}
						jobs={jobs}
					/>
				</div>
			)}
		</>
	);
}
