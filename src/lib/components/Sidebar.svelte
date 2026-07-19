<script lang="ts">
	import { onMount } from "svelte";
	import type { NavItem } from "$lib/types";

	let {
		name,
		initials,
		items,
		collapsed = false,
		oncollapse,
	}: {
		name: string;
		initials: string;
		items: NavItem[];
		collapsed?: boolean;
		oncollapse?: () => void;
	} = $props();

	/** mobile drawer state */
	let open = $state(false);
	/** id of the section currently in view (scrollspy) */
	let activeId = $state("");

	onMount(() => {
		// initial state: honor a hash like /#experience, else first item
		const fromHash = location.hash.slice(1);
		activeId = items.some((item) => item.target === fromHash)
			? fromHash
			: (items[0]?.target ?? "");

		const sections = items
			.map((item) => document.getElementById(item.target))
			.filter((el): el is HTMLElement => el !== null);

		// Track every section overlapping the activation band; the first one in
		// nav order wins. threshold: 0 so tall sections activate on any overlap
		// (a fractional threshold can never be met by sections taller than the band).
		const visible = new Set<string>();
		const spy = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) visible.add(entry.target.id);
					else visible.delete(entry.target.id);
				}
				const current = items.find((item) => visible.has(item.target));
				if (current) activeId = current.target;
			},
			{ threshold: 0, rootMargin: "-15% 0px -55% 0px" },
		);
		sections.forEach((section) => spy.observe(section));

		// the last section may be too short to ever reach the band
		const onScroll = () => {
			const bottom =
				window.innerHeight + window.scrollY >=
				document.documentElement.scrollHeight - 2;
			if (bottom && items.length) activeId = items[items.length - 1].target;
		};
		window.addEventListener("scroll", onScroll, { passive: true });

		return () => {
			spy.disconnect();
			window.removeEventListener("scroll", onScroll);
		};
	});
</script>

