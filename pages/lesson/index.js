import React from 'react'
import Link from 'next/link'
import Layout from '../../components/Layout'
import { getAllLessonPaths } from '../../helpers/static/getAllLessonPaths'
import { getLessonMetaData } from '../../helpers/static/getLessonMetaData'
export default function Index({ lessons }) {
  return (
    <>
      <h1>Curriculum</h1>
      <ul>
        {lessons.map(({ lesson_slug, metaData }) => (
          <li key={lesson_slug}>
            <Link as={`/lesson/${lesson_slug}`} href={`/lesson/[lesson_slug]`}>
              <a>{metaData.title}</a>
            </Link>
            <p>{metaData.description}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

Index.getLayout = (page, pageProps) => <Layout>{page}</Layout>

export async function getStaticProps() {
  const lessons = await Promise.all(
    (
      await getAllLessonPaths()
    ).map(async ({ params: { lesson_slug } }) => {
      const metaData = await getLessonMetaData(lesson_slug)
      return {
        lesson_slug,
        metaData
      }
    })
  )

  return { props: { lessons } }
}
