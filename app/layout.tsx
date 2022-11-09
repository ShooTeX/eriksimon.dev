/* eslint-disable @next/next/no-head-element */
import localFont from "@next/font/local";
import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

const iosevka = localFont({
  src: "./fonts/iosevka-regular.woff2",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={iosevka.className}>
      <head>
        <title>eriksimon.dev</title>
        <meta name="theme-color" content="#FCBF49" />
        <meta name="msapplication-TileColor" content="#FCBF49" />
      </head>
      <body className="bg-green text-yellow text-3xl xl:text-lg px-4 container xl:px-[20%] xl:max-w-none mx-auto">
        {children}
      </body>
    </html>
  );
}
