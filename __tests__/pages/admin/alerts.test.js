import * as React from 'react'
import { MockedProvider } from '@apollo/client/testing'
import {
  render,
  waitFor,
  screen,
  waitForElementToBeRemoved
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Alerts from '../../../pages/admin/alerts'
import GET_APP from '../../../graphql/queries/getApp'
import REMOVE_ALERT from '../../../graphql/queries/removeAlert'
import dummyLessonData from '../../../__dummy__/lessonData'
import dummySessionData from '../../../__dummy__/sessionData'
import dummyAlertData from '../../../__dummy__/alertData'
import * as Sentry from '@sentry/browser'
jest.mock('@sentry/browser')

const getAppMock = {
  request: {
    query: GET_APP
  },
  result: {
    data: {
      session: dummySessionData,
      lessons: dummyLessonData,
      alerts: dummyAlertData
    }
  }
}
const removeAlertMock = {
  request: {
    query: REMOVE_ALERT,
    variables: { id: 0 }
  },
  result: {
    data: {
      removeAlert: { success: true }
    }
  }
}

window.confirm = jest.fn(() => true)
describe('Alerts page', () => {
  test('Should remove alert', async () => {
    const { container } = render(
      <MockedProvider addTypename={false} mocks={[getAppMock, removeAlertMock]}>
        <Alerts />
      </MockedProvider>
    )
    await waitForElementToBeRemoved(() => screen.queryByText('Loading...'))
    expect(container).toMatchSnapshot()
    screen.getAllByRole('button', { name: 'Remove Alert' })
    userEvent.click(screen.getAllByRole('button', { name: 'Remove Alert' })[0])
    await waitForElementToBeRemoved(() =>
      screen.queryByText('Set up your computer to submit challenges.')
    )
    expect(container).toMatchSnapshot()
  })
  test('Should capture error', async () => {
    const errorMock = { ...removeAlertMock, error: new Error('fail') }
    render(
      <MockedProvider addTypename={false} mocks={[getAppMock, errorMock]}>
        <Alerts />
      </MockedProvider>
    )
    await waitForElementToBeRemoved(() => screen.queryByText('Loading...'))
    screen.getAllByRole('button', { name: 'Remove Alert' })
    userEvent.click(screen.getAllByRole('button', { name: 'Remove Alert' })[0])
    await waitFor(() => expect(Sentry.captureException).toBeCalled())
  })
})
