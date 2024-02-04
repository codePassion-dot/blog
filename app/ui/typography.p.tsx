import { FC, PropsWithChildren } from "react";

const TypographyP: FC<PropsWithChildren> = ({ children }) => {
  return <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>;
};

export default TypographyP;
