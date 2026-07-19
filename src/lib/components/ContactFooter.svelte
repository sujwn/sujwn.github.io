<script lang="ts">
	import type { Contact } from "$lib/types";
	import { reveal } from "$lib/actions/reveal";
	import EndpointHeader from "./EndpointHeader.svelte";

	let { contact, ownerName }: { contact: Contact; ownerName: string } =
		$props();

	const year = new Date().getFullYear();
</script>

<footer class="section" id="contact">
	<EndpointHeader
		method="POST"
		path="/contact"
		status="201"
		note="let's talk"
	/>

	<div class="contact-card" use:reveal>
		<p class="contact-quote">
			{contact.quoteLead} <span class="ac">{contact.quoteAccent}</span>
		</p>
		<p class="contact-sub">{contact.sub}</p>

		<a class="mailto" href="mailto:{contact.email}">
			<svg
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="1.8"
				aria-hidden="true"
				><rect x="2.5" y="4.5" width="19" height="15" rx="2" /><path
					d="m3 6 9 6.5L21 6"
				/></svg
			>
			{contact.ctaLabel}
		</a>

		<div class="footer-meta">
			<span>connection: <b>keep-alive</b></span>
			<span>·</span>
			<span>© {year} {ownerName}</span>
			<span>·</span>
			<span>{contact.footerNote}</span>
		</div>
	</div>
</footer>

<style>
	.contact-card {
		background: linear-gradient(180deg, var(--surface), rgba(21, 27, 36, 0.5));
		border: 1px solid var(--border);
		border-radius: var(--radius);
		padding: 38px 34px;
	}
	.contact-quote {
		font-family: var(--font-display);
		font-weight: 500;
		font-size: clamp(20px, 3.4vw, 27px);
		line-height: 1.35;
		letter-spacing: -0.01em;
		margin: 0 0 10px;
		color: var(--text);
	}
	.ac {
		color: var(--amber);
	}
	.contact-sub {
		color: var(--muted);
		margin: 0 0 26px;
		max-width: 50ch;
	}
	.mailto {
		display: inline-flex;
		align-items: center;
		gap: 12px;
		font-family: var(--font-mono);
		font-size: 14px;
		font-weight: 500;
		padding: 13px 20px;
		border-radius: 10px;
		color: var(--base);
		background: linear-gradient(135deg, var(--amber), #ffd27a);
		transition:
			transform 0.18s ease,
			box-shadow 0.18s ease;
		box-shadow: 0 8px 24px rgba(242, 179, 61, 0.18);
	}
	.mailto:hover {
		transform: translateY(-2px);
		box-shadow: 0 12px 30px rgba(242, 179, 61, 0.28);
	}
	.mailto svg {
		width: 17px;
		height: 17px;
	}

	.footer-meta {
		display: flex;
		gap: 18px;
		flex-wrap: wrap;
		font-family: var(--font-mono);
		font-size: 12px;
		color: var(--faint);
		margin-top: 32px;
		padding-top: 22px;
		border-top: 1px solid var(--border);
	}
	.footer-meta b {
		color: var(--ok);
		font-weight: 600;
	}

	@media (max-width: 620px) {
		.contact-card {
			padding: 28px 22px;
		}
	}
	@media (max-width: 400px) {
		.contact-card {
			padding: 24px 18px;
		}
		.mailto {
			width: 100%;
			justify-content: center;
			font-size: 13px;
		}
	}
</style>
