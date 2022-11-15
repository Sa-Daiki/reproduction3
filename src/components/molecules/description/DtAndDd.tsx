import { DtAndDdProps } from "./type";

export const DtAndDd = ({ tableChild, descriptionChild }: DtAndDdProps) => {
  return (
    <>
      <dt className="text-[.875rem] font-bold">{tableChild}</dt>
      <dd className="text-[.875rem] mb-[10px]">{descriptionChild}</dd>
    </>
  );
};

export default DtAndDd;
