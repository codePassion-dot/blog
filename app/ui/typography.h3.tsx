import { FC, PropsWithChildren } from "react";

const TypographyH3: FC<PropsWithChildren> = ({ children }) => {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      {children}
    </h3>
  );
};

export default TypographyH3;
