const Hero = () => {
  return (
    <section className="pt-24 pb-20 md:pt-32">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="flex justify-center md:order-2">
            <img
              className="max-w-full h-auto"
              src="https://i.ibb.co/35CBhk9n/hero-image.png"
              width="700"
              height="300"
              alt="frame"
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="mb-3 text-5xl font-extrabold leading-tight text-purple-400 lg:text-7xl">
              Taskive
            </h1>
            <p className="text-lg my-4 opacity-80 text-gray-300">
              Effortlessly Organize, Prioritize, and Conquer Tasks with Tasker -
              Your Personal Productivity Ally for Seamless Goal Achievement and
              Stress-Free Task Management.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
