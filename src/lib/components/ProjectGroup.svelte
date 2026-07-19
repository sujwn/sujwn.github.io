<script lang="ts">
	import type { ProjectCategoryView } from "$lib/types";
	import { reveal } from "$lib/actions/reveal";
	import ProjectCard from "./ProjectCard.svelte";

	let { category }: { category: ProjectCategoryView } = $props();
	// intentional: capture the initial value only; toggling is local state after that
	// svelte-ignore state_referenced_locally
	let collapsed = $state(category.defaultCollapsed);

	const count = $derived(String(category.projects.length).padStart(2, "0"));
</script>

<div class="cat" class:collapsed use:reveal>
	<button
		class="cat-head"
		aria-expanded={!collapsed}
		onclick={() => (collapsed = !collapsed)}
	>
		<span class="cat-title">{category.title}</span>
		<span class="count">{count}</span>
		<svg class="chevron" viewBox="0 0 24 24" aria-hidden="true"
			><path d="M6 9l6 6 6-6" /></svg
		>
	</button>
	<div class="cat-body">
		<div class="grid">
			{#each category.projects as project (project.name)}
				<ProjectCard {project} />
			{/each}
		</div>
	</div>
</div>

<style>
	.cat {
		margin-bottom: 44px;
	}
	.cat:last-child {
		margin-bottom: 0;
	}
	.cat-head {
		display: flex;
		align-items: center;
		gap: 12px;
		width: 100%;
		font-family: var(--font-mono);
		font-size: 12px;
		color: var(--faint);
		margin: 0;
		padding: 0 0 12px;
		border: none;
		border-bottom: 1px solid var(--border);
		background: none;
		cursor: pointer;
		text-align: left;
		transition:
			color 0.18s ease,
			border-color 0.18s ease;
	}
	.cat-head:hover {
		color: var(--muted);
		border-color: rgba(242, 179, 61, 0.35);
	}
	.cat-title {
		font-family: var(--font-display);
		font-weight: 600;
		font-size: 15px;
		color: var(--text);
		letter-spacing: 0.01em;
	}
	.count {
		margin-left: auto;
	}
	.chevron {
		width: 16px;
		height: 16px;
		flex: none;
		fill: none;
		stroke: var(--muted);
		stroke-width: 2;
		stroke-linecap: round;
		stroke-linejoin: round;
		transition: transform 0.28s ease;
	}
	.cat.collapsed .chevron {
		transform: rotate(-90deg);
	}

	.cat-body {
		max-height: 1600px;
		opacity: 1;
		overflow: hidden;
		padding-top: 18px;
		transition:
			max-height 0.38s ease,
			opacity 0.3s ease,
			padding-top 0.38s ease;
	}
	.cat.collapsed .cat-body {
		max-height: 0;
		opacity: 0;
		padding-top: 0;
	}

	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 14px;
	}

	@media (max-width: 620px) {
		.grid {
			grid-template-columns: 1fr;
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.cat-body,
		.chevron {
			transition: none;
		}
	}
</style>
