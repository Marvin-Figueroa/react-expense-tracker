import { FormControl, Select, MenuItem } from '@mui/material'
import { useState } from 'react'

interface Props {
  items: string[]
  onFilter: (selected: string) => void
}

const ExpenseFilter = ({ items, onFilter }: Props) => {
  const [selected, setSelected] = useState(items[0])

  return (
    <FormControl margin='normal' fullWidth>
      <Select
        value={selected}
        onChange={(event) => {
          setSelected(event.target.value)
          onFilter(event.target.value)
        }}>
        {items.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default ExpenseFilter
