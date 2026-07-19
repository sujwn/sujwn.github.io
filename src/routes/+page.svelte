<script lang="ts">
	import EndpointHeader from "$lib/components/EndpointHeader.svelte";
	import ProfileCard from "$lib/components/ProfileCard.svelte";
	import ExperienceTimeline from "$lib/components/ExperienceTimeline.svelte";
	import ProjectGroup from "$lib/components/ProjectGroup.svelte";
	import ContactFooter from "$lib/components/ContactFooter.svelte";

	import { profile } from "$lib/data/profile";
	import { jobs } from "$lib/data/experience";
	import { projects, categorySettings } from "$lib/data/projects";
	import { groupProjectsByCategory } from "$lib/utils/projects";
	import { contact } from "$lib/data/contact";

	const projectCategories = groupProjectsByCategory(projects, categorySettings);
</script>

<svelte:head>
	<title>{profile.name} — Backend Engineer</title>
	<meta name="description" content={profile.description} />
</svelte:head>

<ProfileCard {profile} />

<section class="section" id="experience">
	<EndpointHeader
		method="GET"
		path="/experience"
		query="?sort=recent"
		note="{jobs.length} records"
	/>
	<ExperienceTimeline {jobs} />
</section>

<section class="section" id="projects">
	<EndpointHeader
		method="GET"
		path="/projects"
		query="?group_by=category"
		note="{projectCategories.length} groups"
	/>
	{#each projectCategories as category (category.title)}
		<ProjectGroup {category} />
	{/each}
</section>

<ContactFooter {contact} ownerName={profile.name} />
