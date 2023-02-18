import "./Contact.css";
export default function Contact() {
  return (
    <form className="contact-form" id='contact'>
      <label htmlFor="name"> Name</label>
      <label htmlFor="message"> Message</label>
      <input type="text" id="name" placeholder="Pepito"></input>
      <textarea placeholder="Lorem ipsum" id="message"></textarea>
      <button type="submit">Submit</button>
    </form>
  );
}
