import "./globals.css";

export const metadata = {
  title: "Custom Email Sender",
  description: "Send custom HTML emails using SendGrid",
  icons: {
    icon: "/favicon.ico", // favicon file in public folder
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100" suppressHydrationWarning >{children}</body>
    </html>
  );
}
