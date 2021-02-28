import React, { useEffect, useState } from "react";
import Link from "next/link";

import NavParent from "../header/nav";
import styles from "../../../styles/header.module.css";

export default function Header() {
	const [showNav, setShowNav] = useState(false);
	const [styleNav, setStyleNav] = useState(false);
	const [largeNav, setLargeNav] = useState(false);

	useEffect(() => {
		if (process.browser) {
			if (window.innerWidth > 1100) {
				setLargeNav(true);
			}
			return;
		}
	}, []);

	if (process.browser) {
		window.addEventListener("resize", () => {
			if (window.innerWidth > 1100) {
				setLargeNav(true);
			} else {
				setLargeNav(false);
			}
			return;
		});

		window.addEventListener("scroll", () => {
			if (window.pageYOffset > 10) {
				setStyleNav(true);
			} else {
				setStyleNav(false);
			}
		});
	}

	return (
		<div className={styles.fullwidth}>
			<div
				className={styleNav ? styles.containerfilled : styles.container}
			>
				<div className={styles.logo}>
					<Link href="/">
						<img src={"./logo-black-alpha.png"}></img>
					</Link>
				</div>

				{/* <div
					className={styles.overlaynavcontainer}
					onClick={() => {
						document.getElementById("overlaynav")!.style.width = "100%";
					}}
				>
					<div className={styles.bar1}>!</div>
					<div className={styles.bar2}>!</div>
					<div className={styles.bar3}>!</div>
				</div> */}
				<div
					className={styles.navcontainer}
					onClick={() => (largeNav ? false : setShowNav(!showNav))}
				>
					{largeNav ? (
						<div className={styles.largenav}>
							<NavParent />
						</div>
					) : showNav ? (
						<svg
							height="30"
							viewBox="0 0 329.26933 329"
							width="30"
							className={styles.svgcross}
						>
							<path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0" />
						</svg>
					) : (
						<svg
							className={styles.svg}
							viewBox="0 0 100 80"
							width="30"
							height="30"
						>
							<rect width="100" height="15" rx="10"></rect>
							<rect y="30" width="100" height="15" rx="10"></rect>
							<rect y="60" width="100" height="15" rx="10"></rect>
						</svg>
					)}
				</div>
				<div
					className={showNav ? styles.showNav : styles.hideNav}
					onClick={() => (largeNav ? false : setShowNav(!showNav))}
				>
					{showNav ? <NavParent /> : null}
				</div>
			</div>
		</div>
	);
}
