/* eslint-disable @next/next/no-head-element */
import localFont from "@next/font/local";
import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

const iosevka = localFont({ src: "./fonts/iosevka-regular.woff2" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={iosevka.className}>
      <head>
        <title>eriksimon.dev</title>
      </head>
      <body className="bg-green text-yellow text-lg px-4 container sm:px-[20%] sm:max-w-none mx-auto">
        {children}
      </body>
    </html>
  );
}
