<script lang="ts">
	import { onMount } from "svelte";

	import ThemeToggle from "$lib/components/ThemeToggle.svelte";

	import IconGithub from "$lib/icons/IconGithub.svelte";
	import IconLinkedin from "$lib/icons/IconLinkedin.svelte";
	import IconInstagram from "$lib/icons/IconInstagram.svelte";
	import IconWeb from "$lib/icons/IconWeb.svelte";

	import type { Profile } from "$lib/types/profile";

	/* =========================
	   ICON REGISTRY
	   ========================= */

	const iconMap: Record<string, any> = {
		github: IconGithub,
		linkedin: IconLinkedin,
		instagram: IconInstagram,
		web: IconWeb,
	};

	/* =========================
	   STATE
	   ========================= */

	let profile: Profile | null = null;
	let error: string | null = null;

	/* =========================
	   DATA FETCH
	   ========================= */

	onMount(async () => {
		try {
			const res = await fetch("/data/profile.json");
			profile = await res.json();
		} catch (err) {
			console.error(err);
			error = "Failed to load profile data.";
		}
	});
</script>

{#if profile}
	<section class="section about">
		<div class="about-card">
			<div class="about-top">
				<ThemeToggle />
			</div>

			<div class="about-body">
				<div
					class="avatar-wrap"
					data-status={profile.status}
					aria-label={`${profile.nickname} is ${profile.status}`}
				>
					<img
						class="avatar"
						src={profile.avatar}
						alt={`Avatar of ${profile.name}`}
					/>
				</div>

				<div class="about-text">
					<h1 class="name">{profile.name}</h1>
					<p class="title">{profile.title}</p>

					<div class="divider"></div>

					<p class="bio">{profile.bio}</p>

					<div class="actions">
						{#each Object.entries(profile.links) as [key, value]}
							{#if typeof value === "string"}
								<a href={value} target="_blank" rel="noreferrer">
									<svelte:component this={iconMap[key] ?? IconWeb} />
								</a>
							{/if}
						{/each}
					</div>
				</div>
			</div>
		</div>
	</section>
{:else if error}
	<p>{error}</p>
{:else}
	<p>Loading…</p>
{/if}

<style>
	/* =========================
   ABOUT SECTION
   ========================= */

	.about {
		padding-top: 0; /* remove extra top gap */
	}

	/* Card */
	.about-card {
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: 20px;
		padding: 20px 24px 24px;
	}

	/* Theme toggle */
	.about-top {
		display: flex;
		justify-content: flex-end;
		margin-bottom: 0; /* no space eating */
	}

	/* Layout */
	.about-body {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 24px;
		align-items: center;
	}

	/* Avatar wrapper */
	.avatar-wrap {
		position: relative;
		width: 160px;
		height: 160px;
		border-radius: 50%;
		flex-shrink: 0;
	}

	/* Status ring */
	.avatar-wrap::after {
		content: "";
		position: absolute;
		inset: -6px;
		border-radius: 50%;
		border: 4px solid transparent;
		pointer-events: none;
	}

	/* Status colors */
	.avatar-wrap[data-status="available"]::after {
		border-color: var(--status-available);
	}

	.avatar-wrap[data-status="offline"]::after {
		border-color: var(--status-offline);
	}

	.avatar-wrap[data-status="busy"]::after {
		border-color: var(--status-busy);
	}

	/* Available state animation */
	.avatar-wrap[data-status="available"]::after {
		animation: status-pulse 2.5s ease-in-out infinite;
	}

	/* Busy state animation */
	.avatar-wrap[data-status="busy"]::after {
		animation: status-pulse 2.5s ease-in-out infinite;
	}

	@keyframes status-pulse {
		0%,
		100% {
			opacity: 0.6;
		}
		50% {
			opacity: 1;
		}
	}

	/* Tooltip */
	.avatar-wrap::before {
		content: attr(aria-label);
		position: absolute;
		bottom: -42px;
		left: 50%;
		transform: translateX(-50%) translateY(4px);
		padding: 6px 10px;
		font-size: 12px;
		white-space: nowrap;
		color: var(--text);
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: 8px;
		box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
		opacity: 0;
		pointer-events: none;
		transition:
			opacity 0.2s ease,
			transform 0.2s ease;
		z-index: 10;
	}

	/* Show tooltip */
	.avatar-wrap:hover::before,
	.avatar-wrap:focus-visible::before {
		opacity: 1;
		transform: translateX(-50%) translateY(0);
	}

	/* Image */
	.avatar {
		width: 100%;
		height: 100%;
		border-radius: 50%;
		object-fit: cover;
		display: block;
		background: var(--surface);
	}

	/* Text */
	.about-text {
		display: flex;
		flex-direction: column;
	}

	.name {
		font-size: 34px;
		font-weight: 700;
		line-height: 1.2;
		margin: 0;
	}

	.title {
		margin-top: 6px;
		font-size: 16px;
		color: var(--text-muted);
	}

	/* FULL-WIDTH divider */
	.divider {
		width: 100%;
		height: 1px;
		background: color-mix(in oklab, var(--border), var(--text) 30%);
		margin: 6px 0; /* reduced vertical space */
	}

	.bio {
		max-width: 560px;
		font-size: 15px;
		line-height: 1.6;
		color: var(--text);
	}

	/* Social icons */
	.actions {
		display: flex;
		gap: 16px;
		margin-top: 14px;
	}

	.actions a {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 6px;
		border-radius: 8px;
		color: var(--text);
		transition:
			background-color 0.15s ease,
			transform 0.15s ease;
	}

	.actions a:hover {
		background: var(--surface-hover);
		transform: translateY(-1px);
	}

	.actions a:focus-visible {
		outline: 2px solid var(--accent);
		outline-offset: 2px;
	}

	/* =========================
   MOBILE
   ========================= */

	@media (max-width: 640px) {
		.about-body {
			grid-template-columns: 1fr;
			text-align: center;
			gap: 20px;
		}

		.avatar-wrap {
			margin: 0 auto;
			width: 180px;
			height: 180px;
		}

		.about-text {
			align-items: center;
		}

		.bio {
			text-align: center;
		}

		.actions {
			justify-content: center;
		}
	}
</style>
