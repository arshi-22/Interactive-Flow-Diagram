import "./styles/globals.css";
export const metadata = {
  title: "Flow Diagram Animation",
  description: "Interactive multi-step flow diagram with animations",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
