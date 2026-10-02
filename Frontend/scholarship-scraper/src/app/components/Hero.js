export default function Hero({ title, subtitle, image = '/chicago-night.jpg', children, heightClass, fontClass, contentClass }) {
  // Default to a medium header height (larger than About's 35vh but smaller than full viewport)
  const height = heightClass || 'min-h-[45vh]';
  return (
    <section className="w-full">
      <div
        className={`relative w-full bg-gray-900 bg-cover bg-center ${height}`}
        style={{ backgroundImage: `url('${image}')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

        <div className={`${contentClass || 'relative z-10 flex items-center justify-center py-12 md:py-20 h-full'}`}>
          <div className="text-center px-4 max-w-6xl">
            <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight ${fontClass || ''}`}>{title}</h1>
            {subtitle && <p className="mt-4 text-gray-200">{subtitle}</p>}
            {children && <div className="mt-8">{children}</div>}
          </div>
        </div>
      </div>
    </section>
  );
}
