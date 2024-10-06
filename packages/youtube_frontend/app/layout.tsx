import type { Metadata } from "next";
import "./global.scss";

export const metadata: Metadata = {
	title: "Youtube",
	description: "Youtube clone"
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
