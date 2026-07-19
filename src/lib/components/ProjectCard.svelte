<script lang="ts">
	import type { Project } from "$lib/types";

	let { project }: { project: Project } = $props();
</script>

<article class="card">
	<div class="card-head">
		{#if project.link}
			<a class="name" href={project.link} target="_blank" rel="noopener">
				<h4>{project.name}</h4>
				<svg class="ext" viewBox="0 0 24 24" aria-hidden="true">
					<path d="M14 4h6v6" />
					<path d="M20 4 10.5 13.5" />
					<path d="M20 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5" />
				</svg>
				<span class="sr-only">(opens external site)</span>
			</a>
		{:else}
			<h4>{project.name}</h4>
		{/if}
		<div class="card-meta">
			<span class="card-year">{project.year}</span>
			<span class="tag">{project.contribution}</span>
		</div>
	</div>
	<p>{project.description}</p>
	<div class="stack">
		{#each project.stack as tech (tech)}
			<span>{tech}</span>
		{/each}
	</div>
</article>

<style>
	.card {
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: var(--radius);
		padding: 20px;
		display: flex;
		flex-direction: column;
		transition:
			border-color 0.2s ease,
			transform 0.2s ease,
			background 0.2s ease;
	}
	.card:hover {
		border-color: rgba(242, 179, 61, 0.38);
		background: var(--surface-2);
		transform: translateY(-3px);
	}
	.card-head {
		margin-bottom: 10px;
	}
	.card-meta {
		display: flex;
		align-items: center;
		gap: 10px;
		margin-top: 6px;
	}
	h4 {
		font-family: var(--font-display);
		font-weight: 600;
		font-size: 17px;
		margin: 0;
		letter-spacing: -0.01em;
	}
	.name {
		display: inline-flex;
		align-items: center;
		gap: 7px;
		min-width: 0;
		transition: color 0.18s ease;
	}
	.name:hover {
		color: var(--amber);
	}
	.ext {
		width: 14px;
		height: 14px;
		flex: none;
		fill: none;
		stroke: var(--faint);
		stroke-width: 2;
		stroke-linecap: round;
		stroke-linejoin: round;
		transition: stroke 0.18s ease;
	}
	.name:hover .ext {
		stroke: var(--amber);
	}
	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0 0 0 0);
		white-space: nowrap;
		border: 0;
	}
	.card-year {
		font-family: var(--font-mono);
		font-size: 12px;
		color: var(--faint);
		white-space: nowrap;
	}
	.tag {
		font-family: var(--font-mono);
		font-size: 10.5px;
		letter-spacing: 0.03em;
		padding: 2px 8px;
		border-radius: 999px;
		color: var(--amber);
		border: 1px solid rgba(242, 179, 61, 0.3);
		background: rgba(242, 179, 61, 0.07);
		white-space: nowrap;
	}
	.card p {
		margin: 0 0 16px;
		color: var(--muted);
		font-size: 14px;
		flex: 1;
	}
	.stack {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
	}
	.stack span {
		font-family: var(--font-mono);
		font-size: 11.5px;
		padding: 3px 8px;
		border-radius: 6px;
		color: var(--muted);
		background: var(--base);
		border: 1px solid var(--border);
	}
	@media (max-width: 400px) {
		.stack span {
			font-size: 11px;
		}
	}
</style>
