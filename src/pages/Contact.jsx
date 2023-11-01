export default function Contact() {
  return (
    <div className="main">
      <h1>Contact Me</h1>
      <div className="contactDiv">
        <form action="">
          <div className="formDiv">
            {/* name */}
            <div className="contactRow">
              <div className="colLeft">
                <label htmlFor="name">Name</label>
              </div>
              <div className="colRight">
                <input className="textInput" type="text" required />
              </div>
            </div>
            {/* email */}
            <div className="contactRow">
              <div className="colLeft">
                <label htmlFor="email">Email</label>
              </div>
              <div className="colRight">
                <input className="textInput" type="email" required />
              </div>
            </div>
            {/* message */}
            <div className="contactRow">
              <div className="colLeft">
                <label htmlFor="message">Message</label>
              </div>
              <div className="colRight">
                <textarea className="textInput" type="text" required />
              </div>
            </div>
            {/* submit button */}
            <div class="contactRow">
              <input className="contactBtn btn" type="submit" value="Submit" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
