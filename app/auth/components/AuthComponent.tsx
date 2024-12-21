"use client";
import { Button } from "@/components/ui/button";
import { KeyRound } from "lucide-react";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { supabaseBrowser } from "@/lib/supabase/browser";
import { useSearchParams } from "next/navigation";
export default function AuthComponent() {
	const params = useSearchParams();
	const next = params.get("next") || "";
	const handleLoginWithOAuth = (provider: "github" | "google") => {
		const supabase = supabaseBrowser();
		supabase.auth.signInWithOAuth({
			provider,
			options: { redirectTo: location.origin + "/auth/callback?next=" + next, },
		});
	};
	return (
		<div className="flex items-center justify-center w-full h-[70vh]">
			<div className=" w-96 rounded-md border p-5 space-y-5 relative bg-slate-900">
				<div className="flex items-center gap-2">
					<KeyRound />
					<h1 className="text-2xl font-bold">next + supabAse</h1>
				</div>
				<p className="text-sm text-gray-300"> register/signin todAy 👇 </p>
				<div className="flex flex-col gap-5">
					<Button className=" w-full flex items-center gap-2 " variant="outline" onClick={() => handleLoginWithOAuth("github")} >
						<FaGithub /> gitHub
					</Button>
					<Button className=" w-full flex items-center gap-2 " variant="outline" onClick={() => handleLoginWithOAuth("google")} >
						<FcGoogle /> google
					</Button>
				</div>
				<div className="glowBox -z-10"></div>
			</div>
		</div>
	);
}
