<script lang="ts">
	import { onMount } from "svelte";

	import type { Experience } from "$lib/types/experience";

	let experiences: Experience[] = [];
	let error: string | null = null;

	onMount(async () => {
		try {
			const res = await fetch("/data/experiences.json");
			experiences = await res.json();
		} catch (err) {
			console.error(err);
			error = "Failed to load experiences data.";
		}
	});

	let openId: number | null = null;

	function toggle(id: number) {
		openId = openId === id ? null : id;
	}
</script>

<section class="section">
	<h2>Work Experience</h2>

	<div class="experience-list">
		{#each experiences as exp}
			<div
				class="experience-item"
				role="button"
				tabindex="0"
				aria-expanded={openId === exp.id}
				on:click={() => toggle(exp.id)}
				on:keydown={(e) => e.key === "Enter" && toggle(exp.id)}
			>
				<div class="experience-header">
					<div>
						<h3 class="role">{exp.role}</h3>
						<div class="meta">
							<span class="company">{exp.company}</span>
							<span class="dot">·</span>
							<span class="period">{exp.from} – {exp.to}</span>
						</div>
					</div>

					<span class="chevron {openId === exp.id ? 'open' : ''}"> ▾ </span>
				</div>

				<div class="details {openId === exp.id ? 'open' : ''}">
					<div class="details-inner">
						<p class="description">
							{exp.description}
						</p>

						{#if exp.achievements}
							<ul class="achievements">
								{#each exp.achievements as item}
									<li>{item}</li>
								{/each}
							</ul>
						{/if}

						{#if exp.stack}
							<div class="badges">
								{#each exp.stack as tech}
									<span class="badge">{tech}</span>
								{/each}
							</div>
						{/if}
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	/* =========================
	   EXPERIENCE SECTION
	   ========================= */

	.experience-list {
		display: flex;
		flex-direction: column;
		gap: 12px; /* reduced gap */
	}

	.experience-item {
		position: relative;
		padding: 16px 16px 16px 20px;
		border-left: 3px solid var(--border);
		border-radius: 8px;
		cursor: pointer;
		transition: background-color 0.2s ease;
	}

	.experience-item[aria-expanded="true"] {
		border-color: var(--accent-soft);
		background: var(--surface-hover);
	}

	/* .experience-item::before {
		content: "";
		position: absolute;
		left: 0;
		top: 8px;
		bottom: 8px;
		width: 2px;
		background: var(--border);
		border-radius: 2px;
	} */

	.experience-item:hover {
		background: var(--surface-hover);
	}

	.experience-item:focus-visible {
		outline: 2px solid var(--focus-ring);
		outline-offset: 2px;
	}

	/* Header */
	.experience-header {
		display: flex;
		align-items: flex-start;
		gap: 12px;
	}

	.role {
		margin: 0;
		font-size: 18px;
		font-weight: 600;
		line-height: 1.3;
	}

	.meta {
		margin-top: 2px;
		font-size: 13px;
		color: var(--text-muted);
	}

	.dot {
		margin: 0 6px;
	}

	/* Chevron */
	.chevron {
		margin-left: auto;
		font-size: 18px;
		line-height: 1;
		color: var(--text-muted);
		transition: transform 0.2s ease;
	}

	.chevron.open {
		transform: rotate(180deg);
	}

	/* =========================
	   ACCORDION (smooth)
	   ========================= */

	.details {
		display: grid;
		grid-template-rows: 0fr;
		transition: grid-template-rows 0.25s ease;
	}

	.details.open {
		grid-template-rows: 1fr;
	}

	.details-inner {
		overflow: hidden;
		margin-top: 12px;
	}

	.details.open .details-inner {
		border-top: 1px solid var(--border);
	}

	.details-inner ul {
		font-size: 14px;
		line-height: 1.6;
	}

	.details-inner li {
		margin-bottom: 6px;
	}

	/* Description paragraph */
	.description {
		font-size: 14px;
		line-height: 1.6;
		color: var(--text);
		margin: 0 0 8px;
	}

	/* Achievements list */
	.achievements {
		padding-left: 16px;
		margin: 0 0 12px;
		font-size: 14px;
		line-height: 1.6;
	}

	.achievements li {
		margin-bottom: 6px;
	}

	/* Badges */
	.badge {
		display: inline-block;
		padding: 4px 10px;
		border-radius: 999px;
		font-size: 12px;
		background: var(--surface);
		border: 1px solid var(--border);
		color: var(--text-muted);
	}

	@media (min-width: 640px) {
		.role {
			font-size: 19px;
		}
	}

	/* =========================
	   MOBILE
	   ========================= */

	@media (max-width: 640px) {
		.experience-item {
			padding: 16px;
		}

		.meta {
			font-size: 12px;
		}

		/* .details-inner ul {
			font-size: 13.5px;
		} */

		.achievements {
			font-size: 13.5px;
		}
	}
</style>
