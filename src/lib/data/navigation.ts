import type { NavItem } from '$lib/types';

export const navItems: NavItem[] = [
	{ method: 'GET', path: '/profile', target: 'profile' },
	{ method: 'GET', path: '/experience', target: 'experience' },
	{ method: 'GET', path: '/projects', target: 'projects' },
	{ method: 'POST', path: '/contact', target: 'contact' }
];
