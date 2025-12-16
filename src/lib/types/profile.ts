export type ProfileStatus = "available" | "unavailable" | "busy";

export interface Profile {
	name: string;
	nickname: string;
	title: string;
	bio: string;
	avatar: string;
	status: ProfileStatus;
	links: Record<string, string>;
}
