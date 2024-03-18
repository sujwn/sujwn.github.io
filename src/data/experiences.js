import React from "react";

function experience_1() {
	return {
		date: "January 2023 - Present",
		title: "Backend Developer",
		description:
			"PT Pratiwi Technology Solution (Healstation Indonesia)",
		detail: `- Spearhead the complete application lifecycle, ensuring seamless development and deployment.
		- Lead a dynamic team of developers, fostering collaboration and innovation in project execution.
		- Develop robust Rest APIs, leveraging NodeJS, PostgreSQL, MongoDB, AWS, Firebase, Redis, Websocket, and OpenAI technologies.
		- Perform meticulous troubleshooting and debugging to maintain application integrity and performance.
		- Engineer reusable code modules to streamline future development cycles.
		- Collaborate closely with System Analysts to align development efforts with project objectives.
		- Provide detailed daily progress reports to Project Managers and Lead Manager.`,
		keywords: ["Backend Developer"],
		style: `
				.experience-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="experience-content">
					<div className="paragraph">Content of experience 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function experience_2() {
	return {
		date: "September 2020 - November 2022",
		title: "Backend Developer",
		description:
			"PT Jojo Nomic Indonesia",
		detail: `- Drive the development of functional Rest APIs and Microservices, employing PHP (Lumen Laravel), NodeJS, Java, GO, MySQL, and MongoDB.
		- Execute rigorous troubleshooting and debugging procedures to uphold application reliability.
		- Develop reusable code components to enhance scalability and maintainability.
		- Coordinate seamlessly with System Analysts, Quality Assurance Testers, Frontend, and Mobile Developers.
		- Deliver comprehensive daily status updates to Project Managers and Tech Leads.`,
		style: ``,
		keywords: ["Backend Developer"],
		body: (
			<React.Fragment>
				<h1>Content of experience 2</h1>
			</React.Fragment>
		),
	};
}

function experience_3() {
	return {
		date: "October 2017 - June 2020",
		title: "Software Engineer",
		description:
			"PT Cinovasi Rekaprima",
		detail: `- Contribute extensively to the complete application lifecycle, with a primary focus on coding and debugging
		- Craft clean, efficient codebases to power functional Rest APIs and web applications, utilizing PHP (Laravel, Symfony), Java (Struts Spring), Jquery, AJAX, Bootstrap, MySQL, and PostgreSQL
		- Conduct rigorous UI tests to optimize application performance and user experience
		- Develop reusable code libraries to expedite future development endeavors
		- Collaborate closely with Business Analysts and Quality Assurance Testers to ensure alignment with project requirements
		- Furnish detailed daily progress reports to Project Managers and the Chief Technology Officer (CTO)`,
		style: ``,
		keywords: ["Software Engineer", "Full Stack Developer"],
		body: (
			<React.Fragment>
				<h1>Content of experience 2</h1>
			</React.Fragment>
		),
	};
}

const myWorks = [experience_1, experience_2, experience_3];

export default myWorks;
