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
