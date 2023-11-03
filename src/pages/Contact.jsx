export default function Contact() {
  return (
    <div className="main">
      <h1>Contact Me</h1>
      <div className="contactDiv">
        <form action="">
          <div className="formDiv">
            {/* name */}
            <div className="contactRow">
              <div className="contactLeft">
                <label htmlFor="name">Name</label>
              </div>
              <div className="contactRight">
                <input className="textInput" type="text" placeholder="Enter a name" required />
              </div>
            </div>
            {/* email */}
            <div className="contactRow">
              <div className="contactLeft">
                <label htmlFor="email">Email</label>
              </div>
              <div className="contactRight">
                <input className="textInput" type="email" placeholder="example@email.com" required />
              </div>
            </div>
            {/* message */}
            <div className="contactRow">
              <div className="contactLeft">
                <label htmlFor="message">Message</label>
              </div>
              <div className="contactRight">
                <textarea className="textInput" type="text" placeholder="Enter a message" required />
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
