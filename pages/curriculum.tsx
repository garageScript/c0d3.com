import React, { useEffect, useState, useRef } from 'react'
import Layout from '../components/Layout'
import Error, { StatusCode } from '../components/Error'
import LessonCard from '../components/LessonCard'
import ProgressCard from '../components/ProgressCard'
import AnnouncementCard from '../components/AnnouncementCard'
import AdditionalResources from '../components/AdditionalResources'
import AlertsDisplay from '../components/AlertsDisplay'
import {
  GetAppQuery,
  GetAppDocument,
  Lesson,
  Alert,
  UserLesson,
  useGetSessionQuery,
  GetSessionQuery
} from '../graphql/'
import DiscordBar from '../components/DiscordBar'
import _ from 'lodash'
import { initializeApollo } from '../helpers/apolloClient'
import { GetStaticProps } from 'next'
import styles from '../scss/curriculum.module.scss'

const announcements = [
  'To make space for other students on our servers, your account will be deleted after 30 days of inactivity.',
  'Take each lesson challenge seriously and do them over and over again until you can solve them. With the exception End to End, all challenges are questions and exercises taken from real interviews.',
  'These lessons will not only prepare you for interviews, but it will also help teach you the skills that you need to become an effective engineer.',
  'After completing Foundations of JavaScript, Variables & Functions, Array, Objects, End to End, HTML/CSS/JavaScript, React/GraphQL/SocketIO, you will be ready to contribute to our codebase.'
]
type Props = {
  lessons: Lesson[]
  alerts: Alert[]
}

interface State {
  session: GetSessionQuery['session']
  progress: number
  current: number
}

const generateMap = (
  session: GetSessionQuery['session']
): { [id: string]: UserLesson } => {
  const lessonStatusMap: { [id: string]: UserLesson } = {}
  const { lessonStatus } = session!
  for (const status of lessonStatus) {
    const lessonId = _.get(status, 'lessonId', '-1') as string
    lessonStatusMap[lessonId] = status as UserLesson
  }
  return lessonStatusMap
}
const calculateProgress = (
  session: GetSessionQuery['session'],
  lessons: Lesson[]
): number => {
  const lessonStatusMap = generateMap(session)
  const lessonInProgressIdx = _.cond([
    [_.isEqual.bind(null, -1), _.constant(0)],
    [_.constant(true), (output: number) => output]
  ])(
    lessons.findIndex(lesson => {
      const lessonId = _.get(lesson, 'id', '-1') as string
      const passed = _.get(lessonStatusMap[lessonId], 'isPassed', false)
      return !passed
    })
  )
  // Progress Percentage should be calculated from lessons 0-6 because thats our current standard of finishing the curriculum.
  const TOTAL_LESSONS = 7
  return Math.floor((lessonInProgressIdx * 100) / TOTAL_LESSONS)
}
const calculateCurrent = (
  session: GetSessionQuery['session'],
  lessons: Lesson[]
): number => {
  const lessonStatusMap = generateMap(session)
  return _.cond([
    [_.isEqual.bind(null, -1), _.constant(0)],
    [_.constant(true), (output: number) => output]
  ])(
    lessons.findIndex(lesson => {
      const lessonId = _.get(lesson, 'id', '-1') as string
      const passed = _.get(lessonStatusMap[lessonId], 'isPassed', false)
      return !passed
    })
  )
}

const ScrollArrow: React.FC<{ scrolledRight: boolean }> = ({
  scrolledRight
}) => {
  return (
    <img
      src={`/assets/curriculum/icons/scroll-${
        scrolledRight ? 'left' : 'right'
      }.svg`}
      className={`${styles['arrow']} ${
        scrolledRight && styles['right']
      } position-fixed d-xl-none`}
      data-testid="arrow"
    />
  )
}
export const Curriculum: React.FC<Props> = ({ lessons, alerts }) => {
  //fallback in case if localStorage (which is used by persistent cache) is disabled
  const { data, loading } = useGetSessionQuery({
    fetchPolicy: 'cache-and-network'
  })
  const [state, setState] = useState<State>({
    session: { lessonStatus: [] },
    progress: -1,
    current: -1
  })
  if (!lessons || !alerts) {
    return <Error code={StatusCode.INTERNAL_SERVER_ERROR} message="Bad data" />
  }
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [scrolledRight, setScrolledRight] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      /*istanbul ignore else*/
      if (scrollContainerRef.current) {
        const status = scrollContainerRef.current.scrollLeft / window.innerWidth
        if (status > 0.9) {
          setScrolledRight(true)
          window.localStorage.setItem('horizontalScrollUsed', 'true')
        }
        if (status < 0.1) setScrolledRight(false)
      }
    }
    scrollContainerRef.current &&
      scrollContainerRef.current.addEventListener(
        'scroll',
        _.throttle(onScroll)
      )
  }, [])
  useEffect(() => {
    if (data && data.session) {
      setState({
        session: data.session,
        progress: calculateProgress(data.session, lessons),
        current: calculateCurrent(data.session, lessons)
      })
    }
  }, [data])
  const lessonStatusMap = generateMap(state.session)
  const lessonsToRender: React.ReactElement[] = lessons.map((lesson, idx) => {
    const id = _.get(lesson, 'id', idx) as number
    const status = lessonStatusMap[id]
    let lessonState = ''
    if (idx === state.current) {
      lessonState = 'inProgress'
    }
    const passed = _.get(status, 'isPassed', false)
    if (passed) {
      lessonState = 'completed'
    }
    const title = _.get(lesson, 'title', '') as string
    const challengeCount = _.get(lesson, 'challenges.length', 0) as number
    const description = _.get(lesson, 'description', '') as string
    return (
      <LessonCard
        key={id}
        lessonId={id}
        coverImg={`js-${idx}-cover.svg`}
        title={title}
        challengeCount={challengeCount}
        description={description}
        currentState={lessonState}
        reviewUrl={`/review/${id}`}
        challengesUrl={`/curriculum/${id}`}
        docUrl={_.get(lesson, 'docUrl', '') as string}
      />
    )
  })
  return (
    <Layout title="Curriculum">
      {typeof window !== 'undefined' &&
        !window.localStorage.getItem('horizontalScrollUsed') && (
          <ScrollArrow scrolledRight={scrolledRight} />
        )}
      <div
        className={`row overflow-auto flex-nowrap ${styles['parent-scroll']}`}
        ref={scrollContainerRef}
        data-testid="parent-scroll"
      >
        <div className={`col-12 col-xl-8 ${styles['child-scroll']}`}>
          <AlertsDisplay alerts={alerts} page="curriculum" />
          <div className="d-xl-none">
            <ProgressCard
              progressCount={state.progress}
              loggedIn={!!state.session?.user}
              loading={loading}
            />
          </div>
          {lessonsToRender}
        </div>
        <div className={`col-12 col-xl-4 ${styles['child-scroll']}`}>
          <DiscordBar />
          <div className="d-none d-xl-block">
            <ProgressCard
              progressCount={state.progress}
              loggedIn={!!state.session?.user}
              loading={loading}
            />
          </div>
          <AnnouncementCard announcements={announcements} />
          <AdditionalResources />
        </div>
      </div>
    </Layout>
  )
}
const FIVE_MINUTES = 5 * 60

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo()
  const query = await apolloClient.query<GetAppQuery>({
    query: GetAppDocument
  })

  return {
    props: {
      lessons: query.data.lessons,
      alerts: query.data.alerts
    },
    revalidate: FIVE_MINUTES
  }
}
export default Curriculum
