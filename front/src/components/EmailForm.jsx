"use client"

import { useState } from "react";
import { Mail, Sparkles, Send, Code } from "lucide-react";

// Mock API function
const sendEmail = async (data) => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return { data: { message: "Email sent successfully! ✨" } };
};

export default function EmailForm() {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [html, setHtml] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!to || !subject || !html) return alert("All fields are required!");
    setLoading(true);

    try {
      const res = await sendEmail({ to, subject, html });
      alert(res.data.message);
      setTo(""); 
      setSubject(""); 
      setHtml("");
    } catch (err) {
      alert(err.response?.data?.message || "Error sending email");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-3xl">
        <div className="bg-white border-2 border-gray-200 rounded-3xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-black p-6 sm:p-8 border-b-2 border-gray-200">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Send Email
              </h2>
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <p className="text-center text-gray-300 text-xs sm:text-sm">Craft and send custom HTML emails</p>
          </div>

          {/* Form */}
          <div className="p-6 sm:p-8 bg-white">
            <div className="space-y-5 sm:space-y-6">
              {/* Recipient Email */}
              <div className="group">
                <label className="flex items-center gap-2 text-black font-semibold mb-3 text-xs sm:text-sm uppercase tracking-wide">
                  <Mail className="w-4 h-4 text-black" />
                  Recipient Email
                </label>
                <input
                  type="email"
                  placeholder="recipient@example.com"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  className="w-full px-4 py-3 sm:py-4 bg-white border-2 border-gray-300 rounded-xl text-black placeholder-gray-400 focus:outline-none focus:border-black transition-all duration-300 text-sm sm:text-base"
                />
              </div>

              {/* Subject */}
              <div className="group">
                <label className="flex items-center gap-2 text-black font-semibold mb-3 text-xs sm:text-sm uppercase tracking-wide">
                  <Sparkles className="w-4 h-4 text-black" />
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Enter your subject line..."
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-4 py-3 sm:py-4 bg-white border-2 border-gray-300 rounded-xl text-black placeholder-gray-400 focus:outline-none focus:border-black transition-all duration-300 text-sm sm:text-base"
                />
              </div>

              {/* HTML Content */}
              <div className="group">
                <label className="flex items-center gap-2 text-black font-semibold mb-3 text-xs sm:text-sm uppercase tracking-wide">
                  <Code className="w-4 h-4 text-black" />
                  HTML + CSS Content
                </label>
                <textarea
                  rows={10}
                  placeholder="<div style='color: #333; padding: 20px;'>&#10;  <h1>Hello World!</h1>&#10;  <p>Your custom HTML content here...</p>&#10;</div>"
                  value={html}
                  onChange={(e) => setHtml(e.target.value)}
                  className="w-full px-4 py-3 sm:py-4 bg-white border-2 border-gray-300 rounded-xl text-black placeholder-gray-400 focus:outline-none focus:border-black transition-all duration-300 font-mono text-xs sm:text-sm resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="group relative w-full py-4 sm:py-5 bg-black hover:bg-gray-800 text-white font-bold rounded-xl shadow-lg transition-all duration-300 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed text-base sm:text-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <div className="relative flex items-center justify-center gap-3">
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      <span>Send Email</span>
                    </>
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Subtle decorative shadow elements */}
        <div className="absolute -top-4 -right-4 w-20 h-20 sm:w-24 sm:h-24 bg-black/5 rounded-full blur-2xl pointer-events-none"></div>
        <div className="absolute -bottom-4 -left-4 w-24 h-24 sm:w-32 sm:h-32 bg-black/5 rounded-full blur-2xl pointer-events-none"></div>
      </div>
    </div>
  );
}