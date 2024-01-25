import { useState } from 'react'
import ExpenseFilter from './components/ExpenseFilter'
import ExpenseForm from './components/ExpenseForm'
import ExpensesData from './components/ExpensesData'
import { Expense } from './types'
import { Box, Container, Typography } from '@mui/material'

const expensesList: Expense[] = [
  { id: 1, description: 'Internet bill', amount: 189, category: 'Utilities' },
  {
    id: 2,
    description: 'Concert tickets',
    amount: 315,
    category: 'Entertainment'
  },
  { id: 3, description: 'Gas bill', amount: 72, category: 'Utilities' },
  { id: 4, description: 'Game night', amount: 894, category: 'Entertainment' },
  { id: 5, description: 'Rent', amount: 456, category: 'Utilities' }
]

const categories = ['All categories', 'Groceries', 'Utilities', 'Entertainment']

function App() {
  const [expenses, setExpenses] = useState(expensesList)
  const [selectedFilter, setSelectedFilter] = useState(categories[0])

  const handleDeleteExpense = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id))
  }

  const handleFilterExpenses = (category: string) => {
    setSelectedFilter(category)
  }

  const handleAddExpense = (expense: Omit<Expense, 'id'>) => {
    setExpenses([...expenses, { id: expenses.length, ...expense }])
  }

  return (
    <Container maxWidth='md'>
      <Typography align='center' variant='h3' color='royalblue'>
        Expenses Tracker
      </Typography>
      <ExpenseForm onAddExpense={handleAddExpense} />
      <ExpenseFilter onFilter={handleFilterExpenses} items={categories} />
      <Box mt={4} mb={3} border={1} borderColor={'royalblue'}>
        <ExpensesData
          onDelete={handleDeleteExpense}
          expenses={
            selectedFilter.toLowerCase() !== 'all categories'
              ? expenses.filter(
                  (expense) => expense.category === selectedFilter
                )
              : expenses
          }
        />
      </Box>
    </Container>
  )
}

export default App

