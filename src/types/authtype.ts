import { loginSchema } from "@/schemas/auth.schema";
import { z } from "zod";

export type LoginFields = z.infer<typeof loginSchema>;
