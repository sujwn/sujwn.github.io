import type {
	CategorySettings,
	Project,
	ProjectCategoryView,
} from "$lib/types";

function fallbackTitle(id: string): string {
	return id.charAt(0).toUpperCase() + id.slice(1);
}

/**
 * Group a flat project list by category, preserving first-seen category order
 * and the projects' original order within each group. Titles and initial
 * collapsed state come from the injected settings, with sensible fallbacks.
 */
export function groupProjectsByCategory(
	projects: Project[],
	settings: Record<string, CategorySettings> = {},
): ProjectCategoryView[] {
	const groups = new Map<string, ProjectCategoryView>();
	for (const project of projects) {
		let group = groups.get(project.category);
		if (!group) {
			const setting = settings[project.category] ?? {};
			group = {
				id: project.category,
				title: setting.title ?? fallbackTitle(project.category),
				defaultCollapsed: setting.collapsed ?? false,
				projects: [],
			};
			groups.set(project.category, group);
		}
		group.projects.push(project);
	}
	return [...groups.values()];
}
