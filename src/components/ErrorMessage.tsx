interface ErrorMessageProps {
  message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <div className="flex flex-col gap-4 text-center font-semibold">
      <p className="text-xl">{message}</p>
      <p className="text-2xl">Please refresh the page and try again.</p>
    </div>
  );
};

export default ErrorMessage;
