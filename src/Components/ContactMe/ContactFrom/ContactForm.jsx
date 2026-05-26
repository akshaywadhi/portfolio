import { useState } from "react";
import "./ContactForm.css";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";

export default function ContactForm() {
  const { register, reset, handleSubmit } = useForm();
  const [result, setResult] = useState(null);
  const accessKey = "17be182f-b4e2-4fa1-8666-d26c9e77aacf";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "Enquiry On akshaywadhi.in",
      subject: "New Contact Message from your Website",
    },
    onSuccess: (msg) => {
      setResult(msg);
      reset();
    },
    onError: (msg) => setResult(msg),
  });

  return (
    <div className="contact-form-content bento-card">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Your Name" {...register("name", { required: true })} />
        <input type="email" placeholder="Your Email" {...register("email", { required: true })} />
        <textarea placeholder="Your Message" rows={5} {...register("message", { required: true })} />
        <button type="submit">Send Message</button>
      </form>
      {result && <p className="form-result">{result}</p>}
    </div>
  );
}
