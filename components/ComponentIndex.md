# Component Cheatsheet

> Key: Component( props ) <~ contextUsage

---

- MyApp( Component, pageProps, err)
  - ApolloProvider( apolloClient )
    - MDXProvider ( MDXcomponents )
      - ContextProvider
        - Head
          - meta
        - Component( pageProps, err)

---

- Layout( children, title )

  - Head( title )
  - AppNav
  - (children)
  - Footer

---

- NavBar( session )

  - div
    - [NavLink( path!, name!, external?!, activePath, className! )]
    - session.user.isAdmin && DropdownMenu( title!, items!)

- AuthButton( initial, username ) <~apollo( useLogoutMutation )

  - NavLink( path!, as, className!)
    - text( initial, username)
  - Button( logoutUser<~ )

- UnAuthButton

  - div
    - NavLink ( path!, className! )
    - NavLink ( path!, className! )

- AppNav <~ apollo ( useGetAppQuery )
  - div ( className! )
    - NavLink ( path!, className! )
    - div ( id! )
      - div ( className! )
        - NavBar ( session<~ )
    - UnAuthButton <br> OR { useGetAppQuery} <br> AuthButton ( username<~,
      initial)

---

- Challenges ( queryData ) <~ GlobalContext, useRouter

  - _if loading<~router {_
  - LoadingSpinner ()
  - _else if_ invalid lesson id(queryData, router<~)
  - Error ( code, message!)
  - div
    - Layout ( title )
      - currentLesson && LessonTitleCard ( lessonCoverUrl, lessonUrl,
        lessonTitle, lessonId, isPassed, setShow, show)
      - alerts && AlertDisplay ( alerts )
      - ChallengeMaterial ( challenges, userSubmissions, lessonStatus, lessonId,
        chatUrl, show, setShow)

- withQueryLoader ( query, Challenges)

---

- Curriculum ( lessons, alerts )

  - _if (lessons, alerts)_
  - Error ( code, message!)
  - _else_
  - Layout (title)

    - _if (localStorage)_ ScrollArrow ( scrolledRight )
    - div ( className!, ref, data-testid! )
      - div ( className ) -AlertsDisplay ( alerts, page! )
        - div ( className! )
        - ProgressCard ( progressCount, loggedIn )
        - MAP[LessonCard ( lessonId, coverImg, title, challengeCount,
          description, currentState, reviewUrl, challengeUrl, docUrl)]
        - div ( className! )
          - DiscordBar ()
            - div ( className! )
              - ProgressCard ( progressCount, loggedIn )
            - AnnouncementCard ( announcements )
            - AdditionalResources ()

  - getStaticProps () <~ apollo
    - => ( lessons, alerts ), revalidate

---

- IndexPage () <~router
  - Head
    - title
  - AppNav
  - _if (status)_
    - Fragment
      - LandingPage ()
      - Footer ( footerType! )
  - _end if_
  - div ( className! )
    - noscript
      - div (className ! )
        - pre
  - Footer (footerType!)
