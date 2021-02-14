import Link from "next/link";
import { useEffect, useState } from "react";

import styles from "../../../../styles/nav.module.css";

interface NavItemsArray {
	navText: string;
	url: string;
}

export default function NavParent() {
	const [largeNav, setLargeNav] = useState(false);

	const navItemsArray: NavItemsArray[] = [
		{ navText: "Who we are", url: "/who-we-are" },
		{ navText: "What we do", url: "/what-we-do" },
		{ navText: "Contact us", url: "/contact" },
		{ navText: "Quote", url: "/quote" },
		{ navText: "Log in", url: "/login" },
		{ navText: "Payments", url: "/payments" },
	];

	useEffect(() => {
		if (process.browser) {
			if (window.innerWidth > 1100) {
				setLargeNav(true);
			}
		}
	}, []);

	return (
		<nav
			className={largeNav ? styles.containerlarge : styles.container}
			id={"overlaynav"}
		>
			{/* <div
				className={styles.closenav}
				onClick={() =>
					(document.getElementById("overlaynav")!.style.width = "0%")
				}
			>
				X
			</div> */}
			<ul className={largeNav ? styles.ullarge : styles.ul}>
				{navItemsArray.map(
					(navObject: NavItemsArray, i: number): JSX.Element => {
						if (i < navItemsArray.length - 1) {
							return (
								<li
									key={i}
									className={
										largeNav
											? i === 0
												? styles.lifirstlarge
												: styles.lilarge
											: i === 0
											? styles.lifirst
											: styles.li
									}
									onClick={() => {
										// if (process.browser) {
										// 	if (window.innerWidth <= 950) {
										// 		document.getElementById("overlaynav")!.style.width =
										// 			"0%";
										// 	}
										// }
									}}
								>
									<Link href={`${navObject.url}`}>
										{navObject.navText}
									</Link>
								</li>
							);
						} else {
							return (
								<li
									key={i}
									className={
										largeNav ? styles.lilarge : styles.li
									}
									onClick={() => {
										if (process.browser) {
											if (window.innerWidth <= 950) {
												document.getElementById(
													"overlaynav"
												)!.style.width = "0%";
											}
										}
									}}
								>
									<Link href={`${navObject.url}`}>
										{navObject.navText}
									</Link>
								</li>
							);
						}
					}
				)}
			</ul>
		</nav>
	);
}
