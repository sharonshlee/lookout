import React from "react";
import SinglePage from "@/components/SinglePage";

export default function page({ params }) {
	return <SinglePage title={params.slug} image="/images/logo.jpg" />;
}
