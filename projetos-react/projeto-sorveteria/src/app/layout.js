import "./globals.css";
import Topo from "@/componentes/topo/Topo";
import Rodape from "@/componentes/rodape/Rodape";



export const metadata = {
  title: "Gelateria",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Topo />
        {children}
        <Rodape />
      </body>
    </html>
  );
}
