"use client";

import Header from "./components/layout/header/Header";
import Sidebar from "./components/layout/sidebar/Sidebar";
import LeftSide from "./components/layout/left-side/LeftSide";
import RightSide from "./components/layout/right-side/RightSide";
import AuthProvider from "./providers/AuthProvider";
import cn from "classnames";
import { useAuth } from "./hooks/useAuth";

export default function Home() {
	const { user } = useAuth();

	return (
		<AuthProvider>
			<main id="youtube_main">
				<Sidebar />
				<section
					className={cn("content", {
						"content-full": !user
					})}
				>
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
