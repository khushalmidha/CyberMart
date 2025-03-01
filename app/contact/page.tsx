"use client";

import { FaEnvelope, FaGithub, FaMapMarkerAlt, FaPhone, FaLinkedin } from "react-icons/fa";

export default function ContactPage() {
  return (
    <main className="container py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      <p className="text-muted-foreground text-lg mb-6 text-center font-semibold">
        Have questions? Want to collaborate? Reach out to us!
      </p>

      <section className="flex flex-col items-center space-y-6">

        <div className="flex items-center space-x-4">
          <FaGithub className="text-2xl text-gray-800" />
          <span className="text-lg font-semibold">GitHub:</span>
          <a
            href="https://github.com/khushalmidha"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-semibold hover:underline"
          >
            khushalmidha
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <FaLinkedin className="text-2xl text-blue-600" />
          <span className="text-lg font-semibold">Linkedin:</span>
          <a
            href="https://www.linkedin.com/in/khushal-midha-260bb3288/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-semibold hover:underline"
          >
            Khushal Midha
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <FaMapMarkerAlt className="text-2xl text-red-500" />
          <span className="text-lg font-semibold">Location:</span>
          <span className="text-muted-foreground font-semibold">India</span>
        </div>
      </section>

      <div className="mt-12 text-center">
        <p className="text-lg font-semibold text-muted-foreground">
          Stay connected for updates and inquiries. We’d love to hear from you!
        </p>
      </div>
    </main>
  );
}
