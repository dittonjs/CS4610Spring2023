import { ReactNode } from "react";

interface FormInputProps {
  children: ReactNode;
  type?: string;
}

export const FormInput = ({type = "text", children}: FormInputProps) => {
  return (
    <div className="flex-input">
      <label>
        {children}
      </label>
      <div><input type={type} /></div>
    </div>
  );
}
