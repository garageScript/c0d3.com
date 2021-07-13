import React from 'react'
import NavLink from './NavLink'
import styles from '../scss/progressCard.module.scss'

const ProgressBar: React.FC<{ progressCount: number }> = ({
  progressCount
}) => {
  return (
    <div className="bg-white my-3 rounded">
      <div
        className={`${styles['progress-card__horizontal']} bg-primary d-flex ${
          progressCount >= 100 ? 'rounded' : 'rounded-left'
        }`}
        style={{
          width: progressCount <= 0 ? 'min-content' : `${progressCount}%`
        }}
      >
        <div className="align-self-center px-1 ml-auto font-weight-bold">
          {progressCount}%
        </div>
      </div>
    </div>
  )
}

const ProgressSVG: React.FC<{
  progressCount: number
}> = ({ progressCount }) => {
  let x = 15
  if (progressCount === 100) x = 9
  else if (progressCount >= 10) x = 11
  return (
    <div
      className={`${styles['progress-card__wrapper']} d-flex align-items-center`}
    >
      <svg viewBox="0 0 40 40" width="65px">
        <circle
          cx="20"
          cy="20"
          r="17"
          fill="transparent"
          stroke="#3a22b8"
          strokeWidth="4.5"
        />
        <circle
          cx="20"
          cy="20"
          r="17"
          fill="transparent"
          stroke="#fff"
          strokeDasharray={`${progressCount} ${100 - progressCount}`}
          strokeDashoffset="20"
          strokeWidth="4.5"
        />
        <g className="circle-label">
          <text
            color="#fff"
            x={x}
            y="23"
            fill="#fff"
            style={{ font: 'bold 10px sans-serif' }}
          >
            {progressCount}
            <tspan fontSize="8px">%</tspan>
          </text>
        </g>
      </svg>
    </div>
  )
}

const WelcomeMessage: React.FC<{
  progressCount: number
  loggedIn: boolean
  loading: boolean
}> = ({ progressCount, loggedIn, loading }) => {
  if (loading) return <></>
  if (!loggedIn)
    return (
      <h4 className={`${styles['progress-card__title']} mt-4 text-center `}>
        Join C0D3 now and start your software engineering journey!
      </h4>
    )
  let title = ''
  if (progressCount <= 13) {
    // Has not finished 1st module yet
    title = `You're off to a great start!`
  } else if (progressCount <= 50) {
    title = `Keep up the great work!`
  } else if (progressCount < 100) {
    title = `Well done! You're over half way!`
  } else {
    // Assertion: progressCount = 100
    title = `Congratulations! You've finished the course!`
  }

  return (
    <>
      <h4 className={`${styles['progress-card__title']} mt-3 text-center`}>
        {title}
      </h4>
      {loggedIn && (
        <>
          <div className="d-block d-xl-none">
            <ProgressBar progressCount={progressCount} />
          </div>
          <div className="d-none d-xl-flex justify-content-center">
            <ProgressSVG progressCount={progressCount} />
          </div>
        </>
      )}
    </>
  )
}

const ProgressCard: React.FC<{
  progressCount: number
  loggedIn: boolean
  loading: boolean
}> = ({ progressCount, loggedIn, loading }) => {
  return (
    <div
      className={`${styles['progress-card__container']} card shadow-sm mt-3 bg-primary text-white px-3 px-xl-4 py-2 border-0`}
    >
      <WelcomeMessage
        progressCount={progressCount}
        loading={loading}
        loggedIn={loggedIn}
      />
      <div className="mt-3">
        Join us on
        <NavLink
          className={`${styles['progress-newuser__chatlink']} text-white`}
          path="https://discord.gg/c0d3"
          external
        >
          <p className="font-weight-bold d-inline">Discord</p>
        </NavLink>
        to ask your questions. Start by setting up your development environment
        and then follow the lessons in the course.
      </div>
      <div className="mt-4 d-flex flex-column">
        <NavLink
          path="/docs/setup"
          className={`btn btn-light ${styles['progress-card__button']} mt-2 text-primary`}
        >
          Setup Development Environment
        </NavLink>
      </div>
    </div>
  )
}

export default ProgressCard
