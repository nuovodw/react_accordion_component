import React from 'react';
import Accordion from './Accordion';

const items = [
	{
		title: 'What is your profession?',
		content: 'I am a front end developer.',
	},
	{
		title: 'What is your tech stack?',
		content: 'React, Javascript, Material UI',
	},
	{
		title: 'What do you like about being a dev?',
		content: 'I love solving problems and creating apps and websites.',
	},
];

export default () => {
	return (
		<div>
			<Accordion items={items} />
		</div>
	);
};
