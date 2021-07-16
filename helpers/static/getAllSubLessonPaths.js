import fs from 'fs'
import path from 'path'
import { LESSONS_PATH } from './CONSTANTS'
import { getAllLessonPaths } from './getAllLessonPaths'

export async function getAllSubLessonPaths(lesson_slug) {
  const lessonPaths = lesson_slug
    ? [{ params: { lesson_slug } }]
    : await getAllLessonPaths()

  const subLessonPaths = lessonPaths.flatMap(({ params: { lesson_slug } }) => {
    const subLessonPath = path.join(LESSONS_PATH, lesson_slug, 'sublesson')
    const fileNames = fs.readdirSync(subLessonPath)

    return fileNames.map(file => {
      return {
        params: {
          lesson_slug,
          sublesson_slug: file.replace(/\.mdx?$/, '')
        }
      }
    })
  })

  return subLessonPaths
}
