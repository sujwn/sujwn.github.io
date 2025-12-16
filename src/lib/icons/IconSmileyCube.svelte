<script lang="ts">
	export let size: string | number = "1em";
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
	<!-- Cube -->
	<rect
		x="4"
		y="4"
		width="16"
		height="16"
		rx="3"
		stroke="currentColor"
		stroke-width={strokeWidth}
		stroke-linecap="round"
		stroke-linejoin="round"
	/>

	<!-- Eyes -->
	<path
		d="M9 10h.01"
		stroke="currentColor"
		stroke-width={strokeWidth}
		stroke-linecap="round"
	/>
	<path
		d="M15 10h.01"
		stroke="currentColor"
		stroke-width={strokeWidth}
		stroke-linecap="round"
	/>

	<!-- Smile -->
	<path
		d="M9 14c1 1 5 1 6 0"
		stroke="currentColor"
		stroke-width={strokeWidth}
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</svg>
