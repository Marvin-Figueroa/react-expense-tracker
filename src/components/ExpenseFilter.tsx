import { FormControl, Select, MenuItem } from '@mui/material'

interface Props {
  items: string[]
  onFilter: (selected: string) => void
  selected: string
}

const ExpenseFilter = ({ items, onFilter, selected }: Props) => {
  return (
    <FormControl margin='normal' fullWidth>
      <Select
        value={selected}
        onChange={(event) => onFilter(event.target.value)}>
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
