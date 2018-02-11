const dataset = [
  {
    question: 'What is the first letter of alphabet',
    options: ['A', 'B', 'C', 'D'],
    correct: 0,
  },
  {
    question: 'What is the second letter of alphabet',
    options: ['A', 'B', 'C', 'D'],
    correct: 1,
  },
  {
    question: 'What is the second letter of alphabet, this is a really long question but we will see',
    options: ['A', 'B', 'C', 'D'],
    correct: 1,
  },
]

export default {
  name: 'test',
  getDataset: () => dataset,
}
