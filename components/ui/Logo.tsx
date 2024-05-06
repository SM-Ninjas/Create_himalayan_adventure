import Image from "next/image";

interface Logo {
  width?: number;
  height?: number;
}

const Logo = ({ width, height }: Logo) => {
  return (
    <Image
      src={"/logo.png"}
      alt="Logo"
      width={width ?? 60}
      height={height ?? 60}
    />
  );
};

export default Logo;
