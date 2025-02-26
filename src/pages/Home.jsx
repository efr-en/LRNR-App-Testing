function Home() {
  return (
    <>
      <div className="lrnr_img">
        <img src="/lrnr.png" alt="lrnr logo" className="mx-auto" />
      </div>
      <h2 className="text-center text-xl mt-4">
        Your guided path to programming enlightenment
      </h2>
      <button className="bg-teal-500 text-white px-6 py-3 m-4">
        Begin Journey
      </button>
      <div className="flex flex-col items-center space-y-4 mt-6">
        <p className="bg-white text-gray-800 p-4 rounded-lg shadow-md max-w-md">
          {" "}
          <strong>Personalized Quizzes</strong>
          Greetings, young padawan. Are you ready to embark on a journey of
          personalized enlightenment through the art of coding? Our app, can
          create custom quizzes that align with your coding skills and
          interests. Whether you are a novice or a master, our system can
          generate questions that will test your proficiency in programming
          languages, tools, and concepts
        </p>
        <p className="bg-white text-gray-800 p-4 rounded-lg shadow-md max-w-md">
          {" "}
          <strong>Rewarding</strong>
            Our app is designed to be both challenging and rewarding, so you can 
            learn new concepts while enjoying the process. With our personalized quiz app,
            you can track your progress, compete with your peers, and discover new areas of expertise.
            The journey of a thousand lines of code begins with a single keystroke
        </p>
        <p className="bg-white text-gray-800 p-4 rounded-lg shadow-md max-w-md">
          {" "}
          <strong>Personal SME</strong>
          Welcome to the path of knowledge. Our app is like having a personal subject matter 
          expert at your side, guiding you on your journey towards wisdom
        </p>
      </div>
    </>
  );
}

export default Home;
