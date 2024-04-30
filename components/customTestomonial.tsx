import Image from "next/image";
import { FaStar } from "react-icons/fa";

interface TestimonialProps {
  name: string;
  title?: string;
  message?: string;
}

function CustomTestimonials({ name, title, message }: TestimonialProps) {
  return (
    <section className="">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -mb-32 hidden -translate-x-1/2 transform lg:block"
        aria-hidden="true"
      >
        <svg
          width="1760"
          height="518"
          viewBox="0 0 1760 518"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* <linearGradient
                            x1="50%"
                            y1="0%"
                            x2="50%"
                            y2="100%"
                            id="illustration-02"
                        >
                            <stop stopColor="#FFF" offset="0%" />
                            <stop stopColor="#EAEAEA" offset="77.402%" />
                            <stop stopColor="#DFDFDF" offset="100%" />
                        </linearGradient> */}
          </defs>
          <g
            transform="translate(0 -3)"
            fill="url(#illustration-02)"
            fillRule="evenodd"
          >
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="mx-auto sm:px-1">
        <div className="md:py-1">
          <div className="mx-auto pb-12 md:pb-16">
            <h1 title="What our clients have to say about this trip" />
          </div>

          <div
            // variants={zoomIn(1, 0.5)}
            className="mx-auto mt-4 rounded-[8px]"
          >
            <div className="relative flex h-72 items-start rounded bg-white">
              {/* Testimonial */}
              <div className="mx-4 px-4 py-2 pt-20 md:mx-0">
                <div className="absolute top-0 -mt-8 transform">
                  <svg
                    className="absolute right-0 top-0 -mr-8 -mt-3 h-16 w-16 fill-current text-blue-600"
                    viewBox="0 0 64 64"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
                  </svg>
                  <div className="h-24 w-24">
                    <Image
                      className="relative rounded-full object-top"
                      src="/Ellipse.svg"
                      alt="Testimonial from Founder"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
                <div className="">
                  <div className="flex justify-between">
                    <div className="flex">
                      <FaStar color="#33e0a1" />
                      <FaStar color="#33e0a1" />
                      <FaStar color="#33e0a1" />
                      <FaStar color="#33e0a1" />
                      <FaStar color="#33e0a1" />
                    </div>
                    <div className="flex gap-2">
                      <p className="text-sm font-semibold text-gray-800">
                        {name}
                      </p>
                      <p className="text-sm text-gray-600">Sept 23, 2020</p>
                    </div>
                  </div>
                  <h1 className="mt-5 text-sm font-semibold text-gray-800">
                    {title ??
                      "Outstanding Trekking Journey In Annapurna Region"}
                  </h1>
                  <p className="mb-4 mt-1 text-sm text-gray-600">
                    {message ??
                      "Elevate your trekking experience with our carefully curated selection of recommended gear. From essential equipment to specialized tools, we've handpicked items to ensure you're fully prepared for the challenges and wonders of the trail. Gear up for your next adventure with these recommended essentials, and embark on your trekking journey with confidence and peace of mind"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CustomTestimonials;
