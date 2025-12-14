export interface Project {
	name: string;
	description?: string;
	year: string;
	contribution: "frontend" | "backend" | "fullstack";
	category: "personal" | "freelance" | "work" | "opensource";
	stack: string[];
	link?: string;
}
