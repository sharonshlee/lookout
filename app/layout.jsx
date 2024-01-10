import "./assets/css/main.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
	title: "Lookout",
	description: "Your Next Job is Here!",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<header>
					<Header />
				</header>
				<main>{children}</main>
				<footer>
					<Footer />
				</footer>
			</body>
		</html>
	);
}
