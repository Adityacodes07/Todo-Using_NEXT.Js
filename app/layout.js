
import "./globals.css";
import Navbar from "@/components/Navbar";
export const metadata = {
  title: "My Todo App",
  icons: {
    icon: "/adifavicon.ico",
  },
};





export default function RootLayout({ children }) {
  return (
  <>
     <html lang="en">
      <body className="bg-gray-100">
        <Navbar />
        <div className="p-6">{children}</div>
      </body>
    </html>
  
  
  
    
    </>
  );
}
