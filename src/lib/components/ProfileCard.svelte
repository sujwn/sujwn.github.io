<script lang="ts">
	import { base } from '$app/paths';
	import type { Profile } from '$lib/types';
	import { reveal } from '$lib/actions/reveal';
	import SocialIcon from './SocialIcon.svelte';

	let { profile }: { profile: Profile } = $props();
	let photoFailed = $state(false);
</script>

<header class="hero" id="profile">
	<div class="req-bar">
		<span class="method get">GET</span>
		<span>/api/v1/profile</span>
		<span class="lights"><i></i><i></i><i></i></span>
	</div>

	<div class="resp-card" use:reveal>
		<div class="resp-meta">
			<span><span class="ok">200</span> OK</span>
			<span>·</span>
			<span><span class="k">time</span> 8ms</span>
			<span>·</span>
			<span><span class="k">content-type</span> application/json</span>
		</div>

		<div class="profile">
			<div class="avatar">
				{#if !photoFailed && profile.photo}
					<img
						class="avatar-img"
						src="{base}/{profile.photo}"
						alt={profile.name}
						onerror={() => (photoFailed = true)}
					/>
				{:else}
					<span class="avatar-mono">{profile.initials}</span>
				{/if}
				<!-- <span class="online" title="online"></span> -->
			</div>

			<div class="profile-body">
				<p class="eyebrow">{profile.eyebrow}</p>
				<h1>{profile.name}</h1>
				<p class="title">{profile.tagline}<span class="blink">▌</span></p>
				<p class="desc">{profile.description}</p>

				<div class="socials">
					{#each profile.socials as social (social.label)}
						<a
							href={social.href}
							aria-label={social.label}
							rel={social.href.startsWith('http') ? 'noopener' : undefined}
							target={social.href.startsWith('http') ? '_blank' : undefined}
						>
							<SocialIcon icon={social.icon} />
						</a>
					{/each}
				</div>
			</div>
		</div>
	</div>
</header>

<style>
	.hero { padding-top: 56px; }

	.req-bar {
		display: flex;
		align-items: center;
		gap: 10px;
		font-family: var(--font-mono);
		font-size: 13px;
		padding: 12px 16px;
		background: var(--surface);
		border: 1px solid var(--border);
		border-bottom: none;
		border-radius: var(--radius) var(--radius) 0 0;
		color: var(--muted);
	}
	.req-bar .method { font-size: 10.5px; }
	.lights { display: flex; gap: 6px; margin-left: auto; }
	.lights i { width: 9px; height: 9px; border-radius: 50%; display: inline-block; background: var(--border); }

	.resp-card {
		background: linear-gradient(180deg, var(--surface), rgba(21, 27, 36, 0.6));
		border: 1px solid var(--border);
		border-radius: 0 0 var(--radius) var(--radius);
		padding: 30px;
	}
	.resp-meta {
		display: flex;
		align-items: center;
		gap: 16px;
		flex-wrap: wrap;
		font-family: var(--font-mono);
		font-size: 12px;
		color: var(--faint);
		padding-bottom: 24px;
		margin-bottom: 24px;
		border-bottom: 1px dashed var(--border);
	}
	.resp-meta .ok { color: var(--ok); font-weight: 600; }
	.resp-meta .k { color: var(--muted); }

	.profile { display: flex; gap: 26px; align-items: flex-start; }

	.avatar {
		width: 116px;
		height: 116px;
		flex: none;
		border-radius: 16px;
		position: relative;
		background: linear-gradient(140deg, #29333f, #1a222c);
		border: 1px solid var(--border);
		display: grid;
		place-items: center;
		overflow: hidden;
	}
	.avatar-mono {
		font-family: var(--font-display);
		font-weight: 700;
		font-size: 38px;
		color: var(--amber);
		letter-spacing: 0.02em;
	}
	.avatar-img { width: 100%; height: 100%; object-fit: cover; }
	.online {
		position: absolute;
		right: 8px;
		bottom: 8px;
		width: 14px;
		height: 14px;
		border-radius: 50%;
		background: var(--ok);
		border: 2.5px solid var(--surface);
	}

	.profile-body { min-width: 0; }
	.eyebrow {
		font-family: var(--font-mono);
		font-size: 11.5px;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--amber);
		margin: 0 0 10px;
	}
	h1 {
		font-family: var(--font-display);
		font-weight: 700;
		font-size: clamp(30px, 5vw, 42px);
		line-height: 1.05;
		letter-spacing: -0.02em;
		margin: 0 0 8px;
	}
	.title {
		font-family: var(--font-mono);
		font-size: 14px;
		color: var(--muted);
		margin: 0 0 16px;
	}
	.blink { color: var(--amber); animation: blink 1.1s steps(1) infinite; }
	@keyframes blink { 50% { opacity: 0; } }
	@media (prefers-reduced-motion: reduce) { .blink { animation: none; } }

	.desc { margin: 0 0 22px; color: var(--text); max-width: 46ch; }

	.socials { display: flex; gap: 10px; flex-wrap: wrap; }
	.socials a {
		width: 40px;
		height: 40px;
		border-radius: 10px;
		display: grid;
		place-items: center;
		border: 1px solid var(--border);
		background: var(--surface-2);
		color: var(--muted);
		transition: color 0.18s ease, border-color 0.18s ease, transform 0.18s ease, background 0.18s ease;
	}
	.socials a:hover {
		color: var(--amber);
		border-color: rgba(242, 179, 61, 0.4);
		background: rgba(242, 179, 61, 0.08);
		transform: translateY(-2px);
	}

	@media (max-width: 960px) {
		.hero { padding-top: 40px; }
	}
	@media (max-width: 620px) {
		.profile { flex-direction: column; gap: 20px; }
		.resp-card { padding: 22px; }
		.resp-meta { gap: 10px; }
	}
	@media (max-width: 400px) {
		.resp-card { padding: 18px; }
		.avatar { width: 92px; height: 92px; }
	}
</style>
