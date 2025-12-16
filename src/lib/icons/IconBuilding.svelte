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
	<rect
		x="3"
		y="3"
		width="18"
		height="18"
		rx="2"
		ry="2"
		stroke="currentColor"
		stroke-width={strokeWidth}
	/>
	<path
		d="M9 7h.01M9 11h.01M9 15h.01M15 7h.01M15 11h.01M15 15h.01"
		stroke="currentColor"
		stroke-width={strokeWidth}
		stroke-linecap="round"
	/>
</svg>
