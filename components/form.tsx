import { StyledSelect } from "@/styles/style";

import { useState } from "react";
interface FormData {
    fullName: string;
    lastName: string;
    emailAddress: string;
    contactNumber: string;
    subject: string;
    message: string;
}

function Form() {
    const [selectedCountry, setSelectedCountry] = useState<string | null>("Nep");

    const [formData, setFormData] = useState<FormData>({
        // types of all the input we need
        fullName: "",
        lastName: "",
        emailAddress: "",
        contactNumber: "",
        subject: "",
        message: "",
    });

    const countries = [
        { value: "Nep", },
        { value: "CA", },
        { value: "US", },
        { value: "IN", },
        { value: "AU", },
        { value: "FR", },
        { value: "DE", },
        { value: "JP", },
        { value: "BR", },
        { value: "MX", },
    ];
    const options = countries.map((country) => ({
        value: country.value,
    }));


    const handleChangeCountry = (value: string, _option: any) => {
        setSelectedCountry(value);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // form submission with formData
        alert("Your Form data has been saved!");
        setFormData({
            fullName: "",
            lastName: "",
            emailAddress: "",
            contactNumber: "",
            subject: "",
            message: "",
        });
        console.log(formData);
    };

    return (
        <div className="">
            <form className=" flex flex-col gap-4" onSubmit={handleSubmit}>
                <div className="flex gap-2">
                    <input
                        type="text"
                        name="fullName"
                        placeholder="First Name"
                        className="p-4 rounded-[8px] border w-full bg-[#FFFFFF]"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        className="p-4 rounded-[8px] border w-full bg-[#FFFFFF]"
                        name="lastName"
                        placeholder="Last Name"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </div>
                <input
                    type="text"
                    name="emailAddress"
                    placeholder="Email Address"
                    className="p-4 rounded-[8px] border"
                    required
                    value={formData.emailAddress}
                    onChange={handleChange}
                />
                <div className="flex items-center border rounded-[8px] ">
                    <StyledSelect
                        variant="borderless"
                        value={selectedCountry}
                        onChange={(value: unknown, _option: any) => handleChangeCountry(value as string, _option)}
                        options={options}
                    />
                    <input
                        type="number"
                        name="contactNumber"
                        placeholder="Contact Number"
                        className="p-4 w-full"
                        required
                        value={formData.contactNumber}
                        onChange={handleChange}
                    />
                </div>
                <textarea
                    name="message"
                    placeholder="Message"
                    required
                    className="border rounded-[8px] p-4 w-full bg-[#FFFFFF]"
                    rows={8}
                    value={formData.message}
                    onChange={handleChange}
                ></textarea>
                <button
                    className=" bg-[#0075FF] border py-4 px-2 w-[200px] text-white rounded-[50px] my-4 "
                    type="submit"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
}

export default Form;