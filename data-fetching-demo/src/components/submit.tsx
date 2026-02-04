"use client";
import { useFormStatus} from "react-dom";

export const Submit = () => {
    const {pending} = useFormStatus();

  return <button type="submit" className=" text-white bg-blue-500 disabled:bg-gray-600 " disabled={pending}>Submit</button>;
  
}