import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Loader2, CheckCircle2 } from "lucide-react";
import emailjs from "@emailjs/browser";

import { siteConfig, socialLinks } from "../data/site";
import Inner from "../components/layout/Inner";

const initialForm = {
  name: "",
  email: "",
  message: "",
};

function validate(values) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = "이름 또는 회사명을 입력해주세요.";
  }

  if (!values.email.trim()) {
    errors.email = "이메일을 입력해주세요.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "올바른 이메일 형식이 아닙니다.";
  }

  if (!values.message.trim()) {
    errors.message = "메시지를 입력해주세요.";
  }

  return errors;
}

export default function ContactSection() {
  const formRef = useRef(null);

  const [values, setValues] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const handleChange = (field) => (e) => {
    const value = e.target.value;

    setValues((prev) => ({
      ...prev,
      [field]: value,
    }));

    setErrors((prev) => {
      if (!prev[field]) return prev;

      return {
        ...prev,
        [field]: undefined,
      };
    });

    if (status !== "idle") {
      setStatus("idle");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    const isConfirmed = window.confirm("작성하신 메시지를 전송하시겠습니까?");

    if (!isConfirmed) {
      return;
    }

    setStatus("loading");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        },
      );

      setStatus("success");
      setValues(initialForm);
      setErrors({});

      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");

      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    }
  };

  const fieldClass =
    "w-full border-b border-white/30 bg-transparent pb-2 text-sm text-white placeholder-white/40 outline-none transition focus:border-brand-cyan disabled:cursor-not-allowed disabled:opacity-60";

  const isLoading = status === "loading";

  return (
    <section id="contact">
      <Inner className="grid grid-cols-1 md:grid-cols-[minmax(0,320px)_1fr]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="flex items-center bg-brand-red px-8 py-14 sm:py-20"
        >
          <p className="text-2xl font-extrabold uppercase leading-snug text-black">
            Have I missed
            <br />
            anything good
            <br />
            lately?
            <br />
            Let me know
          </p>
        </motion.div>

        <div className="bg-neutral-900 px-6 py-14 sm:px-10">
          <Inner size="narrow" gutter={false}>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              noValidate
              className="space-y-6"
            >
              {/* Name / Company */}
              <div>
                <label htmlFor="name" className="sr-only">
                  Name or company
                </label>

                <input
                  id="name"
                  name="from_name"
                  type="text"
                  required
                  disabled={isLoading}
                  placeholder="Name / Company *"
                  value={values.name}
                  onChange={handleChange("name")}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={fieldClass}
                />

                {errors.name && (
                  <p
                    id="name-error"
                    className="mt-1 text-xs text-red-400"
                    role="alert"
                  >
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>

                <input
                  id="email"
                  name="user_email"
                  type="email"
                  required
                  disabled={isLoading}
                  placeholder="Email *"
                  value={values.email}
                  onChange={handleChange("email")}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={fieldClass}
                />

                {errors.email && (
                  <p
                    id="email-error"
                    className="mt-1 text-xs text-red-400"
                    role="alert"
                  >
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={3}
                  disabled={isLoading}
                  placeholder="Leave us a message..."
                  value={values.message}
                  onChange={handleChange("message")}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                  className={`resize-none ${fieldClass}`}
                />

                {errors.message && (
                  <p
                    id="message-error"
                    className="mt-1 text-xs text-red-400"
                    role="alert"
                  >
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="inline-flex items-center gap-2 rounded bg-brand-red px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-red/90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isLoading && (
                    <Loader2
                      className="h-4 w-4 animate-spin"
                      aria-hidden="true"
                    />
                  )}

                  {isLoading ? "Sending..." : "Submit"}
                </button>

                <div aria-live="polite">
                  {status === "success" && (
                    <span
                      className="flex items-center gap-1.5 text-sm text-emerald-400"
                      role="status"
                    >
                      <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                      메시지가 전송되었습니다.
                    </span>
                  )}

                  {status === "error" && (
                    <span className="text-sm text-red-400" role="alert">
                      전송에 실패했습니다. 잠시 후 다시 시도해주세요.
                    </span>
                  )}
                </div>
              </div>
            </form>
          </Inner>

          <Inner
            size="narrow"
            gutter={false}
            className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs"
          >
            <div className="leading-normal">
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-white/70 transition hover:text-white"
              >
                {siteConfig.email}
              </a>
              <a
                href={`mailto:${siteConfig.phone}`}
                className="text-white/70 transition hover:text-white"
              >
                <br />
                {siteConfig.phone}
              </a>
            </div>

            {/* <nav aria-label="Social links">
              <ul className="flex flex-wrap gap-4">
                {socialLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold tracking-widest text-white/70 transition hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav> */}
          </Inner>
        </div>
      </Inner>
    </section>
  );
}
