import React from "react";
import "./style.css";

const App: React.FC = () => {
  return (
    <html>
      <h1>Filfai</h1>
      <h1>Main projects</h1>
      <div
        className="multi-row"
        style={{
          justifyContent: "center",
          justifyItems: "center",
          alignContent: "center",
          alignItems: "center",
          gap: 80,
        }}
      ></div>

      <h1>Curriculum</h1>
      <div
        className="multi-row"
        style={{
          justifyContent: "center",
          justifyItems: "center",
          alignContent: "center",
          alignItems: "center",
          gap: 80,
        }}
      >
        <div className="column" style={{ gap: 10 }}>
          <img src="/assets/curriculum.png" alt="" height="400" />
          <button>Download</button>
        </div>
        <div
          className="multi-row"
          style={{
            justifyContent: "space-evenly",
            justifyItems: "space-evenly",
            alignContent: "center",
            alignItems: "center",
            gap: 40,
          }}
        >
          <div className="column" style={{ gap: 10 }}>
            <div
              className="row"
              style={{
                alignContent: "start",
                alignItems: "start",
                gap: 10,
              }}
            >
              <img src="/assets/it.png" alt="" width="50" height="50" />
              <p>Italian</p>
            </div>
            <div
              className="row"
              style={{
                alignContent: "start",
                alignItems: "start",
                gap: 10,
              }}
            >
              <img src="/assets/fr.png" alt="" width="50" height="50" />
              <p>French</p>
            </div>
            <div
              className="row"
              style={{
                alignContent: "start",
                alignItems: "start",
                gap: 10,
              }}
            >
              <img src="/assets/en.png" alt="" width="50" height="50" />
              <p>English</p>
            </div>
          </div>
          <div className="column" style={{ gap: 10 }}>
            <div
              className="row"
              style={{
                alignContent: "start",
                alignItems: "start",
                gap: 10,
              }}
            >
              <img src="/assets/java.png" alt="" width="50" height="50" />
              <p>Java</p>
            </div>
            <div
              className="row"
              style={{
                alignContent: "start",
                alignItems: "start",
                gap: 10,
              }}
            >
              <img src="/assets/c.png" alt="" width="50" height="50" />
              <p>C</p>
            </div>
            <div
              className="row"
              style={{
                alignContent: "start",
                alignItems: "start",
                gap: 10,
              }}
            >
              <img src="/assets/sql.png" alt="" width="50" height="50" />
              <p>SQL</p>
            </div>
            <div
              className="row"
              style={{
                alignContent: "start",
                alignItems: "start",
                gap: 10,
              }}
            >
              <img src="/assets/js.png" alt="" width="50" height="50" />
              <p>JavaScript</p>
            </div>
            <div
              className="row"
              style={{
                alignContent: "start",
                alignItems: "start",
                gap: 10,
              }}
            >
              <img src="/assets/html.png" alt="" width="50" height="50" />
              <p>HTML 5</p>
            </div>
            <div
              className="row"
              style={{
                alignContent: "start",
                alignItems: "start",
                gap: 10,
              }}
            >
              <img src="/assets/css.png" alt="" width="50" height="50" />
              <p>CSS</p>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <h2>Contact me</h2>
      </footer>
    </html>
  );
};

export default App;
