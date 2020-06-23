import React from 'react'
import { render, wait } from '@testing-library/react'
import { MockedProvider } from '@apollo/react-testing'
import GET_APP from '../../graphql/queries/getApp'
import IndexPage from '../../pages/index'

// mocked imports
jest.mock('next/router')
import { useRouter } from 'next/router'

// dummy data
import dummySessionData from '../../__dummy__/sessionData'

describe('<IndexPage />', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  const mocksWithSession = session => [
    {
      request: { query: GET_APP },
      result: {
        data: {
          session,
          lessons: [],
          alerts: []
        }
      }
    }
  ]

  describe('with session data', () => {
    // mock data with session
    const mocks = mocksWithSession(dummySessionData)

    test('should redirect to /curriculum and return null', async () => {
      const routerPush = jest.fn()
      useRouter.mockReturnValue({ push: routerPush })

      const tree = (
        <MockedProvider mocks={mocks} addTypename={false}>
          <IndexPage />
        </MockedProvider>
      )

      const { container } = render(tree)
      await wait() // wait for loading state to pass

      expect(routerPush).toBeCalledWith('/curriculum')
      expect(container.firstChild).toBeNull()
    })
  })

  describe('without session data', () => {
    // mock data without session
    const mocks = mocksWithSession(null)

    test('should not redirect', async () => {
      const routerPush = jest.fn()
      useRouter.mockReturnValue({ push: routerPush })

      const tree = (
        <MockedProvider mocks={mocks} addTypename={false}>
          <IndexPage />
        </MockedProvider>
      )

      render(tree)
      await wait() // wait for loading state to pass

      expect(routerPush).not.toHaveBeenCalled()
    })
  })
})
