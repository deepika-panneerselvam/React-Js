import React from "react";
import ReactDOM from "react-dom";

const main = (
  <div className="navbar">
    <a href="#books">Books</a>
    <a href="#quizzes">Quizzes</a>
    <a href="#snippets">Snippets</a>
    <a href="#tools">Tools</a>
    <a href="#Game">String Functions</a>

    <div className="footer">
      <p>Thank you</p>
    </div>
  </div>
);

const body = (
  <div className="Body">
    <h1>welcome</h1>
    <h1>
      Where we are, <br />Building Software is Fast, <br />with No Compromise
    </h1>
    <div className="row">
      <div className="leftcolumn">
        <div className="card">
          <h2>TITLE HEADING</h2>
          <h5>Title description, Dec 7, 2017</h5>
          <div className="fakeimg" style={{ height: "200px" }}>
            Image
          </div>
          <p>Some text..</p>
          <p>
            Sunt in culpa qui officia deserunt mollit anim id est laborum
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco.
          </p>
        </div>
        <div className="card">
          <h2>TITLE HEADING</h2>
          <h5>Title description, Sep 2, 2017</h5>
          <div className="fakeimg" style={{ height: "200px" }}>
            Image
          </div>
          <p>Some text..</p>
          <p>
            Sunt in culpa qui officia deserunt mollit anim id est laborum
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco.
          </p>
        </div>
      </div>
      <div className="rightcolumn">
        <div className="card">
          <h2>About Me</h2>
          <div className="fakeimg" style={{ height: "100px" }}>
            Image
          </div>
          <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
        </div>
        <div className="card">
          <h3>Popular Post</h3>
          <div className="fakeimg">Image</div>
          <br />
          <div className="fakeimg">Image</div>
          <br />
          <div className="fakeimg">Image</div>
        </div>
        <div className="card">
          <h3>Follow Me</h3>
          <p>Some text..</p>
        </div>
      </div>
    </div>
  </div>
);

const body1 = (
  <div className="bg-text">
    <h1>I am John Doe</h1>
    <p>And I'm a Photographer</p>
  </div>
);

const Card = () => (
  <div className="card">
    <img
      src="C:\Users\deepika.p\OneDrive - Xebia\desktop\React Js\Exercise\444.jpg"
      alt="Avatar"
      style={{ width: "100%" }}
    />
    <div className="container">
      <h4>
        <b>John Doe</b>
      </h4>
      <p>Architect & Engineer</p>
    </div>
  </div>
);

const Parent = () => (
  <div>
    {main}
    {body}
    {body1}
    <Card />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Parent />);
