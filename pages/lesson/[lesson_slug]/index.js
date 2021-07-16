import React from 'react'
import Link from 'next/link'
import { getLayout } from '../../../components/LessonLayout'

import { getAllLessonPaths } from '../../../helpers/static/getAllLessonPaths'
import { getLessonMetaData } from '../../../helpers/static/getLessonMetaData'
import { getSubLessonMDXSource } from '../../../helpers/static/getSubLessonMDXSource'

const Index = ({ subLessons, lesson_slug }) => {
  const orderedSublessons = subLessons.sort((a, b) => {
    return a.frontMatter.order - b.frontMatter.order
  })

  return (
    <>
      <h1>sublessons</h1>
      <ul>
        {orderedSublessons.map(
          ({ sublesson_slug, frontMatter: { title, order } }) => (
            <li key={order}>
              <Link
                as={`/lesson/${lesson_slug}/${sublesson_slug}`}
                href={`/lesson/[lesson_slug]/[sublesson_slug]`}
              >
                <a>{title}</a>
              </Link>
            </li>
          )
        )}
      </ul>
    </>
  )
}

Index.getLayout = getLayout

export default Index

export async function getStaticPaths() {
  return {
    paths: await getAllLessonPaths(),
    fallback: false
  }
}

export async function getStaticProps({ params: { lesson_slug } }) {
  const metaData = await getLessonMetaData(lesson_slug)
  const subLessons = await getSubLessonMDXSource({ lesson_slug })
  return {
    props: {
      lesson_slug,
      subLessons,
      metaData // Consumed by LessonLayout
    }
  }
}
