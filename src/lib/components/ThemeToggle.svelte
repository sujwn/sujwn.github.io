<script lang="ts">
	import IconMoon from "$lib/icons/IconMoon.svelte";
	import IconSun from "$lib/icons/IconSun.svelte";
	import { theme } from "$lib/stores/theme";
</script>

<button class="theme-toggle" on:click={theme.toggle} aria-label="Toggle theme">
	{#if $theme === "light"}
		<IconSun />
	{:else}
		<IconMoon />
	{/if}
</button>

<style>
	.theme-toggle {
		all: unset;
		cursor: pointer;
		border-radius: 999px;
		transition:
			transform 0.3s ease,
			background-color 0.2s ease;
	}

	.theme-toggle:active {
		transform: rotate(180deg);
	}
</style>
