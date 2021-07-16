import React from 'react'
import { DropdownMenu } from '../../components/DropdownMenu'

export default {
  component: DropdownMenu,
  title: 'Components/DropdownMenu'
}
const dropdownMenuItems = [
  { title: 'Lessons', path: '/admin/lessons' },
  { title: 'Users', path: '/admin/users' },
  { title: 'Alerts0', path: '/admin/alerts' }
]

const separatedMenu = [
  { title: 'Lessons', path: '/admin/lessons' },
  null,
  { title: 'Users', path: '/admin/users' },
  null,
  { title: 'Alerts1', path: '/admin/alerts' },
  { title: 'Alerts2', path: '/admin/alerts' },
  { title: 'Alerts3', path: '/admin/alerts' },
  null,
  { title: 'Alerts4', path: '/admin/alerts' }
]

const variants: any[] = [
  'Primary',
  'Success',
  'Danger',
  'Info',
  'Warning',
  'None'
]

export const Basic: React.FC = () => (
  <DropdownMenu title="Admin" items={dropdownMenuItems} />
)

export const _WithSeparators: React.FC = () => (
  <DropdownMenu title="Admin" items={separatedMenu} />
)

export const Colors = () => {
  return variants.map((variant: any, i: number) => (
    <div key={i} style={{ display: 'inline-block' }}>
      <DropdownMenu
        variant={variant.toLowerCase()}
        title={variant}
        items={dropdownMenuItems}
      />
    </div>
  ))
}

export const Directions = () => {
  const directions = ['Left', 'Down', 'Up', 'Right'].map(
    (direction: any, i: number) => (
      <div key={i} style={{ display: 'inline-block' }}>
        <DropdownMenu
          variant={variants[i].toLowerCase()}
          drop={direction.toLowerCase()}
          title={direction}
          items={dropdownMenuItems}
        />
      </div>
    )
  )

  return <div style={{ padding: 130, paddingLeft: 170 }}>{directions}</div>
}
