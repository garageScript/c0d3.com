import fs from 'fs'
import path from 'path'
import { LESSONS_PATH } from './CONSTANTS'
import { serialize } from 'next-mdx-remote/serialize'
import matter from 'gray-matter'
import { getAllSubLessonPaths } from './getAllSubLessonPaths'

const slug = require('remark-slug')
const toc = require('remark-toc')
const gfm = require('remark-gfm')

export async function getSubLessonMDXSource({ lesson_slug, sublesson_slug }) {
  const subLessonPaths = sublesson_slug
    ? [{ params: { lesson_slug, sublesson_slug } }]
    : await getAllSubLessonPaths(lesson_slug)

  const subLessonsSourceAndFrontMatter = await Promise.all(
    subLessonPaths.map(async ({ params: { lesson_slug, sublesson_slug } }) => {
      const fileContents = fs.readFileSync(
        path.join(
          LESSONS_PATH,
          lesson_slug,
          'sublesson',
          `${sublesson_slug}.mdx`
        )
      )
      const { content, data } = matter(fileContents)

      const source = await serialize(content, {
        mdxOptions: {
          remarkPlugins: [slug, [toc, { maxDepth: 2 }], gfm]
        }
      })

      return { source, frontMatter: data, sublesson_slug }
    })
  )

  return sublesson_slug
    ? subLessonsSourceAndFrontMatter[0]
    : subLessonsSourceAndFrontMatter
}
