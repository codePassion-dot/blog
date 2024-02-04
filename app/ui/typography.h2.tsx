import { FC, PropsWithChildren } from "react";

const TypographyH2: FC<PropsWithChildren> = ({ children }) => {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      {children}
    </h2>
  );
};

export default TypographyH2;
