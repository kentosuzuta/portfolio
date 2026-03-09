import { FiGithub, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-12">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-6 flex gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 transition-colors duration-300 hover:text-white"
            >
              <FiGithub className="h-6 w-6" />
            </a>

            <a
              href="mailto:kento.suzuta.dev@gmail.com"
              className="text-slate-400 transition-colors duration-300 hover:text-white"
            >
              <FiMail className="h-6 w-6" />
            </a>
          </div>

          <p className="flex items-center gap-2 text-center text-slate-400">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
