'use client'
import type { Metadata } from "next";
import localFont from "next/font/local";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import Navbar from "./Navbar/Navbar";
import { Provider } from "react-redux";
import {store} from "./redux/reduxStore";
import Providers from "./providers";



export default function RootLayout({children}:{ children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>

       <Providers>
       {children}
       </Providers>
        
      </body>
    </html>
  );
}
