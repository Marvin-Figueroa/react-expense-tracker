import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Typography,
  TableFooter
} from '@mui/material'
import { Expense } from '../types'

interface Props {
  expenses: Expense[]
  onDelete: (id: number) => void
}

const ExpensesData = ({ expenses, onDelete }: Props) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>
            <Typography fontWeight='bold'>Description</Typography>
          </TableCell>
          <TableCell>
            <Typography fontWeight='bold'>Amount</Typography>
          </TableCell>
          <TableCell>
            <Typography fontWeight='bold'>Category</Typography>
          </TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {expenses.map((expense) => (
          <TableRow>
            <TableCell align='left'>{expense.description}</TableCell>
            <TableCell align='left'>${expense.amount.toFixed(2)}</TableCell>
            <TableCell align='left'>{expense.category}</TableCell>
            <TableCell align='left'>
              <Button
                onClick={() => onDelete(expense.id)}
                variant='outlined'
                color='error'>
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      {expenses.length > 0 && (
        <TableFooter>
          <TableRow>
            <TableCell align='left'>
              <Typography
                fontWeight='bold'
                variant='subtitle2'
                color='firebrick'>
                TOTAL
              </Typography>
            </TableCell>
            <TableCell align='left'>
              <Typography fontWeight='bold' variant='subtitle2'>
                $
                {expenses
                  .reduce((acc, curr) => acc + curr.amount, 0)
                  .toFixed(2)}
              </Typography>
            </TableCell>
          </TableRow>
        </TableFooter>
      )}
    </Table>
  )
}

export default ExpensesData
