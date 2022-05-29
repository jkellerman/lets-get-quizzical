const Settings = () => {
  return (
    <div className="settings-container">
      <h1>Let's Get Quizzical</h1>
      <form>
        <label htmlFor="category">Select Category:</label>
        <br />
        <select id="category">
          <option>Any category</option>
          <option>General Knowledge</option>
          <option>Entertainment: Books</option>
          <option>Entertainment: Film</option>
          <option>Entertainment: Music</option>
          <option>Entertainment: Musicals &amp; Threatres</option>
          <option>Entertainment: Television</option>
          <option>Entertainment: Video Games</option>
          <option>Entertainment: Board Games</option>
          <option>Science &amp; Nature</option>
          <option>Science: Computers</option>
          <option>Science: Mathematics</option>
          <option>Mythology</option>
          <option>Sports</option>
          <option>Geography</option>
          <option>History</option>
          <option>Politics</option>
          <option>Art</option>
          <option>Celebrities</option>
          <option>Animals</option>
          <option>Vehicles</option>
          <option>Entertainment: Comics</option>
          <option>Science: Gadgets</option>
          <option>Entertainment: Japanese Anime &amp; Manga</option>
          <option>Entertainment: Cartoon &amp; Animations</option>
        </select>

        <label htmlFor="difficulty">Select Difficulty:</label>
        <br />
        <select id="difficulty">
          <option>Any Difficulty</option>
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>

        <label htmlFor="type">Select Type:</label>
        <br />
        <select id="type">
          <option>Any Type</option>
          <option>Multiple Choice</option>
          <option>True/False</option>
        </select>
      </form>
      <button className="start-btn">Start Quiz</button>
    </div>
  );
};

export default Settings;
