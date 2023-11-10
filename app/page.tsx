import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TechnologiesRow } from "../components/TechnologiesRow";

export default async function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="my-auto flex space-y-9 flex-col max-w-none xl:max-w-xl">
        <div className="w-fit">
          <div className="inline-flex items-end">
            <span className="text-orange text-8xl xl:text-6xl mr-4">
              {">>"}
            </span>
            <div>
              <span>Hi, I&apos;m</span>
              <h1 className="text-orange text-8xl xl:text-6xl">ERIKSIMON</h1>
            </div>
            <span className="italic">.dev</span>
          </div>
          <div className="flex items-center">
            <div className="h-8 xl:h-4 bg-orange flex-1 mr-3" />
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
            currently <span className="text-red">@air up®</span>
          </span>
          <br />
          <br />
          Highly motivated and ambitious software engineer, experienced in web
          development, and always keen to learn and improve. Code enthusiast
          with a passion for clean code and independent workflow improvement.
          Worked for multiple clients and different unique projects from CMS
          websites to full-fledged web application solutions.
        </p>
        <TechnologiesRow />
      </div>
    </div>
  );
}
