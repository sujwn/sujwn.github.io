<script lang="ts">
	import type { Job } from "$lib/types";
	import { reveal } from "$lib/actions/reveal";

	let { jobs }: { jobs: Job[] } = $props();
</script>

<div class="timeline">
	{#each jobs as job (job.company + job.start)}
		<article class="job" use:reveal>
			<div class="job-inner">
				<div class="job-period">{job.start} — {job.end}</div>
				<h3>{job.title}</h3>
				<div class="company">
					{job.company} <span class="at">· {job.location}</span>
				</div>
				<ul>
					{#each job.highlights as highlight (highlight)}
						<li>{highlight}</li>
					{/each}
				</ul>
				{#if job.stack?.length}
					<div class="stack">
						{#each job.stack as tech (tech)}
							<span>{tech}</span>
						{/each}
					</div>
				{/if}
			</div>
		</article>
	{/each}
</div>

<style>
	.timeline {
		display: flex;
		flex-direction: column;
	}
	.job {
		position: relative;
		padding: 0 0 8px 30px;
		border-left: 1px solid var(--border);
	}
	.job:last-child {
		border-left-color: transparent;
	}
	.job::before {
		content: "";
		position: absolute;
		left: -5px;
		top: 6px;
		width: 9px;
		height: 9px;
		border-radius: 50%;
		background: var(--base);
		border: 2px solid var(--amber);
	}
	.job-inner {
		padding-bottom: 34px;
	}
	.job-period {
		font-family: var(--font-mono);
		font-size: 12px;
		color: var(--faint);
		margin-bottom: 6px;
	}
	.job h3 {
		font-family: var(--font-display);
		font-weight: 600;
		font-size: 19px;
		letter-spacing: -0.01em;
		margin: 0 0 2px;
	}
	.company {
		color: var(--amber);
		font-weight: 500;
	}
	.company .at {
		color: var(--faint);
	}
	.job ul {
		margin: 12px 0 0;
		padding: 0;
		list-style: none;
		display: grid;
		gap: 8px;
	}
	.job li {
		position: relative;
		padding-left: 20px;
		color: var(--muted);
		font-size: 14.5px;
	}
	.job li::before {
		content: "→";
		position: absolute;
		left: 0;
		top: 0;
		color: var(--amber-dim);
		font-family: var(--font-mono);
	}
	.stack {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
		margin-top: 14px;
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
