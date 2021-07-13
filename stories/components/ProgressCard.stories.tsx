import * as React from 'react'
import ProgressCard from '../../components/ProgressCard'

export default {
  component: ProgressCard,
  title: 'Components/ProgressCard'
}

export const LoggedOut: React.FC = () => (
  <ProgressCard progressCount={-1} loggedIn={false} loading={false} />
)
export const Basic: React.FC = () => (
  <ProgressCard progressCount={0} loggedIn loading={false} />
)
export const Progress: React.FC = () => (
  <ProgressCard progressCount={40} loggedIn loading={false} />
)
export const CompletedProgress: React.FC = () => (
  <ProgressCard progressCount={100} loggedIn loading={false} />
)
