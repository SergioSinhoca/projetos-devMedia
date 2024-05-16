import "./globals.css";
import Topo from "@/components/Topo";



export const metadata = {
  title: "Rotas - Exemplo Prático",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Topo />
        {children}
      </body>
    </html>
  );
}
