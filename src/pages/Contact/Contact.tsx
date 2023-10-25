import { SocialMedia } from "../../components/Contact/SocialMedia";
import "./Contact.css";

export default function Contact() {
  const forms = [
    { name: "First Name" },
    { name: "Last Name" },
    { name: "Email" },
  ];

  return (
    <>
      <div className="contact-container">
        <div className="contact-form">
          <h2 style={{ fontSize: "2.4em", textAlign: "center" }}>
            Send Us Email Here
          </h2>
          <form className="form" action="">
            {forms.map((form) => (
              <div key={form.name}>
                <label style={{ fontSize: "1.5em", marginTop: "2em" }}>
                  {form.name}
                </label>{" "}
                <br />
                <input type="email" name={form.name} placeholder={form.name} />
              </div>
            ))}
          </form>
          <button
            style={{
              marginTop: "-2em",
              fontSize: "1.5em",
              padding: "0.5em",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </div>

        <div style={{ marginTop: "2em" }}>
          <SocialMedia />
        </div>
      </div>
    </>
  );
}
