import { z } from 'zod';
import { config } from '../config';

export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string()
    .min(config.validation.password.minLength, `Password must be at least ${config.validation.password.minLength} characters`)
    .max(config.validation.password.maxLength, `Password cannot exceed ${config.validation.password.maxLength} characters`)
});

export const registerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string()
    .min(config.validation.password.minLength, `Password must be at least ${config.validation.password.minLength} characters`)
    .max(config.validation.password.maxLength, `Password cannot exceed ${config.validation.password.maxLength} characters`),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
});

export const adminLoginSchema = z.object({
  username: z.string().min(1, 'Username is required'),
  password: z.string().min(1, 'Password is required'),
  secretKey: z.string().min(1, 'Secret key is required')
});

export const restaurantLoginSchema = z.object({
  code: z.string()
    .length(config.validation.restaurantCode.length, `Restaurant code must be ${config.validation.restaurantCode.length} digits`)
    .regex(/^\d+$/, 'Code must contain only numbers')
});