import type { Profile } from '$lib/types';

export const profile: Profile = {
	name: 'Suhlani Juwan',
	initials: 'SJ',
	eyebrow: 'backend developer',
	tagline: 'building APIs & the systems behind them',
	description:
		"I design and operate the machinery behind the screen — APIs, data pipelines, and infrastructure that stay fast and predictable under load. Seven years turning messy requirements into services that don't page anyone at 3 a.m.",
	photo: 'profile_01.png',
	socials: [
		{ label: 'GitHub', href: 'https://github.com/sujwn', icon: 'github' },
		{ label: 'LinkedIn', href: 'https://linkedin.com/in/suju', icon: 'linkedin' },
		// { label: 'X', href: 'https://x.com/sujwn_', icon: 'x' },
		{ label: 'Email', href: 'mailto:suhlanijuwan@gmail.com', icon: 'email' }
	]
};
