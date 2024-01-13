// "use client";

// import { useEffect, useState } from "react";

import Banner from "@/components/Banner";
import Jobs from "./jobs/page";

export default function Home() {
	// const [mainContent, setMainContent] = useState();
	// const [sideContent, setSideContent] = useState([]);
	// const [isSearch, setIsSearch] = useState(false);
	// const [jobs, setJobs] = useState();

	// console.log("Client Executing...");

	// useEffect(() => {
	// 	if (isSearch && sideContent.length === 0) {
	// 		setMainContent({});
	// 	}
	// }, [isSearch, sideContent]);

	return (
		<>
			<Banner />
			{/* <Search setSideContent={setSideContent} setIsSearch={setIsSearch} /> */}
			<Jobs />
		</>
	);
}
