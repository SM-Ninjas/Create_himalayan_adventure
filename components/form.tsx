import { useForm } from "react-hook-form";
import Buttons from "./ui/Buttons";

type formDataTypes = {
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  message: string;
};

export default function Form() {
  const form = useForm<formDataTypes>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form; 
  const onSubmit = (data: formDataTypes) => {
    // Make post request here to the admin panel
    form.reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mb-8 flex flex-col gap-4"
    >
      <div className="flex gap-2">
        <input
          type="text"
          className="small-text w-full rounded-md border bg-white px-4 py-3"
          placeholder="First name"
          {...register("firstName", { required: true, maxLength: 80 })}
        />
        <input
          type="text"
          className="small-text w-full rounded-md border bg-white px-4 py-3"
          placeholder="Last name"
          {...register("lastName", { required: true, maxLength: 100 })}
        />
      </div>
      <input
        type="text"
        className="small-text w-full rounded-md border bg-white px-4 py-3"
        placeholder="Email"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      {errors.email && (
        <span className="text-red-500">Please enter a valid email</span>
      )}
      <input
        type="tel"
        className="small-text w-full rounded-md border bg-white px-4 py-3"
        typeof="number"
        placeholder="Mobile number"
        {...register("mobileNumber", {
          required: true,
          minLength: 6,
          maxLength: 10,
        })}
      />
      {errors.mobileNumber && (
        <span className="text-red-500">Please enter a valid Phone Number.</span>
      )}

      <textarea
        placeholder="Message"
        rows={6}
        className="small-text w-full rounded-md border bg-white px-4 py-3"
        {...register("message", {
          required: true,
          minLength: 6,
          maxLength: 500,
        })}
      />
      {errors.message && (
        <span className="text-red-500">
          Message should be at least 6 character long
        </span>
      )}

      <Buttons
        text="Send Message"
        customColor="bg-blue-600 text-gray-50 hover:bg-blue-500 w-24"
      />
    </form>
  );
}
