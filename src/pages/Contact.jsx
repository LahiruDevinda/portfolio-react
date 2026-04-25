import ContactForm from '../components/ContactForm';
import '../styles/contact.css';

export default function Contact() {
  return (
    <main className="main">
      <section className="title">
        <div className="heading">Contact</div>
        <div className="sub-heading">
          Feel free to reach out to me for any inquiries, collaborations, or just to say hello! I'm always open to connecting with fellow professionals and enthusiasts in the industry.
        </div>
      </section>

      <section className="contact-content">
        <ContactForm />

        <div className="contact-gif">
          <img className="contact-gif-image" src="/images/gif/gif.gif" alt="Contact animation" />
        </div>
      </section>
    </main>
  );
}

