/** Domain types — the contracts components depend on (never on concrete data). */

export type HttpMethod = "GET" | "POST";

export type SocialIconName = "github" | "linkedin" | "x" | "email";

export interface SocialLink {
	label: string;
	href: string;
	icon: SocialIconName;
}

export interface Profile {
	name: string;
	initials: string;
	eyebrow: string;
	tagline: string;
	description: string;
	/** Filename inside /static; falls back to initials monogram if it fails to load. */
	photo: string;
	socials: SocialLink[];
}

export interface NavItem {
	method: HttpMethod;
	path: string;
	/** id of the section the item scrolls to */
	target: string;
}

export interface Job {
	title: string;
	company: string;
	location: string;
	/** e.g. "Mar 2022" */
	start: string;
	/** e.g. "Present" */
	end: string;
	highlights: string[];
	/** optional per-role tech stack, rendered as chips */
	stack?: string[];
}

export interface Project {
	name: string;
	description: string;
	/** free-form: "2024", "2023–2024", "2025–present" */
	year: string;
	/** rendered as the tag pill, e.g. "backend" | "fullstack" */
	contribution: string;
	/** grouping key, e.g. "opensource" | "work" */
	category: string;
	stack: string[];
	/** optional external URL; shows a link icon after the project name */
	link?: string;
}

/** A category grouping derived from the flat project list. */
export interface ProjectCategoryView {
	id: string;
	title: string;
	/** whether the group starts collapsed */
	defaultCollapsed: boolean;
	projects: Project[];
}

/** Optional per-category presentation settings, keyed by category id. */
export interface CategorySettings {
	title?: string;
	/** start collapsed on load (default: open) */
	collapsed?: boolean;
}

export interface Contact {
	quoteLead: string;
	quoteAccent: string;
	sub: string;
	email: string;
	/** Button text shown instead of the raw address */
	ctaLabel: string;
	footerNote: string;
}
