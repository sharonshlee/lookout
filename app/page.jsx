"use client";

import { useEffect, useState } from "react";

import Menu from "@/components/Menu";
import MainPost from "@/components/Main/MainPost";
import SideBar from "@/components/SideBar/SideBar";
import Banner from "@/components/Banner";
import Search from "@/components/Search";

import { referrersData } from "./data";

export default function Home() {
	const [mainContent, setMainContent] = useState(referrersData[0]);
	const [sideContent, setSideContent] = useState([]);
	const [isSearch, setIsSearch] = useState(false);

	console.log("Client Executing...");

	useEffect(() => {
		if (isSearch && sideContent.length === 0) {
			setMainContent({});
		}
	}, [isSearch, sideContent]);

	return (
		<>
			<Banner />
			<Search setSideContent={setSideContent} setIsSearch={setIsSearch} />

			<div id="wrapper">
				<Menu />
				<MainPost mainContent={mainContent} />
				<SideBar
					setMainContent={setMainContent}
					sideContent={sideContent}
					isSearch={isSearch}
				/>
			</div>

			<script src="assets/js/jquery.min.js" async></script>
			<script src="assets/js/browser.min.js" async></script>
			<script src="assets/js/breakpoints.min.js" async></script>
			<script src="assets/js/util.js" async></script>
			<script src="assets/js/main.js" async></script>
		</>
	);
}
