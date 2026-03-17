'use client'

import TextField from '@mui/material/TextField'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import DateReserve from '@/components/DateReserve'

export default function BookingPage() {

  return (
    <main>

      <h1>Venue Booking</h1>

      <TextField
        label="Name-Lastname"
        name="Name-Lastname"
        variant="standard"
      />

      <TextField
        label="Contact-Number"
        name="Contact-Number"
        variant="standard"
      />

      <Select id="venue">

        <MenuItem value="Bloom">
          The Bloom Pavilion
        </MenuItem>

        <MenuItem value="Spark">
          Spark Space
        </MenuItem>

        <MenuItem value="GrandTable">
          The Grand Table
        </MenuItem>

      </Select>

      <DateReserve/>

      <Button name="Book Venue">
        Book Venue
      </Button>

    </main>
  )
}