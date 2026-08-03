export default function Hero({ title, subtitle, image = '/chicago-night.jpg', children }) {
  return (
    <section className="w-full">
      <div
        className="relative w-full bg-cover bg-center min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)]"
        style={{ backgroundImage: `url('${image}')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

        <div className="relative z-10 flex items-center justify-center py-20 md:py-28 h-full">
          <div className="text-center px-4 max-w-6xl">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight">{title}</h1>
            {subtitle && <p className="mt-4 text-gray-200">{subtitle}</p>}
            {children && <div className="mt-8">{children}</div>}
          </div>
        </div>
      </div>
    </section>
  );
}
