<script lang="ts">
	import type { HttpMethod } from '$lib/types';
	import { reveal } from '$lib/actions/reveal';

	let {
		method,
		path,
		query = '',
		status = '200',
		note = ''
	}: {
		method: HttpMethod;
		path: string;
		query?: string;
		status?: string;
		note?: string;
	} = $props();
</script>

<div class="endpoint" use:reveal>
	<span class="method {method.toLowerCase()}">{method}</span>
	<span class="path">{path}{#if query}<span class="dim">{query}</span>{/if}</span>
	{#if note}
		<span class="resp"><b>{status}</b> · {note}</span>
	{/if}
</div>
