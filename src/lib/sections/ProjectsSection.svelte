<script lang="ts">
	import { onMount } from "svelte";
	import IconExternalLink from "$lib/icons/IconExternalLink.svelte";
	import IconUser from "$lib/icons/IconUser.svelte";
	import IconBriefcase from "$lib/icons/IconBriefcase.svelte";
	import IconBuilding from "$lib/icons/IconBuilding.svelte";
	import IconGitBranch from "$lib/icons/IconGitBranch.svelte";

	import type { Project } from "$lib/types/project";

	type Category = "personal" | "freelance" | "work" | "opensource";

	let projects: Project[] = [];
	let error: string | null = null;

	onMount(async () => {
		try {
			const res = await fetch("/data/projects.json");
			projects = await res.json();
		} catch (err) {
			console.error(err);
			error = "Failed to load projects data.";
		}
	});

	const categoryIcons: Record<Category, typeof IconUser> = {
		personal: IconUser,
		freelance: IconBriefcase,
		work: IconBuilding,
		opensource: IconGitBranch,
	};

	const categoryLabels: Record<Category, string> = {
		work: "Work",
		opensource: "Open Source",
		personal: "Personal",
		freelance: "Freelance",
	};

	/* Group projects by category (reactive) */
	$: projectsByCategory = {
		work: projects.filter((p) => p.category === "work"),
		opensource: projects.filter((p) => p.category === "opensource"),
		personal: projects.filter((p) => p.category === "personal"),
		freelance: projects.filter((p) => p.category === "freelance"),
	};

	/* Categories open by default */
	let openCategories = new Set<Category>([
		// "work",
		"opensource",
		// "personal",
		// "freelance",
	]);

	function toggleCategory(category: Category) {
		openCategories.has(category)
			? openCategories.delete(category)
			: openCategories.add(category);

		openCategories = new Set(openCategories);
	}

	/* Contribution label */
	const contributionLabel = {
		frontend: "FE",
		backend: "BE",
		fullstack: "FS",
	} as const;
</script>

