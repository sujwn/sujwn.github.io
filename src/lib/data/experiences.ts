export interface Experience {
	id: number;
	role: string;
	company: string;
	from: string;
	to: string;
	description: string;
	achievements?: string[];
	stack?: string[];
}

export const experiences: Experience[] = [
	{
		id: 1,
		role: "Senior Backend Engineer",
		company: "Awesome Company",
		from: "Jan 2022",
		to: "Present",
		description:
			"Led the design and development of scalable backend systems supporting multiple business domains.",
		achievements: [
			"Designed and maintained high-traffic backend services.",
			"Led API architecture and data modeling decisions.",
			"Improved system reliability and performance.",
		],
		stack: ["Node.js", "TypeScript", "PostgreSQL"],
	},
	{
		id: 2,
		role: "Backend Engineer",
		company: "Another Company",
		from: "Jun 2020",
		to: "Dec 2021",
		description:
			"Worked closely with product and frontend teams to deliver reliable backend features.",
		achievements: [
			"Built REST and GraphQL APIs.",
			"Implemented authentication and authorization flows.",
		],
		stack: ["Node.js", "MongoDB", "GraphQL"],
	},
];
