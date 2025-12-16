export const profile = {
	name: "Your Name",
	nickname: "almond",
	title: "Backend / Fullstack Developer",
	bio: `
Building calm, reliable software with clean architecture
and long-term maintainability in mind.
	`.trim(),
	email: "suhlani.juwan@gmail.com",
	avatar: "/almond.png",
	links: {
		github: "https://github.com/yourname",
		linkedin: "https://linkedin.com/in/yourname",
		instagram: "https://instagram.com/yourname",
		web: "https://yourwebsite.com",
	},
	status: "available",
} satisfies {
	name: string;
	nickname: string;
	title: string;
	bio: string;
	email?: string;
	avatar: string;
	links: Record<string, string>;
	status: "available" | "unavailable" | "busy";
};
