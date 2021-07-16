import React from 'react'
import { MDXRemote } from 'next-mdx-remote'
import { getLayout } from '../../../components/LessonLayout'

import { getSubLessonMDXSource } from '../../../helpers/static/getSubLessonMDXSource'
import { getAllSubLessonPaths } from '../../../helpers/static/getAllSubLessonPaths'
import { getLessonMetaData } from '../../../helpers/static/getLessonMetaData'

const Lesson = props => {
  return <MDXRemote {...props.subLesson.source}></MDXRemote>
}

Lesson.getLayout = getLayout

export default Lesson

export async function getStaticPaths() {
  const paths = await getAllSubLessonPaths()

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({
  params: { lesson_slug, sublesson_slug }
}) {
  const metaData = await getLessonMetaData(lesson_slug)
  const subLesson = await getSubLessonMDXSource({ lesson_slug, sublesson_slug })

  return {
    props: {
      lesson_slug,
      sublesson_slug,
      subLesson,
      metaData // Consumed by LessonLayout
    }
  }
}
