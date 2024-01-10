export default function BlogPost({ params }) {
	return (
		<main>
			<h1>Blog Post</h1>
			{params.slug}
		</main>
	);
}
