import React from "react";
import SinglePage from "@/components/SinglePage";

export default function JobDetailsPage({ params }) {
	return <SinglePage title={params.slug} />;
}