<aside class="sidebar" class:open class:collapsed>
	<div class="sidebar-head">
		<div class="brand">
			<div class="brand-mark">{initials}</div>
			<div>
				<div class="brand-name">{name}</div>
				<div class="brand-role">~/backend-dev</div>
			</div>
		</div>
		<button
			class="hamburger"
			aria-label="Toggle menu"
			aria-expanded={open}
			onclick={() => (open = !open)}
		>
			<span></span><span></span><span></span>
		</button>
		<button
			class="rail-toggle"
			aria-label="Collapse menu"
			aria-expanded={!collapsed}
			title="Collapse menu"
			onclick={() => oncollapse?.()}
		>
			<svg viewBox="0 0 24 24" aria-hidden="true"
				><rect x="3" y="4" width="18" height="16" rx="2" /><line
					x1="9"
					y1="4"
					x2="9"
					y2="20"
				/></svg
			>
			<!-- <svg viewBox="0 0 24 24" aria-hidden="true"
				><path d="M14 7l-5 5 5 5" /><line x1="6" y1="5" x2="6" y2="19" /></svg
			> -->
		</button>
	</div>

	<div class="nav-panel">
		<nav class="nav" aria-label="Sections">
			<p class="nav-label">Endpoints</p>
			{#each items as item (item.path)}
				<a
					href="#{item.target}"
					class:active={activeId === item.target}
					onclick={() => (open = false)}
				>
					<span class="verb {item.method.toLowerCase()}">{item.method}</span>
					{item.path}
					<span class="dot"></span>
				</a>
			{/each}
		</nav>

		<div class="sidebar-foot">
			<div class="status-line">
				<span class="pulse"></span> available for work
			</div>
		</div>
	</div>
</aside>

<style>
	.sidebar {
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		width: var(--sidebar);
		padding: 36px 28px;
		border-right: 1px solid var(--border);
		background: linear-gradient(
			180deg,
			rgba(21, 27, 36, 0.6),
			rgba(13, 18, 24, 0.6)
		);
		backdrop-filter: blur(6px);
		display: flex;
		flex-direction: column;
		gap: 28px;
		z-index: 50;
		transition: transform 0.32s ease;
	}

	.sidebar-head {
		display: flex;
		align-items: center;
		gap: 12px;
	}
	.brand {
		display: flex;
		align-items: center;
		gap: 12px;
	}
	.brand-mark {
		width: 40px;
		height: 40px;
		flex: none;
		border-radius: 10px;
		display: grid;
		place-items: center;
		font-family: var(--font-mono);
		font-weight: 600;
		font-size: 15px;
		color: var(--base);
		background: linear-gradient(135deg, var(--amber), #ffd27a);
		box-shadow:
			0 0 0 1px rgba(242, 179, 61, 0.4),
			0 6px 18px rgba(242, 179, 61, 0.18);
	}
	.brand-name {
		font-family: var(--font-display);
		font-weight: 600;
		font-size: 16px;
		letter-spacing: -0.01em;
	}
	.brand-role {
		font-family: var(--font-mono);
		font-size: 11.5px;
		color: var(--muted);
	}

	.nav-panel {
		display: flex;
		flex-direction: column;
		gap: 28px;
		flex: 1;
	}
	.nav {
		display: flex;
		flex-direction: column;
		gap: 2px;
	}
	.nav-label {
		font-family: var(--font-mono);
		font-size: 10.5px;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--faint);
		margin: 0 0 8px 4px;
	}
	.nav a {
		display: flex;
		align-items: center;
		gap: 10px;
		padding: 9px 12px;
		border-radius: var(--radius-s);
		font-family: var(--font-mono);
		font-size: 13px;
		color: var(--muted);
		transition:
			background 0.18s ease,
			color 0.18s ease;
	}
	.nav a:hover,
	.nav a.active {
		background: var(--surface-2);
		color: var(--text);
	}
	.nav a.active .dot {
		opacity: 1;
	}
	.dot {
		width: 5px;
		height: 5px;
		border-radius: 50%;
		background: var(--amber);
		opacity: 0;
		transition: opacity 0.18s ease;
		margin-left: auto;
	}
	.verb {
		font-weight: 600;
		font-size: 11px;
	}
	.verb.get {
		color: var(--get);
	}
	.verb.post {
		color: var(--post);
	}

	.sidebar-foot {
		margin-top: auto;
		font-family: var(--font-mono);
		font-size: 11.5px;
		color: var(--faint);
	}
	.status-line {
		display: flex;
		align-items: center;
		gap: 8px;
		color: var(--muted);
	}
	.pulse {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: var(--ok);
		animation: pulse 2.4s infinite;
	}
	@keyframes pulse {
		0% {
			box-shadow: 0 0 0 0 rgba(74, 222, 158, 0.5);
		}
		70% {
			box-shadow: 0 0 0 7px rgba(74, 222, 158, 0);
		}
		100% {
			box-shadow: 0 0 0 0 rgba(74, 222, 158, 0);
		}
	}

	/* desktop collapse / mobile controls */
	.hamburger {
		display: none;
		width: 42px;
		height: 42px;
		flex: none;
		margin-left: auto;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 5px;
		background: var(--surface-2);
		border: 1px solid var(--border);
		border-radius: 10px;
		cursor: pointer;
		padding: 0;
	}
	.hamburger span {
		display: block;
		width: 18px;
		height: 2px;
		border-radius: 2px;
		background: var(--text);
		transition:
			transform 0.26s ease,
			opacity 0.2s ease;
	}
	.sidebar.open .hamburger span:nth-child(1) {
		transform: translateY(7px) rotate(45deg);
	}
	.sidebar.open .hamburger span:nth-child(2) {
		opacity: 0;
	}
	.sidebar.open .hamburger span:nth-child(3) {
		transform: translateY(-7px) rotate(-45deg);
	}

	.rail-toggle {
		display: inline-flex;
		margin-left: auto;
		flex: none;
		width: 34px;
		height: 34px;
		align-items: center;
		justify-content: center;
		background: var(--surface-2);
		border: 1px solid var(--border);
		border-radius: 9px;
		cursor: pointer;
		color: var(--muted);
		padding: 0;
		transition:
			color 0.18s ease,
			border-color 0.18s ease,
			background 0.18s ease;
	}
	.rail-toggle:hover {
		color: var(--amber);
		border-color: rgba(242, 179, 61, 0.4);
		background: rgba(242, 179, 61, 0.08);
	}
	.rail-toggle svg {
		width: 16px;
		height: 16px;
		fill: none;
		stroke: currentColor;
		stroke-width: 2;
		stroke-linecap: round;
		stroke-linejoin: round;
	}

	@media (min-width: 961px) {
		.sidebar.collapsed {
			transform: translateX(-100%);
		}
	}

	@media (max-width: 960px) {
		.sidebar {
			position: sticky;
			top: 0;
			left: 0;
			right: 0;
			bottom: auto;
			width: 100%;
			flex-direction: column;
			gap: 0;
			padding: 0;
			border-right: none;
			border-bottom: 1px solid var(--border);
			background: rgba(13, 18, 24, 0.94);
			backdrop-filter: blur(10px);
			transform: none;
		}
		.sidebar-head {
			padding: 14px 18px;
			width: 100%;
		}
		.hamburger {
			display: inline-flex;
		}
		.rail-toggle {
			display: none;
		}
		.brand-role {
			display: none;
		}
		.brand-name {
			font-size: 15px;
		}

		.nav-panel {
			flex: none;
			width: 100%;
			gap: 0;
			overflow: hidden;
			max-height: 0;
			opacity: 0;
			transition:
				max-height 0.32s ease,
				opacity 0.24s ease;
		}
		.sidebar.open .nav-panel {
			max-height: 70vh;
			opacity: 1;
			border-top: 1px solid var(--border);
		}
		.nav {
			padding: 12px 14px;
		}
		.nav-label {
			margin: 4px 0 8px 8px;
		}
		.nav a {
			padding: 12px 14px;
			font-size: 14px;
		}
		.dot {
			display: none;
		}
		.sidebar-foot {
			margin-top: 0;
			padding: 4px 22px 18px;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.sidebar,
		.nav-panel,
		.hamburger span {
			transition: none;
		}
		.pulse {
			animation: none;
		}
	}
</style>
