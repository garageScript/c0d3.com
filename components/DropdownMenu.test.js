import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import { DropdownMenu } from './DropdownMenu'

const dropdownMenuItems = [
  { title: 'Lessons', path: '/admin/lessons', as: 'button' },
  null,
  { title: 'Users', path: '/admin/users', as: 'button' },
  { title: 'Alerts', path: '/admin/alerts', as: 'button' }
]

let testBtnOnClick = ''

describe('MdInput Component', () => {
  test('Should render divider when an item is null', () => {
    const { container, queryByRole } = render(
      <DropdownMenu title="Admin" items={dropdownMenuItems} />
    )
    const div = queryByRole('separator')

    expect(div).toBeTruthy
    expect(container).toMatchSnapshot()
  })

  test('Should change value of testBtnOnClick upon click', () => {
    dropdownMenuItems[0].onClick = val => (testBtnOnClick = val)
    const { container } = render(
      <DropdownMenu title="Admin" items={dropdownMenuItems} />
    )
    const btn = screen.queryByText('Admin')
    fireEvent.click(btn, { button: 1 })
    const lessons = screen.queryAllByText('Lessons')[0]
    fireEvent.click(lessons, { button: 1 })
    expect(testBtnOnClick).toEqual('Lessons')
    expect(container).toMatchSnapshot()
  })
})
