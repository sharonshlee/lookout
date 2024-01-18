"use client";

import { useFormStatus } from "react-dom";

export default function JobsFormSubmit() {
	const { pending } = useFormStatus();

	return (
		<button disabled={pending}>
			{pending ? "Submitting..." : "Refer Job"}
		</button>
	);
}
