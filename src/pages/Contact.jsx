export default function Contact() {
  return (
    <div className="main">
      <h1>Contact Me</h1>
      <div className="contactDiv">
        <form action="">
          <div className="contactRow">
            <label className="leftCol" htmlFor="">Name</label>
            <input className="rightCol" placeholder="Your Name" type="text" required />
          </div>
          <div className="contactRow">
            <label className="leftCol" htmlFor="">Email</label>
            <input className="rightCol" placeholder="example@email.com" type="text" required />
          </div>
          <div className="contactRow">
            <label className="leftCol" htmlFor="">Message</label>
            <textarea className="rightCol" placeholder="Enter a message"></textarea>
          </div>
        </form>
      </div>
    </div>
  );
}
