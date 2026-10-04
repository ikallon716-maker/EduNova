import { useState } from "react";
import "./App.css";

const subjects = [
  {
    name: "Mathematics",
    icon: "∑",
    progress: 72,
    topics: ["Algebra", "Quadratic Equations", "Geometry", "Statistics"],
  },
  {
    name: "English",
    icon: "A",
    progress: 58,
    topics: ["Grammar", "Comprehension", "Essay Writing", "Literature"],
  },
  {
    name: "Biology",
    icon: "🧬",
    progress: 41,
    topics: ["Cells", "Nutrition", "Genetics", "Human Reproduction"],
  },
  {
    name: "Physics",
    icon: "⚡",
    progress: 35,
    topics: ["Motion", "Forces", "Energy", "Electricity"],
  },
];

function Dashboard({ setActive }) {
  return (
    <>
      <section className="hero-card">
        <div>
          <p className="eyebrow">TODAY'S GOAL</p>
          <h2>Learn something that moves you forward.</h2>
          <p>Complete one lesson and one quiz today.</p>

          <button
            className="primary"
            onClick={() => setActive("Subjects")}
          >
            Start Learning →
          </button>
        </div>

        <div className="streak">
          <strong>🔥 7</strong>
          <span>day streak</span>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <h2>Your subjects</h2>
            <p className="muted">Continue where you left off.</p>
          </div>

          <button
            className="text-button"
            onClick={() => setActive("Subjects")}
          >
            View all →
          </button>
        </div>

        <div className="subject-grid">
          {subjects.map((subject) => (
            <article className="subject" key={subject.name}>
              <div className="subject-icon">{subject.icon}</div>
              <h3>{subject.name}</h3>
              <p>{subject.progress}% completed</p>

              <div className="progress">
                <span style={{ width: `${subject.progress}%` }} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section two-column">
        <article className="feature-card">
          <div className="feature-icon">🧠</div>

          <h2>AI Tutor</h2>

          <p>
            Stuck on a topic? Ask EduNova to explain it step by step in a way
            you can understand.
          </p>

          <button
            className="primary"
            onClick={() => setActive("AI Tutor")}
          >
            Ask the Tutor →
          </button>
        </article>

        <article className="feature-card">
          <div className="feature-icon">🎯</div>

          <h2>Quick Quiz</h2>

          <p>
            Test what you know and discover where you need more practice.
          </p>

          <button
            className="secondary"
            onClick={() => setActive("Quizzes")}
          >
            Take a Quiz →
          </button>
        </article>
      </section>
    </>
  );
}

function Subjects({ setActive }) {
  const [selectedSubject, setSelectedSubject] = useState(null);

  if (selectedSubject) {
    return (
      <section className="page-card">
        <button
          className="text-button"
          onClick={() => setSelectedSubject(null)}
        >
          ← Back to Subjects
        </button>

        <p className="eyebrow">SUBJECT</p>

        <h2>
          {selectedSubject.icon} {selectedSubject.name}
        </h2>

        <p className="muted">
          Choose a topic to begin learning.
        </p>

        <div className="quiz-list">
          {selectedSubject.topics.map((topic, index) => (
            <div className="quiz-item" key={topic}>
              <div>
                <span>Topic {index + 1}</span>
                <strong>{topic}</strong>
              </div>

              <button
                className="secondary"
                onClick={() =>
                  setActive("Learning", {
                    subject: selectedSubject.name,
                    topic,
                  })
                }
              >
                Learn →
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="page-card">
      <p className="eyebrow">LEARNING</p>

      <h2>Subjects</h2>

      <p className="muted">
        Choose a subject and continue learning.
      </p>

      <div className="subject-grid">
        {subjects.map((subject) => (
          <article className="subject" key={subject.name}>
            <div className="subject-icon">{subject.icon}</div>

            <h3>{subject.name}</h3>

            <p>{subject.progress}% completed</p>

            <div className="progress">
              <span style={{ width: `${subject.progress}%` }} />
            </div>

            <button
              className="secondary"
              onClick={() => setSelectedSubject(subject)}
            >
              View Topics →
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}











function Learning({ lesson, setActive })  if (!lesson) {
    return (
      <section className="page-card">
        <h2>Select a lesson</h2>

        <button
          className="primary"
          onClick={() => setActive("Subjects")}
        >
          Choose Subject →
        </button>
      </section>
    );
  }

  return (
    <section className="page-card">
      <button
        className="text-button"
        onClick={() => setActive("Subjects")}
      >
        ← Back to Subjects
      </button>

      <p className="eyebrow">{lesson.subject}</p>

      <h2>{lesson.topic}</h2>

      <div className="lesson-content">
        <h3>Let's learn this topic.</h3>

        <p>
          EduNova will break this topic into simple explanations,
          examples, and practice questions.
        </p>

        <div className="feature-card">
          <h3>Learning Path</h3>

          <p>1. Understand the concept</p>
          <p>2. Study an example</p>
          <p>3. Practice the idea</p>
          <p>4. Take a quiz</p>
        </div>

        <button
          className="primary"
          onClick={() => setActive("Quizzes")}
        >
          Practice With a Quiz →
        </button>
      </div>
    </section>
  );
}

function AITutor() {
  const [question, setQuestion] = useState("");
  const [asked, setAsked] = useState(false);

  return (
    <section className="page-card tutor">
      <div className="feature-icon">🧠</div>

      <p className="eyebrow">EDUNOVA AI</p>

      <h2>Your AI Tutor</h2>

      <p className="muted">
        Ask a question and EduNova will help you understand the topic.
      </p>

      <div className="chat-box">
        <p>
          <strong>EduNova Tutor</strong>
        </p>

        {!asked ? (
          <p>What topic are you struggling with today?</p>
        ) : (
          <div className="feature-card">
            <strong>You asked:</strong>

            <p>{question}</p>

            <p>
              Great question. In the full AI Tutor, EduNova will
              analyze your question and explain the answer step by step.
            </p>
          </div>
        )}

        <input
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
          placeholder="Example: Explain quadratic equations..."
        />

        <button
          className="primary"
          onClick={() => {
            if (question.trim()) {
              setAsked(true);
            }
          }}
        >
          Ask EduNova →
        </button>
      </div>
    </section>
  );
}

function Quizzes() {
  const [started, setStarted] = useState(false);
  const [selected, setSelected] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const correctAnswer = "12";

  if (!started) {
    return (
      <section className="page-card">
        <p className="eyebrow">PRACTICE</p>

        <h2>Quizzes</h2>

        <p className="muted">
          Test your understanding instead of just memorizing.
        </p>

        <div className="quiz-list">
          <div className="quiz-item">
            <div>
              <span>Mathematics</span>
              <strong>Quick Quiz</strong>
            </div>

            <button
              className="secondary"
              onClick={() => setStarted(true)}
            >
              Start →
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="page-card">
      <p className="eyebrow">MATHEMATICS QUIZ</p>

      <h2>Question 1</h2>

      <p>
        What is the value of 3 × 4?
      </p>

      <div className="quiz-options">
        {["8", "10", "12", "14"].map((option) => (
          <button
            key={option}
            className={selected === option ? "primary" : "secondary"}
            onClick={() => setSelected(option)}
          >
            {option}
          </button>
        ))}
      </div>

      <button
        className="primary"
        disabled={!selected}
        onClick={() => setSubmitted(true)}
      >
        Submit Answer
      </button>

      {submitted && (
        <div className="feature-card">
          {selected === correctAnswer ? (
            <>
              <h3>🎉 Correct!</h3>
              <p>Excellent work. 3 × 4 = 12.</p>
            </>
          ) : (
            <>
              <h3>Keep practicing.</h3>
              <p>
                The correct answer is 12. Don't worry — mistakes are
                part of learning.
              </p>
            </>
          )}
        </div>
      )}
    </section>
  );
}

function Progress() {
  return (
    <section className="page-card">
      <p className="eyebrow">YOUR PERFORMANCE</p>

      <h2>Progress</h2>

      <p className="muted">
        Your learning journey at a glance.
      </p>

      <div className="stats">
        <div>
          <strong>7</strong>
          <span>Day streak</span>
        </div>

        <div>
          <strong>24</strong>
          <span>Lessons</span>
        </div>

        <div>
          <strong>86%</strong>
          <span>Quiz average</span>
        </div>
      </div>
    </section>
  );
}

function App() {
  const [active, setActive] = useState("Dashboard");
  const [lesson, setLesson] = useState(null);

  const openLearning = (data) => {
    setLesson(data);
    setActive("Learning");
  };

  const renderPage = () => {
    if (active === "Subjects") {
      return (
        <Subjects
          setActive={openLearning}
        />
      );
    }

    if (active === "Learning") {
      return (
        <Learning
          lesson={lesson}
          setActive={setActive}
        />
      );
    }

    if (active === "AI Tutor") {
      return <AITutor />;
    }

    if (active === "Quizzes") {
      return <Quizzes />;
    }

    if (active === "Progress") {
      return <Progress />;
    }

    return <Dashboard setActive={setActive} />;
  };

  return (
    <div className="edunova">
      <aside className="sidebar">
        <div className="brand">
          <span>✦</span> EduNova
        </div>

        <nav>
          {[
            "Dashboard",
            "Subjects",
            "AI Tutor",
            "Quizzes",
            "Progress",
          ].map((item) => (
            <button
              key={item}
              className={active === item ? "nav active" : "nav"}
              onClick={() => setActive(item)}
            >
              {item}
            </button>
          ))}
        </nav>

        <button className="nav settings">
          ⚙ Settings
        </button>
      </aside>

      <main className="main">
        <header className="topbar">
          <div>
            <p className="eyebrow">STUDENT LEARNING HUB</p>

            <h1>Good evening, Student 👋</h1>

            <p className="muted">
              Keep learning. Keep building your future.
            </p>
          </div>

          <div className="avatar">S</div>
        </header>

        {renderPage()}
      </main>
    </div>
  );

