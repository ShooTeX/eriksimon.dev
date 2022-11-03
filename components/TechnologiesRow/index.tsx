import TsIcon from "../../public/icons/ts.svg";
import JsIcon from "../../public/icons/js.svg";
import HtmlIcon from "../../public/icons/html.svg";
import CssIcon from "../../public/icons/css.svg";
import VimscriptIcon from "../../public/icons/vimscript.svg";
import LuaIcon from "../../public/icons/lua.svg";
import ShellIcon from "../../public/icons/shell.svg";
import DartIcon from "../../public/icons/dart.svg";
import NextIcon from "../../public/icons/next.svg";
import AngularIcon from "../../public/icons/angular.svg";
import VueIcon from "../../public/icons/vue.svg";
import ReactNativeIcon from "../../public/icons/react-native.svg";
import FlutterIcon from "../../public/icons/flutter.svg";
import PrismaIcon from "../../public/icons/prisma.svg";
import TrpcIcon from "../../public/icons/trpc.svg";
import GraphqlIcon from "../../public/icons/graphql.svg";

export function TechnologiesRow() {
  return (
    <div className="flex justify-between items-center text-3xl xl:text-xl">
      <TsIcon />
      <JsIcon />
      <HtmlIcon />
      <CssIcon />
      <VimscriptIcon />
      <LuaIcon />
      <ShellIcon />
      <DartIcon />
      <NextIcon />
      <AngularIcon />
      <VueIcon />
      <ReactNativeIcon />
      <FlutterIcon />
      <PrismaIcon />
      <TrpcIcon />
      <GraphqlIcon />
    </div>
  );
}
