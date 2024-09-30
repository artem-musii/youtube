"use client";

import Header from "./components/layout/header/Header";
import Sidebar from "./components/layout/sidebar/Sidebar";
import LeftSide from "./components/layout/left-side/LeftSide";
import RightSide from "./components/layout/right-side/RightSide";
import AuthProvider from "./providers/AuthProvider";

export default function Home() {
	return (
		<AuthProvider>
			<main id="youtube_main">
				<Sidebar />
				<section className="content">
					<Header />
					<div id="wrapper_content">
						<LeftSide />

						<RightSide />
					</div>
				</section>
			</main>
		</AuthProvider>
	);
}
