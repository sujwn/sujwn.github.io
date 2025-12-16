import { writable } from "svelte/store";
import { browser } from "$app/environment";

type Theme = "light" | "dark";

function createTheme() {
	const initial: Theme =
		browser && localStorage.getItem("theme") === "dark" ? "dark" : "light";

	const { subscribe, set, update } = writable<Theme>(initial);

	if (browser) {
		subscribe((value) => {
			document.documentElement.dataset.theme = value;
			localStorage.setItem("theme", value);
		});
	}

	return {
		subscribe,
		toggle: () => update((t) => (t === "light" ? "dark" : "light")),
	};
}

export const theme = createTheme();
