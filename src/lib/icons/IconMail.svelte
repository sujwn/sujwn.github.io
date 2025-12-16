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
	<rect
		x="3"
		y="5"
		width="18"
		height="14"
		rx="2"
		ry="2"
		stroke="currentColor"
		stroke-width={strokeWidth}
	/>
	<path
		d="M3 7l9 6 9-6"
		stroke="currentColor"
		stroke-width={strokeWidth}
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</svg>
