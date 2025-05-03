"use client";
import React from "react";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { user } from "@/lib/user";
// import axios from "@/api/axios";

const schema = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
});

type RegisterFields = z.infer<typeof schema>;

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFields>({
    defaultValues: {
      username: "emilyy",
      email: "jutitbtbtjb@gmail.com",
      password: "3ednebjbeje",
    },
    resolver: zodResolver(schema),
  });

  const submitForm: SubmitHandler<RegisterFields> = async (data) => {
    try {
      await axios.post("/api", data);
      console.log(user);
    } catch (error) {
      console.log(error);
      // if(!error.response){
      //     return " no server response"
      // }
    }
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div>
        <input
          className="border border-black"
          {...register("username", { required: "username is required" })}
          type="text"
          placeholder="username"
        />
        {errors.username && <p>{errors.username.message}</p>}
      </div>

      <div>
        <input
          className="border border-black"
          {...register("email", {
            required: "email is required",
            validate: (value) => {
              if (!value.includes("@")) {
                return "must contain @";
              }
              return true;
            },
          })}
          type="text"
          placeholder="email"
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <input
          className="border border-black"
          {...register("password", { required: "password is required" })}
          type="text"
          placeholder="password"
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <button disabled={isSubmitting}>
        {isSubmitting ? "loading" : "submit"}
      </button>
    </form>
  );
}
