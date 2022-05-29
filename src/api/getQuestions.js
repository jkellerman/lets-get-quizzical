const getQuestions = (quizSettings) => {
  const { category, difficulty, type } = quizSettings;

  let categoryParam = "";
  let difficultyParam = "";
  let typeParam = "";

  if (category !== "") {
    categoryParam = `&category=${category}`;
  }
  if (difficulty !== "") {
    difficultyParam = `&difficulty=${difficulty}`;
  }
  if (type !== "") {
    typeParam = `&type=${type}`;
  }

  let url = `https://opentdb.com/api.php?amount=5${categoryParam}${difficultyParam}${typeParam}`;

  return fetch(url)
    .then((res) => res.json())
    .then((data) => data.results);
};

export default getQuestions;
