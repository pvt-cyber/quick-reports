import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ToastProvider from "./providers/ToastProviders";
import Link from "next/link";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quick-Report | Protect Your Community",
  description: "Report scams, protect others, and promote trust in business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="bing-uet"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,t,r,u){
                var f,n,i;
                w[u]=w[u]||[];
                f=function(){
                  var o={ti:"97226517"};
                  o.q=w[u];
                  w[u]=new UET(o);
                  w[u].push("pageLoad");
                };
                n=d.createElement(t);
                n.src=r;
                n.async=1;
                n.onload=n.onreadystatechange=function(){
                  var s=this.readyState;
                  s && s!=="loaded" && s!=="complete"||(f(),n.onload=n.onreadystatechange=null)
                };
                i=d.getElementsByTagName(t)[0];
                i.parentNode.insertBefore(n,i);
              })(window,document,"script","https://bat.bing.com/bat.js","uetq");
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ToastProvider />
        {children}
        {/* Footer */}
        <footer className="bg-gray-900 py-12 border-t border-gray-800">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div>
                <div className="text-3xl font-bold text-white mb-4">
                  Quiet<span className="text-red-500">-REPORT</span>
                </div>
                <p className="text-gray-400 mb-6">
                  Protecting communities worldwide from scams and fraudulent
                  activities.
                </p>
                <div className="flex space-x-4">
                  {/* Social icons would go here */}
                </div>
              </div>

              <div>
                <h3 className="text-white font-bold mb-6">Quick Links</h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/report/create"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Report a Scam
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/reports"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Browse Reports
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/how-it-works"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      How It Works
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/success-stories"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Success Stories
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-bold mb-6">Resources</h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/resources"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Safety Guides and Tools
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/faq"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Blog
                    </Link>
                  </li>
                  {/* <li>
                    <Link
                      href="/tools"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Tools
                    </Link>
                  </li> */}
                </ul>
              </div>

              <div>
                <h3 className="text-white font-bold mb-6">Legal</h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/privacy"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/report-abuse"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Report Abuse
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
              <p>
                © {new Date().getFullYear()} Quiet-Report. All rights reserved.
              </p>
              <p className="mt-2 text-sm">
                Protecting communities worldwide since 2024
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
