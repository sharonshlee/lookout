import React from "react";
import MainPostHeader from "./MainPostHeader";
import MainPostContent from "./MainPostContent";
import MainPostFooter from "./MainPostFooter";

export default function MainPost({ mainContent }) {
	const { company, jobContent } = mainContent;

	return (
		mainContent && (
			<div className="main">
				<div className="stickToTop">
					<article className="post">
						<MainPostHeader {...mainContent} />
						{jobContent && (
							<MainPostContent
								{...jobContent}
								company={company}
							/>
						)}
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
			</div>
		)
	);
}
