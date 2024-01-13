import React from "react";
import MainPostHeader from "./MainPostHeader";
import MainPostContent from "./MainPostContent";
import MainPostFooter from "./MainPostFooter";

export default function MainPost({ job }) {
	return (
		<div className="main">
			<article className="post ">
				<MainPostHeader {...job} />
				<MainPostContent {...job.jobContent} />
				<MainPostFooter />
			</article>
			{/* <ul className="actions pagination">
						<li>
							<a
								href=""
								className="disabled button large previous"
							>
								Previous Page
							</a>
						</li>
						<li>
							<a href="#" className="button large next">
								Next Page
							</a>
						</li>
					</ul> */}
		</div>
	);
}
