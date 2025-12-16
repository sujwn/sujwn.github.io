<script lang="ts">
	export let size: string | number = '1em';
	export let strokeWidth = 1.8;
</script>

<svg
	width={size}
	height={size}
	viewBox="0 0 24 24"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	aria-hidden="true"
>
	<path
		d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"
		stroke="currentColor"
		stroke-width={strokeWidth}
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
	<rect
		x="2"
		y="6"
		width="20"
		height="14"
		rx="2"
		ry="2"
		stroke="currentColor"
		stroke-width={strokeWidth}
	/>
</svg>
