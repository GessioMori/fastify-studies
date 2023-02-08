import { z } from 'zod';
import { buildJsonSchemas } from 'fastify-zod';

const UserBaseSchema = z.object({
  name: z.string(),
  email: z.string()
});

const CreateUserInputSchema = UserBaseSchema.extend({
  password: z.string()
});

const UserResponseSchema = UserBaseSchema.extend({
  id: z.number()
});

export type CreateUserInputType = z.infer<typeof CreateUserInputSchema>;

export type UserResponseType = z.infer<typeof UserResponseSchema>;

export const { schemas: userSchemas, $ref } = buildJsonSchemas({
  CreateUserInputSchema,
  UserResponseSchema
});
