import { HeartIcon } from "@heroicons/react/16/solid";

const Footer = () => {
  return (
    <footer className="flex justify-between p-6 text-sm font-semibold">
      <p>© 2025 Popcorn Picks. All rights reserved.</p>
      <div className="flex">
        <span>Made with</span>
        <HeartIcon className="h-4 w-4 mx-1.5" />
        <span>by Othman Mejdoubi. </span>
      </div>
    </footer>
  );
};

export default Footer;
