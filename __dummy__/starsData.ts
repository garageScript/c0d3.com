import { Star } from '../graphql'
const dummyStarData: Star[] = [
  {
    id: 1,
    student: {
      id: 1,
      username: 'newbie',
      name: 'newbie newbie',
      isAdmin: false,
      email: 'newbie@mail.com'
    },
    lessonId: 1,
    lesson: {
      title: 'Foundations of JavaScript',
      order: 0,
      id: 5,
      description: 'A super simple introduction to help you get started!'
    },
    comment: "You're the best!!"
  },
  {
    id: 2,
    student: {
      id: 1,
      username: 'newbie',
      name: 'newbie newbie',
      isAdmin: false,
      email: 'newbie@mail.com'
    },
    lessonId: 1,
    lesson: {
      title: 'Variables & Functions',
      order: 1,
      id: 2,
      description:
        'Learn how to solve simple algorithm problems recursively with the following exercises. '
    },
    comment: "You're the best!!"
  },
  {
    id: 3,
    student: {
      id: 1,
      username: 'newbie',
      name: 'newbie newbie',
      isAdmin: false,
      email: 'newbie@mail.com'
    },
    lessonId: 1,
    lesson: {
      title: 'Arrays',
      order: 2,
      id: 1,
      description:
        'These exercises will help you gain a better understanding of what it means for a data structure to be non-primitive.'
    },
    comment: "You're the best!!"
  },
  {
    id: 4,
    student: {
      id: 1,
      username: 'newbie',
      name: 'newbie newbie',
      isAdmin: false,
      email: 'newbie@mail.com'
    },
    lessonId: 4,
    lesson: {
      title: 'Objects',
      order: 3,
      id: 4,
      description:
        'These exercises will test your understanding of objects, which includes linked lists and trees'
    },
    comment: "You're the best!!"
  },
  {
    id: 5,
    student: {
      id: 1,
      username: 'newbie',
      name: 'newbie newbie',
      isAdmin: false,
      email: 'newbie@mail.com'
    },
    lessonId: 24,
    lesson: {
      title: 'Front End Engineering',
      order: 4,
      id: 24,
      description:
        'Create challenging front-end mini-projects and build an understanding of Web Development. Covers the last fundamental JavaScript concept: (Complex Objects)'
    },
    comment: "You're the swellest!!"
  },
  {
    id: 6,
    student: {
      id: 1,
      username: 'newbie',
      name: 'newbie newbie',
      isAdmin: false,
      email: 'newbie@mail.com'
    },
    lessonId: 3,
    lesson: {
      title: 'End To End',
      order: 5,
      id: 3,
      description:
        'These exercises will help you build a strong understanding of how the web works.'
    },
    comment: "You're the best!!"
  },
  {
    id: 7,
    student: {
      id: 1,
      username: 'newbie',
      name: 'newbie newbie',
      isAdmin: false,
      email: 'newbie@mail.com'
    },
    lessonId: 29,
    lesson: {
      title: 'React, GraphQL, SocketIO',
      order: 6,
      id: 29,
      description: 'React and GraphQL Lessons'
    },
    comment: "You're the best!!"
  },
  {
    id: 8,
    student: {
      id: 1,
      username: 'newbie',
      name: 'newbie newbie',
      isAdmin: false,
      email: 'newbie@mail.com'
    },
    lessonId: 5,
    lesson: {
      title: 'Foundations of JavaScript',
      order: 0,
      id: 5,
      description: 'A super simple introduction to help you get started!'
    },
    comment:
      'You have revealed the truth, and the truth has set me free. Hence my comment shall be superfluous and my praise excessive. I bestow this star upon thee, o kind sir. Actually just testing how long comments look on the UI. Should be okay.'
  },
  {
    id: 9,
    student: {
      id: 1,
      username: 'nubbie',
      name: 'hello nub',
      isAdmin: false,
      email: 'newbie@mail.com'
    },
    lessonId: 2,
    lesson: {
      title: 'Variables & Functions',
      order: 1,
      id: 2,
      description:
        'Learn how to solve simple algorithm problems recursively with the following exercises. '
    },
    comment: "You're the best!!"
  },
  {
    id: 10,
    student: {
      id: 1,
      username: 'nubbie',
      name: 'hello nub',
      isAdmin: false,
      email: 'newbie@mail.com'
    },
    lessonId: 1,
    lesson: {
      title: 'Arrays',
      order: 2,
      id: 1,
      description:
        'These exercises will help you gain a better understanding of what it means for a data structure to be non-primitive.'
    },
    comment: "You're the best!!"
  },
  {
    id: 11,
    student: {
      id: 1,
      username: 'nubbie',
      name: 'hello nub',
      isAdmin: false,
      email: 'newbie@mail.com'
    },
    lessonId: 4,
    lesson: {
      title: 'Objects',
      order: 3,
      id: 4,
      description:
        'These exercises will test your understanding of objects, which includes linked lists and trees'
    },
    comment: "You're the best!!"
  },
  {
    id: 12,
    student: {
      id: 1,
      username: 'nubbie',
      name: 'hello nub',
      isAdmin: false,
      email: 'newbie@mail.com'
    },
    lessonId: 24,
    lesson: {
      title: 'Front End Engineering',
      order: 4,
      id: 24,
      description:
        'Create challenging front-end mini-projects and build an understanding of Web Development. Covers the last fundamental JavaScript concept: (Complex Objects)'
    },
    comment: "You're the best!!"
  },
  {
    id: 13,
    student: {
      id: 1,
      username: 'nubbie',
      name: 'hello nub',
      isAdmin: false,
      email: 'newbie@mail.com'
    },
    lessonId: 3,
    lesson: {
      title: 'End To End',
      order: 5,
      id: 3,
      description:
        'These exercises will help you build a strong understanding of how the web works.'
    },
    comment: "You're the best!!"
  },
  {
    id: 14,
    student: {
      id: 1,
      username: 'nubbie',
      name: 'hello nub',
      isAdmin: false,
      email: 'newbie@mail.com'
    },
    lessonId: 29,
    lesson: {
      title: 'React, GraphQL, SocketIO',
      order: 6,
      id: 29,
      description: 'React and GraphQL Lessons'
    },
    comment:
      'You have revealed the truth, and the truth has set me free. I bestow this star upon thee, o kind sir. Actually just testing how long comments look on the UI.'
  }
]
export default dummyStarData
