import React, { useState } from 'react'
import { AppointmentPicker } from 'react-appointment-picker'
import { Container } from 'react-bootstrap'

const BookASchedule = () => {
  const [loading, setLoading] = useState()
  const days = [
    [
      { id: 1, number: 1, isSelected: true, periods: 2 },
      { id: 2, number: 2 },
      null,
      { id: 3, number: '3', isReserved: true },
      { id: 4, number: '4' },
      null,
      { id: 5, number: 5 },
      { id: 6, number: 6 },
    ],
    [
      { id: 7, number: 1, isReserved: true, periods: 3 },
      { id: 8, number: 2, isReserved: true },
      null,
      { id: 9, number: '3', isReserved: true },
      { id: 10, number: '4' },
      null,
      { id: 11, number: 5 },
      { id: 12, number: 6 },
    ],
    [
      { id: 13, number: 1 },
      { id: 14, number: 2 },
      null,
      { id: 15, number: 3, isReserved: true },
      { id: 16, number: '4' },
      null,
      { id: 17, number: 5 },
      { id: 18, number: 6 },
    ],
    [
      { id: 19, number: 1 },
      { id: 20, number: 2 },
      null,
      { id: 21, number: 3 },
      { id: 22, number: '4' },
      null,
      { id: 23, number: 5 },
      { id: 24, number: 6 },
    ],
    [
      { id: 25, number: 1, isReserved: true },
      { id: 26, number: 2 },
      null,
      { id: 27, number: '3', isReserved: true },
      { id: 28, number: '4' },
      null,
      { id: 29, number: 5 },
      { id: 30, number: 6, isReserved: true },
    ],
  ]
  return (
    <div>
      <Container>
        {/* <AppointmentPicker
          // addAppointmentCallback={this.addAppointmentCallback}
          // removeAppointmentCallback={this.removeAppointmentCallback}
          initialDay={new Date('2018-05-05')}
          days={days}
          // maxReservableAppointments={3}
          alpha
          visible
          selectedByDefault
          loading={loading}
        /> */}
      </Container>
    </div>
  )
}

export default BookASchedule
