import React from 'react'
import Curriculum, { getStaticProps } from '../../pages/curriculum'
import { render, waitFor, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MockedProvider } from '@apollo/client/testing'
import GET_APP from '../../graphql/queries/getApp'
import dummyLessonData from '../../__dummy__/lessonData'
import dummySessionData from '../../__dummy__/sessionData'
//mock for server side generation
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

    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Curriculum />
      </MockedProvider>
    )
    const element = await screen.findByText(/Internal server error/i)
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

    const { container } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Curriculum lessons={dummyLessonData} alerts={[]} />
      </MockedProvider>
    )

    await screen.findByText('Fakeusername')
    await waitFor(() => screen.getAllByText(`You're off to a great start!`))
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

    const { container } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Curriculum lessons={dummyLessonData} alerts={[]} />
      </MockedProvider>
    )

    await screen.findByText('Fakeusername')
    await waitFor(() => screen.getAllByText('Keep up the great work!'))

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
    await waitFor(() => screen.getByRole('link', { name: 'Login' }))
    expect(container).toMatchSnapshot()
  })
  test('Should callProps', async () => {
    window.fetch = jest.fn()
    expect(await getStaticProps()).toEqual({
      props: { lessons: [], alerts: [] },
      revalidate: 300
    })
  })
  test('Should change navigation arrow direction on scroll', async () => {
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

    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Curriculum lessons={dummyLessonData} alerts={[]} />
      </MockedProvider>
    )
    jest
      .spyOn(window.localStorage.__proto__, 'getItem')
      .mockImplementation(() => null)
    const arrow = screen.getByTestId('arrow')
    expect(arrow.className.includes('right'))
    await waitFor(() =>
      fireEvent.scroll(screen.getByTestId('parent-scroll'), { x: 10 })
    )
    //jest-dom doesn't render elements the way browsers do, it only reconstructs dom,
    //so some of their properties are always zero, hence the mock
    jest
      .spyOn(screen.getByTestId('parent-scroll'), 'scrollLeft', 'get')
      .mockImplementation(() => 1024)
    await waitFor(() =>
      fireEvent.scroll(screen.getByTestId('parent-scroll'), { x: 1024 })
    )
    expect(arrow.className.includes('left'))
  })
})
