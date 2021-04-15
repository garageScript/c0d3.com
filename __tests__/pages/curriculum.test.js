import React from 'react'
import Curriculum, { getStaticProps } from '../../pages/curriculum'
import { render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MockedProvider } from '@apollo/client/testing'
import GET_APP from '../../graphql/queries/getApp'
import dummyLessonData from '../../__dummy__/lessonData'
import dummySessionData from '../../__dummy__/sessionData'
jest.mock('@apollo/client', () => ({
  ...jest.requireActual('@apollo/client'),
  ApolloClient: jest.fn().mockImplementation(() => ({
    query: jest
      .fn()
      .mockResolvedValueOnce({ data: { lessons: [], alerts: [] } })
  }))
}))
describe('Curriculum Page', () => {
  test('Should render Bad Data when no lessons', async () => {
    const mocks = [
      {
        request: { query: GET_APP },
        result: {
          data: {
            lessons: null,
            session: dummySessionData,
            alerts: []
          }
        }
      }
    ]

    const { findByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Curriculum />
      </MockedProvider>
    )
    const element = await findByText(/Internal server error/i)
    expect(element).toBeTruthy()
  })

  test('Should render with basic dummy data', async () => {
    const mocks = [
      {
        request: { query: GET_APP },
        result: {
          data: {
            lessons: dummyLessonData,
            session: dummySessionData,
            alerts: []
          }
        }
      }
    ]

    const { container, getByRole } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Curriculum lessons={dummyLessonData} alerts={[]} />
      </MockedProvider>
    )

    await waitFor(() => getByRole('link', { name: 'fakeusername' }))

    await waitFor(() => expect(container).toMatchSnapshot())
  })

  test('Should render with lessonStatus data', async () => {
    const session = {
      ...dummySessionData,
      lessonStatus: [
        {
          lessonId: '5',
          isPassed: true,
          isTeaching: true,
          isEnrolled: false,
          starGiven: null
        },
        {
          lessonId: '2',
          isPassed: true,
          isTeaching: true,
          isEnrolled: false,
          starGiven: null
        },
        {
          lessonId: '1',
          isPassed: true,
          isTeaching: true,
          isEnrolled: false,
          starGiven: null
        }
      ]
    }

    const mocks = [
      {
        request: { query: GET_APP },
        result: {
          data: {
            session,
            lessons: dummyLessonData,
            alerts: []
          }
        }
      }
    ]

    const { container, getByRole } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Curriculum lessons={dummyLessonData} alerts={[]} />
      </MockedProvider>
    )

    await waitFor(() => getByRole('link', { name: 'fakeusername' }))

    await waitFor(() => expect(container).toMatchSnapshot())
  })
  test('Should render curriculum with no session', async () => {
    const mocks = [
      {
        request: { query: GET_APP },
        result: {
          data: {
            lessons: dummyLessonData,
            session: null,
            alerts: []
          }
        }
      }
    ]
    const { container } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Curriculum lessons={dummyLessonData} alerts={[]} />
      </MockedProvider>
    )
    expect(container).toMatchSnapshot()
  })
  test('Should callProps', async () => {
    window.fetch = jest.fn()
    expect(await getStaticProps()).toEqual({
      props: { lessons: [], alerts: [] },
      revalidate: 300
    })
  })
})
