"use client";

import { useState } from "react";
import Layout from "../components/Layout";
import Input from "./component/InputComponent";

function ContactPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleOnClick = () => {
    console.log("Send");
    const to = "Nguyenthien11082005@gmail.com";
    const subject = encodeURIComponent(form.subject);
    const body = encodeURIComponent(
      `Name: ${form.firstName} ${form.lastName}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`;
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    });
    window.open(mailtoLink, "_blank");
  };

  return (
    <Layout>
      <div className="w-full h-auto bg-[#e6dace]">
        <div className="w-full h-60 flex items-center justify-center gap-2">
          <div className="h-5 w-5 bg-[#0050ff]" />
          <h1 className="text-4xl font-bold">Let&apos;s talk</h1>
        </div>
        <div className="h-auto w-full pb-16 flex justify-center">
          <div className="h-[680px] w-[620px] bg-white shadow-2xl">
            <div className="w-full h-full p-12 flex flex-col justify-between">
              <div className="h-28 flex justify-between gap-10">
                <div className="w-1/2">
                  <Input
                    onChange={handleChange}
                    value={form.firstName}
                    type="text"
                    title="First Name"
                    name="firstName"
                    required
                  />
                </div>
                <div className="w-1/2">
                  <Input
                    onChange={handleChange}
                    value={form.lastName}
                    type="text"
                    title="Last Name"
                    name="lastName"
                    required
                  />
                </div>
              </div>
              <div className="h-28">
                <Input
                  onChange={handleChange}
                  value={form.email}
                  type="text"
                  title="Email"
                  name="email"
                  required
                />
              </div>
              <div className="h-28">
                <Input
                  onChange={handleChange}
                  value={form.subject}
                  type="text"
                  name="subject"
                  title="Subject"
                />
              </div>
              <div className="h-28">
                <Input
                  onChange={handleChange}
                  value={form.message}
                  type="textarea"
                  name="message"
                  title="Message"
                />
              </div>
              <div className="h-28 pt-8">
                <button
                  onClick={handleOnClick}
                  className="h-10 w-28 rounded-3xl bg-[#0050ff] text-white hover:text-black hover:cursor-pointer hover:bg-white border-2 border-[#0050ff]"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ContactPage;
