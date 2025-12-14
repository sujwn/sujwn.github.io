<script lang="ts">
	import { profile } from "$lib/data/profile";
	import IconMail from "$lib/icons/IconMail.svelte";

	const email = profile.email;
	const mailto = `mailto:${email}`;
</script>

<footer class="footer">
	<div class="footer-inner">
		<p class="afterword">
			“Simplicity is the ultimate sophistication.” — Leonardo da Vinci<br><br>
		</p>

		<a
			href={mailto}
			class="contact-button"
			aria-label="Leave a message via email"
		>
			<IconMail />
			<span>Leave a message</span>
		</a>

		<p class="footnote">
			© {new Date().getFullYear()} · Built with care, and svelte.
		</p>
	</div>
</footer>

<style>
	/* =========================
   FOOTER
   ========================= */

	.footer {
		/* margin-top: 32px; */
		padding: 32px 16px 24px;

		text-align: center;
		color: var(--text-muted);

		width: 100%;
		background: var(--footer-bg);
		border-top: 1px solid var(--border);
	}

	.footer-inner {
		max-width: 900px;
		margin: 0 auto;
		padding: 32px 16px;
	}

	.afterword {
		max-width: 520px;
		margin: 0 auto 20px;
		font-size: 18px;
		line-height: 1.6;
	}

	/* Contact button */
	.contact-button {
		display: inline-flex;
		align-items: center;
		gap: 8px;

		padding: 10px 14px;
		border-radius: 999px;

		font-size: 14px;
		font-weight: 500;

		color: var(--text);
		background: var(--surface);
		border: 1px solid var(--border);
		text-decoration: none;

		transition:
			background-color 0.15s ease,
			transform 0.15s ease;
	}

	.contact-button:hover {
		background: var(--surface-hover);
		transform: translateY(-1px);
	}

	.contact-button:focus-visible {
		outline: 2px solid var(--accent);
		outline-offset: 2px;
	}

	/* Footnote */
	.footnote {
		margin-top: 24px;
		font-size: 12px;
		color: var(--text-muted);
	}
</style>
