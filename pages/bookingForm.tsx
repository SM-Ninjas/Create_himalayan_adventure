import { useForm } from "react-hook-form";
import Buttons from "../components/ui/Buttons";

type BookingFormTypes = {
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  message: string;
  date: Date
  termsAccepted: string
};

export default function BookingForm() {
  const form = useForm<BookingFormTypes>(); // Initialize form with the data interface
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = async (data: BookingFormTypes) => {

    try {
      const response = await fetch("https://formspree.io/f/xyyronpn", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      form.reset()
      const responseData = await response.json();
      if (responseData.success) {
        console.log('Form submission successful!');
      }
    } catch (error) {
      console.error('Error submitting form:', error);

    }
  }

  return (
    <div className="container mt-24">
      <form
        onSubmit={handleSubmit(onSubmit)}
        action={''}
        className="p-4 flex flex-col gap-4 w-1/2 shadow-lg "
        method="POST"
      >
        <div className="flex gap-4 my-2">
          <div className=" w-full gap-2">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              className="small-text w-full rounded-md border bg-white px-4 py-3"
              placeholder="First name"
              {...register("firstName", { required: true, maxLength: 80 })}
              id="firstName"
            />
          </div>
          <div className="w-full">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className="small-text w-full rounded-md border bg-white px-4 py-3"
              placeholder="Last name"
              {...register("lastName", { required: true, maxLength: 100 })}
              id="lastName"
            />
          </div>
        </div>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          className="small-text w-full rounded-md border bg-white px-4 py-3"
          placeholder="Email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          id="email"
        />
        {errors.email && (
          <span className="small-text text-red-500">Please enter a valid email</span>
        )}
        <label htmlFor="mobileNumber">Mobile Number</label>
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
          id="mobileNumber"
        />
        <label htmlFor="date">Booking Date</label>
        <input
          type="date"
          className="small-text w-full rounded-md border bg-white px-4 py-3"
          typeof="Date"
          placeholder="Date"
          {...register("date", {
            required: true,
            minLength: 6,
            maxLength: 10,
          })}
          id="date"
        />
        {errors.date && (
          <span className=" small-text small-text text-red-500">
            Please pick a date!
          </span>
        )}

        <label htmlFor="message">Message</label>
        <textarea
          placeholder="Message"
          rows={6}
          className="small-text w-full rounded-md border bg-white px-4 py-3"
          {...register("message", {
            required: true,
            minLength: 6,
            maxLength: 500,
          })}
          id="message"
        />
        {errors.message && (
          <span className=" small-text text-red-500">
            Message should be at least 6 character long
          </span>
        )}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="termsAccepted"
            {...register("termsAccepted", { required: true })} // Mark as required
          />
          <label htmlFor="termsAccepted">I agree to the terms and conditions</label>
        </div>
        {errors.termsAccepted && (
          <span className="small-text text-red-500">Please accept the terms and conditions</span>
        )}
        <Buttons text="Submit Details" customColor="bg-blue-600 text-gray-50 hover:bg-blue-500 w-24" />
      </form>
    </div>

  );
}
