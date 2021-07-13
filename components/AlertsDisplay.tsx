import React, { useState, useEffect } from 'react'
import Alert from './Alert'
import { DismissedAlerts } from '../@types/alerts'
import { Alert as AlertType } from '../graphql/'
import _ from 'lodash'

type Props = {
  alerts?: AlertType[]
  page?: string
}

const AlertsDisplay: React.FC<Props> = ({ alerts = [], page }) => {
  const [dismissedAlerts, onDismiss] = useState<DismissedAlerts>({})
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const localDismissedAlerts = localStorage.getItem('dismissedAlerts')
    if (localDismissedAlerts) {
      onDismiss(JSON.parse(localDismissedAlerts))
    }
    setLoading(false)
  }, [])

  const dismissAlert = (id: number) => {
    onDismiss(prevDismissedAlerts => {
      const newDismissedAlerts = { ...prevDismissedAlerts, [id]: true }
      localStorage.setItem(
        'dismissedAlerts',
        JSON.stringify(newDismissedAlerts)
      )
      return newDismissedAlerts
    })
  }

  if (loading) return null

  const widthClass = page === 'curriculum' ? 'col-12' : ''
  return (
    <div className={`alerts-container ${widthClass} p-0`}>
      {alerts
        .filter(alert => !dismissedAlerts[alert.id])
        .map(alert => (
          <Alert key={alert.id} alert={alert} onDismiss={dismissAlert} />
        ))}
    </div>
  )
}

export default AlertsDisplay
