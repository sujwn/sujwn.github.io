/** Svelte action: fade-and-rise an element into view once, respecting reduced motion. */
export function reveal(node: HTMLElement) {
	node.classList.add('reveal');

	const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	if (reduce || !('IntersectionObserver' in window)) {
		node.classList.add('in');
		return;
	}

	const io = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					node.classList.add('in');
					io.disconnect();
				}
			}
		},
		{ threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
	);
	io.observe(node);

	return {
		destroy() {
			io.disconnect();
		}
	};
}
