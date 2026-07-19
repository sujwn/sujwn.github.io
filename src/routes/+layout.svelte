<script lang="ts">
	import "../app.css";
	import Sidebar from "$lib/components/Sidebar.svelte";
	import { profile } from "$lib/data/profile";
	import { navItems } from "$lib/data/navigation";

	let { children } = $props();
	let sidebarCollapsed = $state(false);
</script>

<a class="skip" href="#main">Skip to content</a>

{#if sidebarCollapsed}
	<button
		class="sidebar-reopen"
		aria-label="Open menu"
		title="Open menu"
		onclick={() => (sidebarCollapsed = false)}
	>
		<svg viewBox="0 0 24 24" aria-hidden="true"
			><rect x="3" y="4" width="18" height="16" rx="2" /><line
				x1="9"
				y1="4"
				x2="9"
				y2="20"
			/></svg
		>
	</button>
{/if}

<Sidebar
	name={profile.name}
	initials={profile.initials}
	items={navItems}
	collapsed={sidebarCollapsed}
	oncollapse={() => (sidebarCollapsed = true)}
/>

<main class="main" class:full={sidebarCollapsed} id="main">
	<div class="inner">
		{@render children()}
	</div>
</main>

<style>
	.main {
		margin-left: var(--sidebar);
		padding: 0 clamp(24px, 6vw, 88px) 80px;
		position: relative;
		z-index: 1;
		transition: margin-left 0.32s ease;
	}
	.inner {
		max-width: var(--maxw);
		margin: 0 auto;
	}

	.sidebar-reopen {
		position: fixed;
		top: 22px;
		left: 22px;
		z-index: 60;
		width: 42px;
		height: 42px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: 10px;
		cursor: pointer;
		color: var(--text);
		padding: 0;
		box-shadow: 0 8px 22px rgba(0, 0, 0, 0.45);
		transition:
			transform 0.18s ease,
			color 0.18s ease,
			border-color 0.18s ease;
	}
	.sidebar-reopen:hover {
		color: var(--amber);
		border-color: rgba(242, 179, 61, 0.4);
		transform: translateY(-1px);
	}
	.sidebar-reopen svg {
		width: 18px;
		height: 18px;
		fill: none;
		stroke: currentColor;
		stroke-width: 2;
		stroke-linecap: round;
		stroke-linejoin: round;
	}

	@media (min-width: 961px) {
		.main.full {
			margin-left: 0;
		}
	}
	@media (max-width: 960px) {
		.main {
			margin-left: 0;
			padding: 0 20px 64px;
		}
		.sidebar-reopen {
			display: none;
		}
	}
	@media (max-width: 400px) {
		.main {
			padding: 0 14px 56px;
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.main,
		.sidebar-reopen {
			transition: none;
		}
	}
</style>
