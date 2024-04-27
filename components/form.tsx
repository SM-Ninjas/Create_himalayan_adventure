import React from 'react';
import { useForm } from 'react-hook-form';


type formDataTypes = {
    firstName: string,
    lastName: string,
    email: string,
    mobileNumber: string,
    message: string

}

export default function Form() {
    const form = useForm<formDataTypes>();
    const { register, handleSubmit, formState: { errors } } = form;
    const onSubmit = (data: formDataTypes) => {
        // Make post request here to the admin panel
        // console.log(data)
        form.reset();
    };
    console.log(errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
            <div className='flex gap-2'>
                <input type="text"
                    className="p-4 rounded-[8px] border w-full bg-[#FFFFFF]"
                    placeholder="First name" {...register("firstName", { required: true, maxLength: 80 })} />
                <input type="text"

                    className="p-4 rounded-[8px] border w-full bg-[#FFFFFF]"
                    placeholder="Last name" {...register("lastName", { required: true, maxLength: 100 })} />
            </div>
            <input type="text"
                className="p-4 rounded-[8px] border w-full bg-[#FFFFFF]"

                placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
            {errors.email && <span className='text-red-500'>Please enter a valid email</span>}
            <input type="tel"
                className="p-4 rounded-[8px] border w-full bg-[#FFFFFF]"

                typeof='number'
                placeholder="Mobile number" {...register("mobileNumber", { required: true, minLength: 6, maxLength: 10 })} />
            {errors.mobileNumber && <span className='text-red-500'>Please enter a valid Phone Number.</span>}

            <textarea
                placeholder="Message"
                rows={6}
                className="border rounded-[8px] p-4 w-full bg-[#FFFFFF]"
                {...register("message", { required: true, minLength: 6, maxLength: 500 })} />
            {errors.message && <span className='text-red-500'>Message should be at least 6 character long</span>}


            <button
                className=" bg-[#0075FF] border py-4 px-2 w-[200px] text-white  rounded-[50px] my-2"
                type="submit" >
                Send Message
            </button >
        </form>
    );
}