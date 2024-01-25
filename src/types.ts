import { z } from "zod"

export interface Expense {
  id: number
  description: string
  amount: number
  category: Category
}

export const ExpenseFormSchema = z.object({
  description: z
    .string().trim()
    .min(3, { message: 'Description should be at least 3 characters' }),
  amount: z
    .number({
    invalid_type_error: "Amount is required",})
    .min(1, { message: 'Amount must be greater than zero' }),
  category: z.enum(['Groceries', 'Utilities', 'Entertainment'], {required_error: 'Category is required'})
})

export type FormData = z.infer<typeof ExpenseFormSchema>



export type Category = 'Groceries' | 'Utilities' | 'Entertainment'