<section class="section">
	<h2>Projects</h2>

	{#each Object.keys(projectsByCategory) as key}
		{#if projectsByCategory[key as Category].length}
			<div class="category">
				<div
					class="category-header"
					role="button"
					tabindex="0"
					aria-expanded={openCategories.has(key as Category)}
					on:click={() => toggleCategory(key as Category)}
					on:keydown={(e) =>
						e.key === "Enter" && toggleCategory(key as Category)}
				>
					<h3 class="category-title">
						<span class="category-icon" aria-hidden="true">
							<svelte:component this={categoryIcons[key as Category]} />
						</span>
						{categoryLabels[key as Category]}
					</h3>

					<span
						class="chevron {openCategories.has(key as Category) ? 'open' : ''}"
					>
						▾
					</span>
				</div>

				<div
					class="category-content {openCategories.has(key as Category)
						? 'open'
						: ''}"
				>
					<div class="category-inner">
						<div class="grid">
							{#each projectsByCategory[key as Category] as project}
								<div class="project-card">
									{#if project.link}
										<a
											class="project-link"
											href={project.link}
											target="_blank"
											rel="noreferrer"
											aria-label={`Open ${project.name}`}
										>
											<IconExternalLink />
										</a>
									{/if}

									<div class="project-main">
										<div class="project-header">
											<h3 class="project-name">{project.name}</h3>
										</div>

										<p class="project-meta">
											{project.year} ·
											<span
												class="project-contribution"
												data-type={project.contribution}
												title={project.contribution}
											>
												{contributionLabel[project.contribution]}
											</span>
										</p>

										{#if project.description}
											<p class="project-description">
												{project.description}
											</p>
										{/if}
									</div>

									<div class="project-badges">
										{#each project.stack as tech}
											<span class="badge">{tech}</span>
										{/each}
									</div>
								</div>
							{/each}
						</div>
					</div>
				</div>
			</div>
		{/if}
	{/each}
</section>

<style>
	/* =========================
   PROJECTS SECTION
   ========================= */

	.category {
		position: relative;
		padding-left: 16px;
		padding-bottom: 4px;
		margin-bottom: 8px;
	}

	.category::after {
		content: "";
		position: absolute;
		left: 16px;
		right: 0;
		bottom: 0;
		height: 1px;
		background: var(--border);
		opacity: 0.4;
		transition: opacity 0.25s ease;
	}

	/* Hide divider when open */
	.category:has(.category-header[aria-expanded="true"])::after {
		opacity: 0;
	}

	.category::before {
		content: "";
		position: absolute;
		left: 0;
		top: 8px;
		bottom: 8px;
		width: 2px;
		background: var(--border);
		border-radius: 2px;
	}

	.category:has(.category-content.open)::before {
		background: var(--accent);
	}

	.category-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 6px 8px;
		border-radius: 8px;
		cursor: pointer;
		transition: background-color 0.15s ease;
	}

	.category-header:hover {
		background: color-mix(in oklab, var(--surface), var(--border) 35%);
	}

	.category-header[aria-expanded="true"] {
		background: color-mix(in oklab, var(--surface), var(--border) 45%);
	}

	.category-header[aria-expanded="true"] .category-title {
		font-weight: 600;
	}

	.category-header:focus-visible {
		outline: 2px solid var(--accent);
		outline-offset: 2px;
	}

	.category-title {
		display: flex;
		align-items: center;
		gap: 8px;
		margin: 0;
		font-size: 18px;
		font-weight: 600;
	}

	.category-icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 18px;
		height: 18px;
		color: var(--text-muted);
		transition: color 0.2s ease;
	}

	.category-header:hover .category-icon,
	.category-header[aria-expanded="true"] .category-icon {
		color: var(--accent);
	}

	.chevron {
		font-size: 18px;
		opacity: 0.7;
		transition:
			transform 0.2s ease,
			opacity 0.2s ease;
	}

	.category-header:hover .chevron {
		opacity: 1;
	}

	.chevron.open {
		transform: rotate(180deg);
	}

	/* Collapsible container */
	.category-content {
		display: grid;
		grid-template-rows: 0fr;
		transition: grid-template-rows 0.3s ease;
	}

	.category-content.open {
		grid-template-rows: 1fr;
	}

	.category-inner {
		overflow: hidden;
		padding-top: 0;
	}

	.category-content.open .category-inner {
		padding-top: 8px;
	}

	/* =========================
   GRID
   ========================= */

	.grid {
		display: grid;
		gap: 16px;
	}

	@media (min-width: 640px) {
		.grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	/* =========================
   PROJECT CARD
   ========================= */

	.project-card {
		position: relative;
		display: flex;
		flex-direction: column;
		height: 100%;

		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: 16px;
		padding: 16px;

		transition:
			border-color 0.15s ease,
			box-shadow 0.15s ease,
			transform 0.15s ease;
	}

	.project-card:hover {
		border-color: color-mix(in oklab, var(--border), var(--text) 20%);
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);
		transform: translateY(-1px);
	}

	/* External link */
	.project-link {
		position: absolute;
		top: 12px;
		right: 12px;
		color: var(--text-muted);
	}

	.project-link:hover {
		color: var(--text);
	}

	/* =========================
   MAIN CONTENT (FLEX GROWS)
   ========================= */

	.project-main {
		flex: 1;
		display: flex;
		flex-direction: column;
	}

	/* Header */
	.project-name {
		margin: 0;
		font-size: 18px;
		font-weight: 600;
		line-height: 1.3;
	}

	/* Meta row */
	.project-meta {
		margin-top: 4px;
		font-size: 13px;
		color: var(--text-muted);
		display: flex;
		align-items: center;
		gap: 6px;
	}

	/* =========================
   CONTRIBUTION CHIP
   ========================= */

	.project-contribution {
		position: relative;
		display: inline-flex;
		align-items: center;
		justify-content: center;

		padding: 2px 6px;
		border-radius: 6px;

		font-size: 11px;
		font-weight: 600;
		letter-spacing: 0.04em;

		background: var(--surface-hover);
		cursor: default;
	}

	/* Color coding */
	.project-contribution[data-type="frontend"] {
		color: #3b82f6;
	}

	.project-contribution[data-type="backend"] {
		color: #16a34a;
	}

	.project-contribution[data-type="fullstack"] {
		color: #8b5cf6;
	}

	/* Tooltip */
	.project-contribution::after {
		content: attr(data-type);
		position: absolute;
		left: calc(100% + 8px);
		top: 50%;
		transform: translateY(-50%) translateX(-2px);

		padding: 4px 8px;
		border-radius: 6px;

		font-size: 11px;
		font-weight: 500;
		white-space: nowrap;

		background: var(--text);
		color: var(--bg);

		opacity: 0;
		pointer-events: none;
		z-index: 10;

		transition:
			opacity 0.15s ease,
			transform 0.15s ease;
	}

	.project-contribution:hover::after,
	.project-contribution:focus-visible::after {
		opacity: 1;
		transform: translateY(-50%) translateX(0);
	}

	/* =========================
   DESCRIPTION
   ========================= */

	.project-description {
		margin-top: 10px;
		font-size: 14px;
		line-height: 1.6;
		color: var(--text-muted);

		display: -webkit-box;
		line-clamp: 6;
		-webkit-line-clamp: 6;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	/* =========================
   STACK BADGES (BOTTOM)
   ========================= */

	.project-badges {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		margin-top: 12px;
	}

	.badge {
		font-size: 12px;
		padding: 4px 10px;
		border-radius: 999px;
		border: 1px solid var(--border);
		background: var(--bg);
		color: var(--text-muted);
	}
</style>
