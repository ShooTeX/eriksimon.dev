import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="my-auto flex space-y-9 flex-col max-w-xl">
        <div className="w-fit">
          <div className="inline-flex items-end">
            <span className="text-orange text-6xl mr-4">{">>"}</span>
            <div>
              <span>Hi, I&apos;m</span>
              <h1 className="text-orange text-6xl">ERIKSIMON</h1>
            </div>
            <span className="italic">.dev</span>
          </div>
          <div className="flex items-center">
            <div className="h-4 bg-orange flex-1 mr-3" />
            <div className="text-orange flex space-x-3">
              <a href="https://linkedin.com/in/erik-simon-059496173/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://github.com/ShooTeX">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://twitter.com/erikcodes">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </div>
        </div>
        <p>
          <span className="italic">
            currently <span className="text-red">@company</span>
          </span>
          <br />
          <br />
          Highly motivated and ambitious software engineer, experienced in web
          development, and always keen to learn and improve. Code enthusiast
          with a passion for clean code and independent workflow improvement.
          Worked for multiple clients and different unique projects from CMS
          websites to full-fledged web application solutions.
        </p>
        <div className="flex justify-between items-center">
          <Image src="/icons/ts.svg" width={24} height={24} alt="typescript" />
          <Image src="/icons/js.svg" width={24} height={24} alt="javascript" />
          <Image src="/icons/html.svg" width={24} height={24} alt="html" />
          <Image src="/icons/css.svg" width={24} height={24} alt="typescript" />
          <Image
            src="/icons/vimscript.svg"
            width={24}
            height={24}
            alt="vimscript"
          />
          <Image src="/icons/lua.svg" width={24} height={24} alt="lua" />
          <Image src="/icons/shell.svg" width={24} height={24} alt="shell" />
          <Image src="/icons/dart.svg" width={24} height={24} alt="dart" />
          <Image src="/icons/next.svg" width={24} height={24} alt="next" />
          <Image
            src="/icons/angular.svg"
            width={24}
            height={24}
            alt="angular"
          />
          <Image src="/icons/vue.svg" width={24} height={24} alt="vue" />
          <Image
            src="/icons/react-native.svg"
            width={24}
            height={24}
            alt="react-native"
          />
          <Image
            src="/icons/flutter.svg"
            width={24}
            height={24}
            alt="flutter"
          />
          <Image src="/icons/prisma.svg" width={24} height={24} alt="prisma" />
          <Image src="/icons/trpc.svg" width={24} height={24} alt="trpc" />
          <Image
            src="/icons/graphql.svg"
            width={24}
            height={24}
            alt="graphql"
          />
        </div>
      </div>
    </div>
  );
}
