const Header = () => {
  return (
    <nav className="py-4 md:py-6 fixed top-0 w-full bg-gray-900 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4">
        <a href="/">
          <img
            className="h-10 md:h-12"
            src="https://i.ibb.co/gLyVkq8Y/logo.webp"
            alt="Lws"
          />
        </a>
        <h1 className="text-2xl md:text-3xl font-bold text-yellow-400">
          Taskive
        </h1>
      </div>
    </nav>
  );
};

export default Header;
