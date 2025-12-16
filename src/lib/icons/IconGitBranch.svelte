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
	<circle
		cx="6"
		cy="18"
		r="3"
		stroke="currentColor"
		stroke-width={strokeWidth}
	/>
	<circle
		cx="6"
		cy="6"
		r="3"
		stroke="currentColor"
		stroke-width={strokeWidth}
	/>
	<circle
		cx="18"
		cy="6"
		r="3"
		stroke="currentColor"
		stroke-width={strokeWidth}
	/>
	<path
		d="M6 9v6a6 6 0 0 0 6-6h3"
		stroke="currentColor"
		stroke-width={strokeWidth}
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</svg>
