import "./Contact.css"
export default function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <form className="contact-form">
        <input type="text" id="name" placeholder="Pepito"></input>
        <textarea placeholder="Lorem ipsum" id="message"></textarea>
        <button type="submit">Submit</button>
      </form>
    </section>
  )
}
