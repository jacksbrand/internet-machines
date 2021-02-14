import React, { ReactNode } from "react";
import Head from "next/head";

type Props = {
	children?: ReactNode;
	title?: string;
};

export default function Layout({
	children,
	title = "Internet Machines",
}: Props): JSX.Element {
	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
				<meta
					name="description"
					content="Modern Web and Systems Development"
				/>
			</Head>
			<header></header>
			<main>{children}</main>
			<footer></footer>
		</div>
	);
}
