import { FaFlag } from "react-icons/fa";
import { IoSearch, IoTime } from "react-icons/io5";
import Button from "../ui/Button";

type Duration = {
  value: string;
  label: string;
};

const SearchComponent = () => {
  return (
    <div className="container">
      <div className="flex w-full flex-col justify-between gap-x-4 gap-y-8 rounded-md border border-[#14141515] bg-white px-4 py-4 lg:flex-row lg:flex-wrap lg:items-center lg:rounded-full lg:px-8">
        <div className="flex items-center gap-x-4">
          <IoSearch className="text-xl text-gray-400" />
          <input
            type="text"
            placeholder="Keyword"
            className="w-full border-none outline-none placeholder:text-sm"
          />
        </div>
        <div className="flex items-center gap-x-4">
          <IoTime className="text-xl text-gray-400" />
          <select className="w-full border-none text-sm outline-none">
            <option value="any">Any Duration</option>
            <option value="one">1 Day</option>
            <option value="short">2-4 Days</option>
            <option value="week">5-7 Days</option>
            <option value="long">7+ Days</option>
          </select>
        </div>
        <div className="flex items-center gap-x-4">
          <FaFlag className="text-xl text-gray-400" />

          <select className="w-full border-none text-sm outline-none">
            <option value="any">Any Destination</option>
            <option value="nepal">Nepal</option>
            <option value="nepal-india">Nepal-India Tour</option>
            <option value="nepal-tibet">Nepal Tibet Tour</option>
            <option value="india-china">India China</option>
            <option value="nepal-bhutan">Nepal Bhutan Tour</option>
            <option value="nepal-tibet-bhutan">Nepal Tibet Bhutan Tour</option>
            <option value="tibet">Tibet</option>
            <option value="bhutan">Bhutan</option>
            <option value="india">India</option>
          </select>
        </div>

        <div className="ml-8">
          <Button
            text="Search"
            customColor="bg-blue-600 hover:bg-blue-500 text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
