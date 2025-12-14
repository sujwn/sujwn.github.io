export interface Project {
	name: string;
	description?: string;
	year: string;
	contribution: "frontend" | "backend" | "fullstack";
	category: "personal" | "freelance" | "work" | "opensource";
	stack: string[];
	link?: string;
}

export const projects: Project[] = [
	{
		name: "Custom Node.js Framework",
		description:
			"A microservice-based digital banking platform for wealth management, supporting mutual funds, primary and secondary bonds, and e-tax biller services. Designed for scalability and security, it enables investment tracking, portfolio management, and informed financial decision-making.",
		year: "2024",
		contribution: "backend",
		category: "personal",
		stack: ["Node.js", "TypeScript", "Express"],
		link: "https://github.com/fwoomjs/fwoom",
	},
	{
		name: "Admin Dashboard",
		description:
			"An application that lets users browser restaurant chains, place food orders, and track their delivery in real-time. With an easy-to-use interface, users can explore menu options, create their orders, and get live updates on the status of their delivery, ensuring a seamless and satisfying food ordering experience.",
		year: "2023-present",
		contribution: "fullstack",
		category: "work",
		stack: ["React", "Node.js", "PostgreSQL"],
	},
	{
		name: "Microservices Platform",
		description: "A microservices architecture for a large-scale application.",
		year: "2023",
		contribution: "backend",
		category: "work",
		stack: ["Docker", "Kubernetes", "Go"],
	},
	{
		name: "Portfolio Website",
		description:
			"A personal portfolio website to showcase projects and skills.",
		year: "2022",
		contribution: "frontend",
		category: "personal",
		stack: ["Svelte", "CSS", "Netlify"],
	},
	{
		category: "opensource",
		name: "Blog Platform",
		description: "A blogging platform with rich text editing and SEO features.",
		year: "2020 - 2021",
		contribution: "fullstack",
		stack: ["Django", "Python", "SQLite", "Bootstrap"],
	}
];
