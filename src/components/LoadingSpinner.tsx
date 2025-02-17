import { ArrowPathIcon } from "@heroicons/react/24/solid";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center gap-2">
      <ArrowPathIcon className="animate-spin h-8 w-8" />
      <p className="font-semibold text-2xl">Loading...</p>
    </div>
  );
};

export default LoadingSpinner;
