import React from 'react'
import LessonHeader from './LessonHeader'
import Layout from './Layout'

const LessonLayout = ({ children, ...rest }) => (
  <>
    <LessonHeader {...rest} />
    {children}
  </>
)

export const getLayout = (page, { metaData }) => {
  return (
    <Layout>
      <LessonLayout metaData={metaData} isPassed={true}>
        {page}
      </LessonLayout>
    </Layout>
  )
}

export default LessonLayout
