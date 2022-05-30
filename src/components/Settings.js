const Settings = ({
  quizSettings,
  handleGameStart,
  handleChange,
  questionsError,
}) => {
  return (
    <div className="settings-container">
      <h1>Let's Get Quizzical</h1>
      {questionsError ? (
        <p>Oops! No questions here, adjust your settings</p>
      ) : (
        <p>Test your knowledge on your favourite subjects!</p>
      )}
      <form>
        <label htmlFor="category">Select Category:</label>
        <br />
        <select
          id="category"
          value={quizSettings.category}
          name="category"
          onChange={handleChange}
        >
          <option value="">Any category</option>
          <option value="9">General Knowledge</option>
          <option value="10">Entertainment: Books</option>
          <option value="11">Entertainment: Film</option>
          <option value="12">Entertainment: Music</option>
          <option value="13">Entertainment: Musicals &amp; Threatres</option>
          <option value="14">Entertainment: Television</option>
          <option value="15">Entertainment: Video Games</option>
          <option value="16">Entertainment: Board Games</option>
          <option value="17">Science &amp; Nature</option>
          <option value="18">Science: Computers</option>
          <option value="19">Science: Mathematics</option>
          <option value="20">Mythology</option>
          <option value="21">Sports</option>
          <option value="22">Geography</option>
          <option value="23">History</option>
          <option value="24">Politics</option>
          <option value="25">Art</option>
          <option value="26">Celebrities</option>
          <option value="27">Animals</option>
          <option value="28">Vehicles</option>
          <option value="29">Entertainment: Comics</option>
          <option value="30">Science: Gadgets</option>
          <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
          <option value="32">Entertainment: Cartoon &amp; Animations</option>
        </select>

        <label htmlFor="difficulty">Select Difficulty:</label>
        <br />
        <select
          id="difficulty"
          value={quizSettings.difficulty}
          name="difficulty"
          onChange={handleChange}
        >
          <option value="">Any Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>

        <label htmlFor="type">Select Type:</label>
        <br />
        <select
          id="type"
          value={quizSettings.type}
          name="type"
          onChange={handleChange}
        >
          <option value="">Any Type</option>
          <option value="multiple">Multiple Choice</option>
          <option value="boolean">True/False</option>
        </select>
      </form>
      <button className="start-btn" onClick={handleGameStart}>
        Start Quiz
      </button>
    </div>
  );
};

export default Settings;
