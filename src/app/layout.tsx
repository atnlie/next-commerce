import "./globals.css";
import NavBar from "./components/Navbar/Navbar";
import AuthProvider from "./context/AuthProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <div>
            <NavBar />
            {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
