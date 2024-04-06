import z from "zod";

export const personSchema = z.object({
    name: z.string().min(2).max(100),
});

export type PersonSchema = z.infer<typeof personSchema>;