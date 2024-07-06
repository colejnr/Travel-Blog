import { Loader } from "lucide-react";

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className=" w-full flex items-center justify-center h-screen">
      <Loader size={60} className=" animate-spin" />
    </div>
  );
}
