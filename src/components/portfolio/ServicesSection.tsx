import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ArrowRight } from "lucide-react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    interest: "",
    budget: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    emailjs
      .send(
        "service_f30uz1d", // EmailJS Service ID
        "template_fqvm4bd", // EmailJS Template ID
        {
          from_email: formData.email,
          phone: formData.phone,
          interest: formData.interest,
          budget: formData.budget,
          message: formData.message,
          to_email: "atheek163@gmail.com", // destination Gmail
        },
        "X7kLJwPVPOGqeA0QC" // EmailJS Public Key
      )
      .then(
        () => {
          setStatus("success");
          setFormData({
            email: "",
            phone: "",
            interest: "",
            budget: "",
            message: "",
          });

          // Reset back to idle after 3s
          setTimeout(() => setStatus("idle"), 3000);
        },
        (error) => {
          console.error("Email send error:", error);
          setStatus("error");

          // Reset back to idle after 3s
          setTimeout(() => setStatus("idle"), 3000);
        }
      );
  };

  return (
    <section id="contact" className="bg-gray-50 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 mb-12">
          <div>
            <p className="text-sm uppercase tracking-wide text-gray-500">
              Contact Me
            </p>
            <h2 className="text-[60px] md:text-[100px] text-black font-[400] font-sulphur tracking-tighter md:tracking-tight">
              Get In Touch
            </h2>
          </div>
          <a
            href="mailto:atheek163@gmail.com"
            className="px-5 py-2 w-[33vh] md:w-[35vh] border rounded-full text-sm text-gray-700 hover:bg-gray-100 transition"
          >
            Mail me at: atheek163@gmail.com
          </a>
        </div>


        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8 font-poppins">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block mb-2 text-gray-800 text-[20px] md:text-[24px] font-poppins">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="janesmith@email.com"
                className="w-full border-b border-gray-300 bg-transparent focus:outline-none focus:border-black py-2"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-800 text-[20px] md:text-[24px] font-poppins">
                Your Phone
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="01-234-5678"
                className="w-full border-b border-gray-300 bg-transparent focus:outline-none focus:border-black py-2"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block mb-2 text-gray-800 text-[20px] md:text-[24px] font-poppins">
                I'm interested in...
              </label>
              <select
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                className="w-full border-b border-gray-300 text-black bg-transparent focus:outline-none focus:border-black py-2"
              >
                <option value="">Select...</option>
                <option value="Web Development">Web Development</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Ecommerce Site">Ecommerce Website</option>
              </select>
            </div>
            <div>
              <label className="block mb-2 text-gray-800 text-[20px] md:text-[24px] font-poppins">
                Your Budget
              </label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full border-b border-gray-300 bg-transparent text-black focus:outline-none focus:border-black py-2"
              >
                <option value="">Select...</option>
                <option value="$1000 - $3000">$1000 - $3000</option>
                <option value="$3000 - $7000">$3000 - $7000</option>
                <option value="$7000+">$7000+</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block mb-2 text-gray-800 text-[20px] md:text-[24px] font-poppins">
              More About The Project
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type here..."
              className="w-full border-b border-gray-300 bg-transparent text-black focus:outline-none focus:border-black py-2 h-24"
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="group flex w-full max-w-[280px] items-center  justify-between bg-zinc-900 text-white pl-6 pr-2 py-2 rounded-full hover:bg-zinc-800 transition-colors duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="font-[400] font-poppins text-base">
              {status === "idle" && "Send Request"}
              {status === "loading" && "Sending..."}
              {status === "success" && "Sent "}
              {status === "error" && "Failed "}
            </span>

            <div
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white 
               transform transition-transform duration-300 ease-in-out 
               group-hover:translate-x-1"
            >
              <ArrowRight className="h-5 w-5 text-zinc-900" />
            </div>
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
