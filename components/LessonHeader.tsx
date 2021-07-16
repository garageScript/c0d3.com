import React from 'react'
import NavLink from './NavLink'
import styles from '../scss/lessonTitleCard.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'

export type LessonTitleProps = {
  lessonCoverUrl: string
  lessonUrl: string
  lessonTitle: string
  lessonId: number
  isPassed: boolean
  setShow?: React.Dispatch<React.SetStateAction<boolean>>
  show?: boolean
}

const LessonTitleCard: React.FC<any> = ({ metaData, isPassed }) => {
  const router = useRouter()
  const { pathname, query } = router
  const { lesson_slug } = router.query

  // Has to be a better solution for this up one directory
  const backonePath = pathname.slice(0, pathname.lastIndexOf('/'))
  const backonePathQuery = Object.fromEntries(
    Object.entries(query).filter(([key]) => backonePath.includes(key))
  )

  return (
    <div className="card shadow-sm mt-3 col-12 px-0 pt-3 border-0">
      <div className="card-body p-0">
        <div className="d-flex mb-3 px-3">
          <img
            className={`${styles['lessonTitleCard__lesson-cover']} mr-3`}
            src={`/assets/curriculum/${`js-${metaData.order}-cover.svg`}`}
            alt="lesson-cover"
          />
          <div>
            <p className="m-0">
              <Link
                href={{
                  pathname: backonePath,
                  query: backonePathQuery
                }}
              >
                <a>Go Back</a>
              </Link>
            </p>
            <h1 className={`${styles['lessonTitleCard__lesson-title']}`}>
              {metaData.title}
            </h1>
          </div>
        </div>
        <div className="card-footer bg-white p-0">
          <NavLink
            path={`/lesson/${lesson_slug}`}
            className="btn border-right rounded-0 px-4 py-3"
          >
            LESSON
          </NavLink>

          <NavLink
            path={`/lesson/${lesson_slug}/challenges`}
            className="btn border-right rounded-0 px-4 py-3"
          >
            CHALLENGES
          </NavLink>

          {isPassed && (
            <NavLink
              path={`/lesson/${lesson_slug}/review`}
              className="btn border-right rounded-0 px-4 py-3"
            >
              REVIEW
            </NavLink>
          )}
        </div>
      </div>
    </div>
  )
}

export default LessonTitleCard
