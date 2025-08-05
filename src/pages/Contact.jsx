export default function Contact() {
  return (
    <section id="section6">
      <h1>Contact</h1>
      <div className="contacte hidden" id="contact">
        <form id="contact-form">
          <div className="inputcon">
            <label htmlFor="name">Nom</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="inputcon">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="inputcon">
            <label htmlFor="message" id="ms">
              Message
            </label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button id="submit" type="submit">
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
}
