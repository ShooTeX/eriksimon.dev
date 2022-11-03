import Image from "next/image";

export function TechnologiesRow() {
  return (
    <div className="flex justify-between items-center">
      <Image src="/icons/ts.svg" width={20} height={20} alt="typescript" />
      <Image src="/icons/js.svg" width={20} height={20} alt="javascript" />
      <Image src="/icons/html.svg" width={20} height={20} alt="html" />
      <Image src="/icons/css.svg" width={20} height={20} alt="typescript" />
      <Image
        src="/icons/vimscript.svg"
        width={20}
        height={20}
        alt="vimscript"
      />
      <Image src="/icons/lua.svg" width={20} height={20} alt="lua" />
      <Image src="/icons/shell.svg" width={20} height={20} alt="shell" />
      <Image src="/icons/dart.svg" width={20} height={20} alt="dart" />
      <Image src="/icons/next.svg" width={20} height={20} alt="next" />
      <Image src="/icons/angular.svg" width={20} height={20} alt="angular" />
      <Image src="/icons/vue.svg" width={20} height={20} alt="vue" />
      <Image
        src="/icons/react-native.svg"
        width={20}
        height={20}
        alt="react-native"
      />
      <Image src="/icons/flutter.svg" width={20} height={20} alt="flutter" />
      <Image src="/icons/prisma.svg" width={20} height={20} alt="prisma" />
      <Image src="/icons/trpc.svg" width={20} height={20} alt="trpc" />
      <Image src="/icons/graphql.svg" width={20} height={20} alt="graphql" />
    </div>
  );
}
