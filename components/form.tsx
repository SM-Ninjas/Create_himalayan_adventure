

import { useState } from "react";
interface FormData {
    fullName: string;
    emailAddress: string;
    contactNumber: string;
    subject: string;
    message: string;
}

function Form() {
    const [formData, setFormData] = useState<FormData>({
        // types of all the input we need
        fullName: "",
        emailAddress: "",
        contactNumber: "",
        subject: "",
        message: "",
    });

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
        // Handle form submission with formData
        alert("Your Form data has been saved!");
        setFormData({
            fullName: "",
            emailAddress: "",
            contactNumber: "",
            subject: "",
            message: "",
        });
        console.log(formData);
    };

    return (
        <div className="w-1/2">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div className="">
                    <input
                        type="text"
                        name="fullName"
                        placeholder="First Name"
                        className="p-2 bg-[#FFFFFF]"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        className="p-2"
                        name="last name"
                        placeholder="Last Name"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                    />
                </div>
                <input
                    type="text"
                    name="emailAddress"
                    placeholder="Email Address"
                    className="p-2"
                    required
                    value={formData.emailAddress}
                    onChange={handleChange}
                />

                <input
                    type="number"
                    name="contactNumber"
                    placeholder="Contact Number"
                    className="p-2"
                    required
                    value={formData.contactNumber}
                    onChange={handleChange}
                />
                <textarea
                    name="message"
                    placeholder="Message"
                    required
                    className="text-[#111] p-3"
                    rows={8}
                    value={formData.message}
                    onChange={handleChange}
                ></textarea>
                <button
                    className=" bg-[#0075FF] border py-[.5rem] px-[2rem] rounded-[4px] my-[24px] "
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Form;