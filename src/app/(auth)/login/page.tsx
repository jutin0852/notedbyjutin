"use client";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
// import { user } from "@/lib/user";
import { loginUser } from "@/services/auth";
import { loginSchema } from "@/schemas/auth.schema";
import { LoginFields } from "@/types/authtype";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

export default function Page() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginFields>({
    defaultValues: {
      username: "emilys",
      password: "emilyspass",
    },
    resolver: zodResolver(loginSchema),
  });
  const { setAuth } = useAuth();
  const router = useRouter();

  const submitForm: SubmitHandler<LoginFields> = async (data) => {
    try {
      const response = await loginUser(data);
      const username = response?.data.username;
      const accessToken = response?.data.accessToken;

      setAuth({ username, accessToken });
      if (accessToken) {
        router.replace("/note");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (!error.response) {
          setError("root.serverError", {
            type: "server",
            message: "No server Response",
          });
        }
        if (error.status === 400) {
          setError("root.serverError", {
            type: "server",
            message: "invalid login details",
          });
        }
        if (error.status === 401) {
          setError("root.serverError", {
            type: "server",
            message: "Unauthorized",
          });
        }
        console.log(error);
      } else {
        setError("root.serverError", {
          type: "server",
          message: "Login failed",
        });
      }
    }
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
          {...register("password", { required: "password is required" })}
          type="text"
          placeholder="password"
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <button disabled={isSubmitting}>
        {isSubmitting ? "loading" : "submit"}
      </button>
      {errors.root?.serverError && <p>{errors.root?.serverError?.message}</p>}
    </form>
  );
}
