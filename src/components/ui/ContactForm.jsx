import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FadeUp } from "@/components/ui/Motion";

function ContactForm() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        },
      )
      .then(
        (result) => {
          alert("메시지가 전송되었습니다.");

          formRef.current.reset();
          setLoading(false);
        },
        (error) => {
          alert("전송에 실패했습니다.");
          setLoading(false);
        },
      );
  };

  return (
    <div className="relative rounded-xl border border-border-inverse bg-surface-soft px-4.5 py-6">
      <p className="mb-4 text-xl font-bold text-text-inverse">메시지 보내기</p>

      <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-2">
        <label htmlFor="from_name" hidden>
          이름
        </label>
        <input
          id="from_name"
          type="text"
          name="from_name"
          placeholder="이름"
          required
          className="connect-input"
        />
        <label htmlFor="user_email" hidden>
          이메일
        </label>
        <input
          id="user_email"
          type="email"
          name="user_email"
          placeholder="이메일"
          required
          className="connect-input"
        />
        <label htmlFor="message" hidden>
          메시지
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="메시지를 입력하세요..."
          rows={6}
          required
          className="connect-input resize-none"
        />
        {/* 
        <Button
          type="submit"
          size="xl"
          rounded="xs"
          fullWidth
          disabled={loading}
          className="mt-1"
        >
          {loading ? (
            "전송 중..."
          ) : (
            <>
              메시지 전송
              <ArrowIcon size="sm" />
            </>
          )}
        </Button> */}
      </form>
    </div>
  );
}

export default ContactForm;
