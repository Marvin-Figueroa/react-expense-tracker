import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography
} from '@mui/material'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Category, Expense, ExpenseFormSchema, FormData } from '../types'

interface Props {
  onAddExpense: (newExpense: Omit<Expense, 'id'>) => void
}

const categories: Category[] = ['Groceries', 'Utilities', 'Entertainment']

const ExpenseForm = ({ onAddExpense }: Props) => {
  const {
    control,
    reset,
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<FormData>({
    resolver: zodResolver(ExpenseFormSchema)
  })

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onAddExpense(data)
        reset()
      })}>
      <FormControl fullWidth>
        <TextField
          label='Description'
          variant='outlined'
          margin='normal'
          {...register('description')}
        />
        {errors.description && (
          <Typography color='crimson'>{errors.description.message}</Typography>
        )}
      </FormControl>

      <FormControl fullWidth>
        <TextField
          label='Amount'
          variant='outlined'
          type='number'
          margin='normal'
          {...register('amount', { valueAsNumber: true })}
        />
        {errors.amount && (
          <Typography color='crimson'>{errors.amount.message}</Typography>
        )}
      </FormControl>

      <FormControl margin='normal' fullWidth>
        <InputLabel id='category-label'>Category</InputLabel>
        <Controller
          name='category'
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              labelId='category-label'
              id='category'
              label='Category'>
              {categories.map((category) => (
                <MenuItem value={category}>{category}</MenuItem>
              ))}
            </Select>
          )}
        />
        {errors.category && (
          <Typography color='crimson'>{errors.category.message}</Typography>
        )}
      </FormControl>

      <FormControl margin='normal' fullWidth>
        <Button
          disabled={!isValid}
          type='submit'
          variant='contained'
          color='primary'>
          Submit
        </Button>
      </FormControl>
      <p>{errors.category?.message}</p>
      <p>{errors.amount?.message}</p>
      <p>{errors.description?.message}</p>
    </form>
  )
}

export default ExpenseForm
