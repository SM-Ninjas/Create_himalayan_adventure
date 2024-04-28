import { HiPhone } from "react-icons/hi2";
import { IoLocationSharp, IoMail } from "react-icons/io5";
import Logo from "./Logo";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer>
      <div className="container mx-auto mt-8 px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div className="grid gap-8 border-t border-gray-200 py-8 sm:grid-cols-12 md:py-12">
          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-3">
            <div className="mb-2">
              <Logo />
            </div>
            <div className="text-sm text-gray-600">
              <a
                href="#0"
                className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900 hover:underline"
              >
                Terms
              </a>{" "}
              ·{" "}
              <a
                href="#0"
                className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900 hover:underline"
              >
                Privacy Policy
              </a>
            </div>
            <div className="mt-4 flex cursor-pointer flex-col gap-y-2">
              <div className="flex items-center gap-x-4">
                <IoLocationSharp />
                <a
                  href="https://maps.app.goo.gl/SWa8dYXRTtAp4bQYA"
                  target="_blank"
                  className="text-sm text-gray-600 transition duration-150 ease-in-out hover:text-gray-900 hover:underline"
                >
                  Kathmandu, Nepal
                </a>
              </div>
              <div className="flex items-center gap-x-4">
                <HiPhone />
                <a
                  href="tel:9800000000"
                  className="text-sm text-gray-600 transition duration-150 ease-in-out hover:text-gray-900 hover:underline"
                >
                  9800000000
                </a>
              </div>
              <div className="flex items-center gap-x-4">
                <IoMail />
                <a
                  href="mailto:example@mail.com"
                  className="text-sm text-gray-600 transition duration-150 ease-in-out hover:text-gray-900 hover:underline"
                >
                  example@mail.com
                </a>
              </div>
            </div>
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="mb-2 font-bold text-gray-800">Trekking</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a
                  href="#0"
                  className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Annapurna Base Camp Trek
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#0"
                  className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Everest Base Camp Trek
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#0"
                  className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Gosaikundo Trip
                </a>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="mb-2 font-bold text-gray-800">Trips</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a
                  href="#0"
                  className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Adventure in Pokhara
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#0"
                  className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Chitwan Jungle Safari
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#0"
                  className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Lumbini Pilgrimage Tour
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#0"
                  className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Kathmandu City Tour
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#0"
                  className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Rara Lake Adventure
                </a>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="mb-2 font-bold text-gray-800">Other Links</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a
                  href="#0"
                  className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Gallery
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#0"
                  className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Trekking Guide
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#0"
                  className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Inquiries
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#0"
                  className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Pricing
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#0"
                  className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* 5th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
            <h6 className="mb-2 font-bold text-gray-800">Subscribe</h6>
            <p className="mb-4 text-sm text-gray-600">
              Get the latest news and articles to your inbox every month.
            </p>
            <form>
              <div className="mb-4 flex flex-wrap">
                <div className="w-full">
                  <label className="sr-only block text-sm" htmlFor="newsletter">
                    Email
                  </label>
                  <div className="relative flex max-w-xs items-center">
                    <input
                      id="newsletter"
                      type="email"
                      className="form-input w-full bg-white px-3 py-2 pr-12 text-sm text-gray-800"
                      placeholder="Your email"
                      required
                    />
                    <button
                      type="submit"
                      className="absolute inset-0 left-auto"
                      aria-label="Subscribe"
                    >
                      <span
                        className="absolute inset-0 right-auto my-2 -ml-px w-px bg-gray-300"
                        aria-hidden="true"
                      ></span>
                      <svg
                        className="mx-3 h-3 w-3 shrink-0 fill-current text-blue-600"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                          fillRule="nonzero"
                        />
                      </svg>
                    </button>
                  </div>
                  {/* Success message */}
                  {/* <p className="mt-2 text-sm text-green-600">Thanks for subscribing!</p> */}
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom area */}
        <div className="border-t border-gray-200 py-4 md:flex md:items-center md:justify-between md:py-8">
          {/* Social as */}
          <ul className="mb-4 flex md:order-1 md:mb-0 md:ml-4">
            <li>
              <a
                href="#0"
                className="hover:bg-white-100 flex items-center justify-center rounded-full bg-white text-gray-600 shadow transition duration-150 ease-in-out hover:text-gray-900"
                aria-label="Twitter"
              >
                <svg
                  className="h-8 w-8 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                </svg>
              </a>
            </li>

            <li className="ml-4">
              <a
                href="#0"
                className="hover:bg-white-100 flex items-center justify-center rounded-full bg-white text-gray-600 shadow transition duration-150 ease-in-out hover:text-gray-900"
                aria-label="Facebook"
              >
                <svg
                  className="h-8 w-8 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                </svg>
              </a>
            </li>
          </ul>

          {/* Copyrights note */}
          <div className="mr-4 text-sm text-gray-600">
            &copy; Copyright {date} All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
