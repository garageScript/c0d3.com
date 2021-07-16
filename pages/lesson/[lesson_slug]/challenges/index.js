import React from 'react'
import { getLayout } from '../../../../components/LessonLayout'
import { getAllLessonPaths } from '../../../../helpers/static/getAllLessonPaths'
import { getLessonMetaData } from '../../../../helpers/static/getLessonMetaData'

export default function ChallengesIndex({ lessons }) {
  return <>Challenges Index Placeholder</>
}
ChallengesIndex.getLayout = getLayout
export async function getStaticPaths() {
  const paths = getAllLessonPaths()

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params: { lesson_slug } }) {
  const metaData = await getLessonMetaData(lesson_slug)
  return {
    props: {
      lesson_slug,
      metaData
    }
  }
}
