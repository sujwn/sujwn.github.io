import type { CategorySettings, Project } from "$lib/types";

export const categorySettings: Record<string, CategorySettings> = {
	opensource: { title: "Open Source", collapsed: false },
	work: { title: "Work", collapsed: true },
	personal: { title: "Personal", collapsed: false },
};

export const projects: Project[] = [
	{
		name: "envus",
		description:
			"A lightweight environment config library that uses explicit schemas, strong typing, and nested structures to ensure safe and predictable runtime configuration.",
		year: "2025",
		contribution: "backend",
		category: "opensource",
		stack: ["Node.js"],
		link: "https://github.com/sujwn/raw-query-builder",
	},
	{
		name: "raw-query-strings",
		description: "A simple module for generating raw query strings.",
		year: "2023",
		contribution: "backend",
		category: "opensource",
		stack: ["Node.js"],
		link: "https://github.com/sujwn/raw-query-builder",
	},
	{
		name: "Digital Banking App (Wealth)",
		description:
			"A microservice-based digital banking platform for wealth management, supporting mutual funds, primary and secondary bonds, biller services, etc. Designed for scalability and security, it enables investment tracking, portfolio management, and informed financial decision-making.",
		year: "2025–present",
		contribution: "backend",
		category: "work",
		stack: [
			"Node.js",
			"Express",
			"MongoDB",
			"GraphQL",
			"REST",
			"Kafka",
			"Redis",
			"OpenShift",
			"Jenkins",
		],
	},
	{
		name: "Legal & Precedent Management System",
		description:
			"A platform designed to efficiently organize, manage, and access national legal laws, precedents, and related legal content. It enables users to store, update, and search legal information, making it easier to maintain an up-to-date, comprehensive legal repository for reference and decision-making.",
		year: "2023–2024",
		contribution: "backend",
		category: "work",
		stack: [
			"Node.js",
			"Express",
			"React",
			"AWS",
			"PostgreSQL",
			"Redis",
			"WebSocket",
		],
	},
	{
		name: "MyBuckit",
		description:
			"A social platform for sharing posts, keeping personal journals, and organizing group events, designed to support both personal reflection and social interaction.",
		year: "2024",
		contribution: "backend",
		category: "work",
		stack: [
			"Node.js",
			"Express",
			"React",
			"AWS",
			"PostgreSQL",
			"Redis",
			"WebSocket",
			"GitHub Actions",
		],
		link: "https://my-buckit.co.kr",
	},
	{
		name: "SickGPT",
		description:
			"An AI-powered health consultation app that provides personalized insights, symptom analysis, and virtual consultations through healthcare specialist AI modes to support informed health decisions.",
		year: "2024",
		contribution: "backend",
		category: "work",
		stack: [
			"Node.js",
			"Express",
			"React",
			"Azure",
			"MongoDB",
			"OpenAI",
			"Google OCR",
			"WebSocket",
			"GitHub Actions",
		],
		link: "https://sickgpt.io",
	},
	{
		name: "Chain Restaurant Delivery App",
		description:
			"An application that lets users browse restaurant chains, place food orders, and track their delivery in real time. With an easy-to-use interface, users can explore menu options, create their orders, and get live updates on the status of their delivery, ensuring a seamless and satisfying food ordering experience.",
		year: "2023",
		contribution: "fullstack",
		category: "work",
		stack: [
			"Node.js",
			"Express",
			"React",
			"AWS",
			"PostgreSQL",
			"WebSocket",
			"Maps API",
		],
	},
	{
		name: "Payroll Management System",
		description:
			"A microservice-based payroll platform that automates salary, tax, benefit, and deduction processing with a scalable and secure architecture.",
		year: "2020–2022",
		contribution: "backend",
		category: "work",
		stack: [
			"Laravel",
			"Java",
			"Go",
			"AWS",
			"MySQL",
			"Kafka",
			"Docker",
			"Jenkins",
		],
	},
	{
		name: "E-Governance Management System",
		description:
			"A corporate governance platform that automates policy management, compliance tracking, and internal decision-making with a focus on transparency and accountability.",
		year: "2019–2020",
		contribution: "fullstack",
		category: "work",
		stack: ["Java", "JSP", "PostgreSQL", "WebSocket"],
	},
	{
		name: "Toll Road Management System",
		description:
			"A platform for managing toll operations, real-time traffic monitoring, incident reporting, and operational reporting to ensure smooth toll road operations.",
		year: "2019",
		contribution: "fullstack",
		category: "work",
		stack: ["PHP", "Symfony", "PostgreSQL", "WebSocket", "Maps API"],
	},
	{
		name: "sujwn.github.io",
		description:
			"You are looking at it right now! This is my personal portfolio website built with SvelteKit.",
		year: "2025",
		contribution: "fullstack",
		category: "personal",
		stack: ["SvelteKit", "TypeScript"],
	},
];
