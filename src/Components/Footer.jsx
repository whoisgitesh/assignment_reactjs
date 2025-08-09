import React from "react";
import ReactDOM from "react-dom/client";
const companyLinks = [
  { name: "Innovations", href: "#" },
  { name: "Business Services", href: "#" },
  { name: "Financial services", href: "#" },
  { name: "Lejhro Recruiter", href: "#" },
  { name: "About", href: "#" },
  { name: "Blogs", href: "#" },
];
const programLinks = [{ name: "Lejhro Bootcamp", href: "#" }];
const supportLinks = [
  { name: "Contact", href: "#" },
  { name: "Terms of Use", href: "#" },
  { name: "Privacy Statement", href: "#" },
];
const socialLinks = [
  {
    name: "Twitter",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.46 5.92c-.8.36-1.67.6-2.58.71a4.48 4.48 0 0 0 1.97-2.48 8.94 8.94 0 0 1-2.83 1.08A4.48 4.48 0 0 0 11.1 9.03c0 .35.04.7.11 1.03A12.7 12.7 0 0 1 3.1 5.13a4.48 4.48 0 0 0 1.39 5.98c-.73-.02-1.42-.22-2.02-.56v.06a4.48 4.48 0 0 0 3.6 4.4c-.34.09-.7.14-1.07.14-.26 0-.51-.02-.76-.07a4.48 4.48 0 0 0 4.18 3.11A9 9 0 0 1 2 19.54a12.7 12.7 0 0 0 6.88 2.02c8.26 0 12.78-6.84 12.78-12.78 0-.2 0-.39-.01-.58.88-.64 1.64-1.44 2.25-2.35z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 20h-3v-11h3v11zm-1.5-12.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76c.97 0 1.75.79 1.75 1.76s-.78 1.76-1.75 1.76zm15.25 12.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-11h2.89v1.5h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.56v6.48z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.112C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.386.574A2.994 2.994 0 0 0 .502 6.186C0 8.072 0 12 0 12s0 3.928.502 5.814a2.994 2.994 0 0 0 2.112 2.112C4.5 20.5 12 20.5 12 20.5s7.5 0 9.386-.574a2.994 2.994 0 0 0 2.112-2.112C24 15.928 24 12 24 12s0-3.928-.502-5.814zM9.75 15.5v-7l6.5 3.5-6.5 3.5z" />
      </svg>
    ),
  },
];
const Footer = () => {
  return (
    <footer className="border-t-4 border-blue-600 bg-white pt-10 pb-20 mt-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left mb-8 space-x-8">
          {/* Company */}
          <div>
            <h3 className="font-bold text-3xl mb-4 ">Company</h3>
            <ul className="space-y-1 ">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-800 hover:text-blue-600"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Programs */}
          <div>
            <h3 className="font-bold text-3xl mb-2">Programs</h3>
            <ul className="space-y-1">
              {programLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-800 hover:text-blue-600"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Support */}
          <div>
            <h3 className="font-bold text-3xl mb-2">Support</h3>
            <ul className="space-y-1">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-800 hover:text-blue-600"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Connect with us */}
          <div>
            <h3 className="font-bold text-3xl mb-2">Connect with us</h3>
            <div className="flex space-x-6 mt-5  ">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href="#"
                  aria-label={link.name}
                  className="text-gray-800 hover:text-blue-600"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center text-gray-700 text-sm mt-25 align-text-bottom">
          © {new Date().getFullYear()} LEJHRO. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};
export default Footer;
