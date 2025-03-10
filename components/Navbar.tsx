"use client";
import React from "react";
import Profile from "./Profile";
import Link from "next/link";
import FontPicker from "./lifonts/lifp";

export default function Navbar() {
	return (
		<div>
			<div className="flex justify-between items-center h-20">
				<Link href="/"> <h1 className="text-xl font-bold">logo</h1> </Link>
				<Profile />
			</div>
			<div className="w-full items-center leading-none text-black" >
		  		<FontPicker />
			</div>
		</div>

	);
}
