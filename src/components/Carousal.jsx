import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

function Carousal({ children: slides, autoSlide = true, autoDelay = 2000 }) {
  const [curr, setcurr] = useState(0);

  useEffect(() => {
    if (!autoSlide) return;
    const slideinterval = setInterval(next, autoDelay);
    return () => clearInterval(slideinterval);
  }, []);
  const prev = () => {
    setcurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
    // console.log(curr);
  };
  const next = () => {
    setcurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
    // console.log(curr);
  };

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translate(-${curr * 100}%)` }}
      >
        {" "}
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="bg-amber-300 opacity-15 rounded-full text-2xl hover:bg-amber-100 hover:opacity-100"
        >
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={next}
          className="bg-amber-300 opacity-15 rounded-full text-2xl hover:bg-amber-100 hover:opacity-100"
        >
          <ChevronRight size={40} />
        </button>
      </div>
    </div>
  );
}

export default Carousal;
