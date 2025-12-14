import IconGithub from "./IconGithub.svelte";
import IconLinkedin from "./IconLinkedin.svelte";
import IconInstagram from "./IconInstagram.svelte";
import IconWeb from "./IconWeb.svelte";

export const iconRegistry = {
	github: IconGithub,
	linkedin: IconLinkedin,
	instagram: IconInstagram,
	web: IconWeb,
} as const;

export const DefaultIcon = IconWeb;
