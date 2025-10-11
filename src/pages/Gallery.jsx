import { useState, useEffect, useRef } from 'react';

const section1Images = [
  './images/8c030af44b59c10798482.jpg',
  './images/c2657c463cebb6b5effa8.jpg',
  './images/151c26e96744ed1ab4553.jpg',
  './images/ace88912c8bf42e11bae4.jpg',
  './images/71a4505e11f39badc2e21.jpg'
];
const section2Images = [
  './images/5ff4d30392ae18f041bf5.jpg',
  './images/b6a0995ad8f752a90be67.jpg',
  './images/f8c244ee04438e1dd7529.jpg',
];
const section3Images = [
  './images/fc67594b19e693b8caf712.jpg',
  './images/TMT07165.JPG',
];

function useSlider(images) {
  const [current, setCurrent] = useState(0);
  const total = images.length;
  const startX = useRef(null);
  const isDragging = useRef(false);

  const prevSlide = () => setCurrent((prev) => (prev - 1 + total) % total);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % total);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 3000);
    return () => clearInterval(timer);
  }, [total]);

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
    isDragging.current = true;
  };
  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    const diff = e.touches[0].clientX - startX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) prevSlide();
      else nextSlide();
      isDragging.current = false;
    }
  };
  const handleTouchEnd = () => { isDragging.current = false; };
  const handleMouseDown = (e) => { startX.current = e.clientX; isDragging.current = true; };
  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const diff = e.clientX - startX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) prevSlide();
      else nextSlide();
      isDragging.current = false;
    }
  };
  const handleMouseUp = () => { isDragging.current = false; };

  return {
    current,
    images,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
  };
}

export default function Gallery() {
  const slider1 = useSlider(section1Images);
  const slider2 = useSlider(section2Images);
  const slider3 = useSlider(section3Images);

  return (
    <section id="image" className="min-h-screen relative overflow-hidden">
      <div className="container mx-auto px-4 py-10 relative z-10 space-y-12">
        {/* Section 1: 2/3 width left */}
        <div className="flex justify-start w-full mb-8">
          <div className="w-4/5 max-w-2xl">
            <div className="mb-4 text-left">
              <h2 className="text-2xl font-serif text-rose-600 mb-2">Tình yêu của chúng tớ bắt đầu từ nơi làm việc và khu chung cư chúng tớ ở</h2>
            </div>
            <div
              className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-lg"
              onTouchStart={slider1.handleTouchStart}
              onTouchMove={slider1.handleTouchMove}
              onTouchEnd={slider1.handleTouchEnd}
              onMouseDown={slider1.handleMouseDown}
              onMouseMove={slider1.handleMouseMove}
              onMouseUp={slider1.handleMouseUp}
              onMouseLeave={slider1.handleMouseUp}
              style={{ touchAction: 'pan-y' }}
            >
              <img
                src={slider1.images[slider1.current]}
                alt={`Section 1 image ${slider1.current + 1}`}
                className="object-cover w-full h-full duration-500"
              />
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
                {slider1.images.map((_, idx) => (
                  <span
                    key={idx}
                    className={`inline-block w-2 h-2 rounded-full ${idx === slider1.current ? 'bg-rose-500' : 'bg-white/70 border border-rose-300'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Section 2: 2/3 width right */}
        <div className="flex justify-end w-full mb-8">
          <div className="w-4/5 max-w-2xl">
            <div className="mb-4 text-right">
              <h2 className="text-2xl font-serif text-rose-600 mb-2">Tình yêu chúng tớ lớn lên và có những chuyến đi cùng nhau</h2>
            </div>
            <div
              className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-lg"
              onTouchStart={slider2.handleTouchStart}
              onTouchMove={slider2.handleTouchMove}
              onTouchEnd={slider2.handleTouchEnd}
              onMouseDown={slider2.handleMouseDown}
              onMouseMove={slider2.handleMouseMove}
              onMouseUp={slider2.handleMouseUp}
              onMouseLeave={slider2.handleMouseUp}
              style={{ touchAction: 'pan-y' }}
            >
              <img
                src={slider2.images[slider2.current]}
                alt={`Section 2 image ${slider2.current + 1}`}
                className="object-cover w-full h-full transition-all duration-500"
              />
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
                {slider2.images.map((_, idx) => (
                  <span
                    key={idx}
                    className={`inline-block w-2 h-2 rounded-full ${idx === slider2.current ? 'bg-rose-500' : 'bg-white/70 border border-rose-300'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Section 3: full width */}
        <div className="w-full mb-8">
          <div className="mb-4 text-center">
            <h2 className="text-2xl font-serif text-rose-600 mb-2">Và cuối cùng, bây giờ chúng tớ đến với nhau</h2>
          </div>
          <div
            className="relative w-full max-w-4xl mx-auto aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-lg"
            onTouchStart={slider3.handleTouchStart}
            onTouchMove={slider3.handleTouchMove}
            onTouchEnd={slider3.handleTouchEnd}
            onMouseDown={slider3.handleMouseDown}
            onMouseMove={slider3.handleMouseMove}
            onMouseUp={slider3.handleMouseUp}
            onMouseLeave={slider3.handleMouseUp}
            style={{ touchAction: 'pan-y' }}
          >
            <img
              src={slider3.images[slider3.current]}
              alt={`Section 3 image ${slider3.current + 1}`}
              className="object-cover w-full h-full transition-all duration-500"
            />
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
              {slider3.images.map((_, idx) => (
                <span
                  key={idx}
                  className={`inline-block w-2 h-2 rounded-full ${idx === slider3.current ? 'bg-rose-500' : 'bg-white/70 border border-rose-300'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
