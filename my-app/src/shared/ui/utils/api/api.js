export const fetchVoteData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        question: 'Какой это стек?',
        options: ['React', 'Vue', 'Angular']
      });
    }, 500);
  });
};
