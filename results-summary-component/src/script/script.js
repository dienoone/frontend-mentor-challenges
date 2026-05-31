const data = [
	{
		category: 'Reaction',
		color: 'light-red',
		score: 80,
		icon: './assets/images/icon-reaction.svg',
	},
	{
		category: 'Memory',
		color: 'orangey-yellow',
		score: 92,
		icon: './assets/images/icon-memory.svg',
	},
	{
		category: 'Verbal',
		color: 'green-teal',
		score: 61,
		icon: './assets/images/icon-verbal.svg',
	},
	{
		category: 'Visual',
		color: 'cobalt-blue',
		score: 72,
		icon: './assets/images/icon-visual.svg',
	},
];

const resultsEl = document.getElementById('results');

resultsEl.innerHTML = '';

for (const result of data) {
	//
	const html = `
    <div class="w-full flex items-center justify-between p-4 bg-${result.color}/5 rounded-xl">
      <div class="flex items-center space-x-2">
        <img src="${result.icon}" alt="" />
        <p class="text-xs text-${result.color}">${result.category}</p>
      </div>

      <p class="text-xs text-light-lavender">
        <span class="text-dark-gray-blue">${result.score}</span> / 100
      </p>
    </div>
  `;

	resultsEl.insertAdjacentHTML('beforeend', html);
}
