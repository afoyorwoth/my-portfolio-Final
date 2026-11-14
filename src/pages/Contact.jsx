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

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError("Please complete all fields.");
      setStatus("error");
      return;
    }

    setStatus("submitting");

    try {
      // Demo submission until a backend is connected.
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setError("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  return (
    <section className="min-h-screen px-6 md:px-16 py-20">
      <div className="max-w-3xl mx-auto">
        <p className="text-brand-gold uppercase tracking-[0.3em] text-sm font-semibold mb-4">
          Get in touch
        </p>

        <h1 className="font-heading text-4xl md:text-6xl text-brand-burgundy mb-6">
          Let's Connect
        </h1>

        <p className="text-brand-muted text-lg mb-10">
          Have a project idea, opportunity or question?
          I'd be happy to hear from you.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 font-medium">
              Your Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-brand-gold"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 font-medium">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-brand-gold"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-brand-gold"
              placeholder="Write your message..."
            />
          </div>

          {status === "error" && (
            <p role="alert" className="text-red-600">{error}</p>
          )}

          {status === "success" && (
            <p role="status" className="text-green-700">
              Demo submission successful! The form is not connected to an email service yet.
            </p>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="bg-brand-burgundy text-white px-8 py-4 rounded-full hover:bg-brand-dark transition disabled:opacity-60"
          >
            {status === "submitting" ? "Submitting..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
