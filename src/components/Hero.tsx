import Banner from '../assets/banner-stack.png'
const Hero = () => {
    return (
        <section id="home" className="max-w-7xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
          Build Your Ideal{" "}
          <span className="bg-brand-gradient bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>
        <p className="mt-4 text-gray-500 max-w-md">
          Explore frontend, backend, database, and tooling options — compare
          them side by side, and put together the stack that fits your next
          project.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#technologies"
            className="px-6 py-3 rounded-lg bg-brand-gradient text-white font-medium hover:opacity-90 transition"
          >
            Explore Technologies
          </a>
          <a
            href="#about"
            className="px-6 py-3 rounded-lg border border-pink-500 text-pink-500 font-medium hover:bg-pink-50 transition"
          >
            Learn More
          </a>
        </div>
      </div>
      <div className="flex justify-center">
        <img
          src={Banner}
          alt="Developer workspace illustration"
          className="w-full max-w-md drop-shadow-2xl"
        />
      </div>
    </section>
    )
}

export default Hero
