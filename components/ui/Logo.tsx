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
      width={width ?? 36}
      height={height ?? 36}
    />
  );
};

export default Logo;
