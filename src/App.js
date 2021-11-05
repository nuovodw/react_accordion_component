import React from 'react';
import Accordion from './Accordion';

const items = [
	{
		title: 'What is your profession?',
		content: 'I am a front end developer.',
	},
	{
		title: 'What is your tech stack?',
		content: 'React, Javascript, Material UI, Semantic UI',
	},
	{
		title: 'Which UI framework are you using for this app?',
		content: 'Semantic UI',
	},
];

export default () => {
	return (
		<div>
			<Accordion items={items} />
		</div>
	);
};
