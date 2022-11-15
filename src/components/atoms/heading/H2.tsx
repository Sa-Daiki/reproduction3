import { HeadingProps } from "./type";

export const H2 = ({ children, className }: HeadingProps) => (
  <h2 className={`text-[1.125rem] font-semibold mb-[30px] ${className}`}>
    {children}
  </h2>
);

export default H2;
