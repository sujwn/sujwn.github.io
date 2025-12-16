<script lang="ts">
	export let size: string | number = '1em';
	export let strokeWidth = 1.8;
</script>

<svg
	width={size}
	height={size}
	viewBox="0 0 24 24"
	fill="curren"
	xmlns="http://www.w3.org/2000/svg"
	aria-hidden="true"
>
	<path
		d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
		stroke="currentColor"
		stroke-width={strokeWidth}
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
	<path
		d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
		stroke="currentColor"
		stroke-width={strokeWidth}
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</svg>
