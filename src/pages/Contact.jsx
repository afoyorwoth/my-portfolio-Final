
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setError("Please complete all fields.");
      setStatus("error");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch(
        "https://formspree.io/f/mzerdqek",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name.trim(),
            email: formData.email.trim(),
            message: formData.message.trim(),
          }),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.errors?.[0]?.message ||
            "Unable to send your message. Please try again."
        );
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      setError(
        err.message || "Something went wrong. Please try again."
      );
      setStatus("error");
    }
  }

  return (
    <section className="min-h-screen px-6 md:px-16 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-brand-gold uppercase tracking-[0.3em] text-sm font-semibold mb-4">
            Get in touch
          </p>

          <h1 className="font-heading text-4xl md:text-6xl text-brand-burgundy dark:text-[#E8B7C8] mb-6">
            Let's Connect
          </h1>

          <p className="text-brand-muted dark:text-[#E0D6D2] text-lg max-w-2xl mx-auto leading-relaxed">
            Have a project in mind, an opportunity to discuss, or simply
            want to say hello? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact information */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-brand-dark dark:text-brand-lighttext mb-6">
              Let's talk
            </h2>

            <p className="text-brand-muted dark:text-[#E0D6D2] leading-relaxed mb-8">
              You can reach me through any of the contact details below.
              I'm open to professional opportunities, collaborations and
              meaningful conversations.
            </p>

            <div className="space-y-5">
              <a
                href="mailto:afoyorwoth.patricia4@gmail.com"
                className="block p-6 rounded-2xl border border-brand-gold/30 bg-white dark:bg-[#292421] hover:border-brand-gold transition"
              >
                <p className="text-brand-gold text-sm font-semibold uppercase tracking-wider mb-2">
                  Email
                </p>
                <p className="text-brand-dark dark:text-brand-lighttext break-words">
                  afoyorwoth.patricia4@gmail.com
                </p>
              </a>

              <a
                href="tel:+256785799115"
                className="block p-6 rounded-2xl border border-brand-gold/30 bg-white dark:bg-[#292421] hover:border-brand-gold transition"
              >
                <p className="text-brand-gold text-sm font-semibold uppercase tracking-wider mb-2">
                  Phone
                </p>
                <p className="text-brand-dark dark:text-brand-lighttext">
                  +256 785 799 115
                </p>
              </a>

              <a
                href="https://www.linkedin.com/in/patricia-afoyorwoth"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 rounded-2xl border border-brand-gold/30 bg-white dark:bg-[#292421] hover:border-brand-gold transition"
              >
                <p className="text-brand-gold text-sm font-semibold uppercase tracking-wider mb-2">
                  LinkedIn
                </p>
                <p className="text-brand-dark dark:text-brand-lighttext">
                  Connect with me on LinkedIn
                </p>
              </a>

              <a
                href="https://github.com/afoyorwoth/my-portfolio-Final"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 rounded-2xl border border-brand-gold/30 bg-white dark:bg-[#292421] hover:border-brand-gold transition"
              >
                <p className="text-brand-gold text-sm font-semibold uppercase tracking-wider mb-2">
                  GitHub
                </p>
                <p className="text-brand-dark dark:text-brand-lighttext">
                  Explore my projects on GitHub
                </p>
              </a>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-white dark:bg-[#292421] border border-brand-gold/30 rounded-3xl p-6 md:p-10 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl text-brand-dark dark:text-brand-lighttext mb-3">
              Send me a message
            </h2>

            <p className="text-brand-muted dark:text-[#E0D6D2] mb-8">
              Fill in the form below and I'll get back to you.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-brand-dark dark:text-brand-lighttext font-medium mb-2"
                >
                  Your Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-brand-gold/40 bg-brand-cream dark:bg-[#1F1B1D] text-brand-dark dark:text-brand-lighttext focus:outline-none focus:ring-2 focus:ring-brand-gold"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-brand-dark dark:text-brand-lighttext font-medium mb-2"
                >
                  Your Email
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-brand-gold/40 bg-brand-cream dark:bg-[#1F1B1D] text-brand-dark dark:text-brand-lighttext focus:outline-none focus:ring-2 focus:ring-brand-gold"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-brand-dark dark:text-brand-lighttext font-medium mb-2"
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  rows="6"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-brand-gold/40 bg-brand-cream dark:bg-[#1F1B1D] text-brand-dark dark:text-brand-lighttext focus:outline-none focus:ring-2 focus:ring-brand-gold resize-y"
                />
              </div>

              {error && (
                <p
                  role="alert"
                  className="text-red-600 dark:text-red-400 text-sm"
                >
                  {error}
                </p>
              )}

              {status === "success" && (
                <p
                  role="status"
                  className="text-green-700 dark:text-green-400 text-sm"
                >
                  Thank you! Your message has been sent. I'll get back to you soon.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full bg-brand-burgundy text-white px-7 py-4 rounded-full font-semibold hover:bg-brand-gold transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "submitting"
                  ? "Sending..."
                  : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
