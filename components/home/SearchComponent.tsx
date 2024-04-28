import * as Select from "@radix-ui/react-select";
import { useState } from "react";
import { FaFlag } from "react-icons/fa";
import { IoSearch, IoTime } from "react-icons/io5";
import Button from "../ui/Button";
import Dropdown from "../ui/dropdown";

type Duration = {
  value: string;
  label: string;
};

const SearchComponent = () => {
  const [duration, setDuration] = useState<Duration>({
    value: "any",
    label: "Any",
  });

  return (
    <div className="container">
      <div className="flex w-full items-center justify-between gap-x-8 rounded-full bg-white px-8 py-4">
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
          <Dropdown
            dataDropDownToggle="time"
            children={{
              button: <p>{duration.label}</p>,
              dropdown: (
                <>
                  <li>1 Day</li>
                  <li>2-4 Days</li>
                  <li>5-7 Days</li>
                  <li>7+ Days</li>
                </>
              ),
            }}
          />
        </div>
        <div className="flex items-center gap-x-4">
          <FaFlag className="text-xl text-gray-400" />
          <Select.Root defaultValue="any">
            <Select.Trigger />
            <Select.Content>
              <Select.Item value="apple">Any</Select.Item>
              <Select.Item value="orange">Nepal</Select.Item>
              <Select.Item value="orange">Nepal-India Tour</Select.Item>
              <Select.Item value="orange">Nepal Tibet Tour</Select.Item>
              <Select.Item value="orange">India China</Select.Item>
              <Select.Item value="orange">Nepal Bhutan Tour</Select.Item>
              <Select.Item value="orange">Nepal Tibet Bhutan Tour</Select.Item>
              <Select.Item value="orange">Tibet</Select.Item>
              <Select.Item value="orange">Bhutan</Select.Item>
              <Select.Item value="orange">India</Select.Item>
            </Select.Content>
          </Select.Root>
        </div>

        <Button
          text="Search"
          customColor="bg-blue-600 hover:bg-blue-500 text-white"
        />
      </div>
    </div>
  );
};

export default SearchComponent;
