import { HeadingProps } from "./type";

export const H1 = ({ children, className }: HeadingProps) => (
  <h1
    className={`text-[1.5rem] font-light leading-none mb-[15px] ${className}`}
  >
    {children}
  </h1>
);

export default H1;
