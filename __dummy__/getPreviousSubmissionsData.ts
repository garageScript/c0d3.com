import dayjs from 'dayjs'
jest.useFakeTimers('modern').setSystemTime(new Date('2000-11-22').getTime())
import { GetPreviousSubmissionsQuery } from '../graphql'
import { SubmissionStatus } from '../graphql'

const dummyPreviousSubmissionsData: GetPreviousSubmissionsQuery = {
  getPreviousSubmissions: [
    {
      __typename: 'Submission',
      id: 104,
      status: SubmissionStatus.NeedMoreWork,
      diff: 'diff --git a/js0/1.js b/js0/1.js\nindex d7dcc70..0eff076 100644\n--- a/js0/1.js\n+++ b/js0/1.js\n@@ -6,9 +6,7 @@\n  * @returns {number}\n  */\n \n-const solution = (num1, num2) => {\n-  return 0\n-}\n+const solution = (num1, num2) => num1 + num2\n \n module.exports = {\n   solution\n',
      comment: "Previous submission wasn't good enough",
      challenge: {
        __typename: 'Challenge',
        title: 'Functional 3 Sum'
      },
      challengeId: 9,
      lessonId: 1,
      user: {
        __typename: 'User',
        id: 3,
        username: 'newbie'
      },
      reviewer: null,
      comments: [],
      createdAt: dayjs().subtract(16, 'day').valueOf().toString(),
      updatedAt: dayjs().subtract(16, 'day').valueOf().toString()
    },
    {
      __typename: 'Submission',
      id: 107,
      status: SubmissionStatus.Open,
      diff: 'diff --git a/foobar.js b/foobar.js\nnew file mode 100644\nindex 0000000..473b871\n--- /dev/null\n+++ b/foobar.js\n@@ -0,0 +1,32 @@\n+/*\n+SUBMISSION B\n+THIS IS A MOCK SUBMISSION TO TEST COMMENTS\n+\n+DO NOT CLOSE IT, PLEASE\n+*/\n+\n+const fetch = require("node-fetch");\n+\n+const fs = require("fs");\n+\n+fetch("https://pokeapi.co/api/v2/pokemon/")\n+  .then((data) => {\n+    return data.json();\n+  })\n+  .then((data) => {\n+    const fetchPromises = data.results.map((e) => {\n+      return fetch(e.url).then((info) => {\n+        return info.json();\n+      });\n+    });\n+\n+    Promise.all(fetchPromises)\n+      .then((result) => {\n+        return result.reduce((acc, pokeInfo) => {\n+          return `${acc}<p>${pokeInfo.name}</p><img src="${pokeInfo.sprites.front_default}"/>`;\n+        }, ``);\n+      })\n+      .then((htmlStr) => {\n+        fs.writeFile("9.html", htmlStr, () => {});\n+      });\n+  });\ndiff --git a/js7/10.js b/js7/10.js\nindex dda5c78..30e3ba2 100644\n--- a/js7/10.js\n+++ b/js7/10.js\n@@ -1,5 +1,37 @@\n-const parseJSON = (str) => {\n-  return {};\n+const parse = (str) => {\n+  //assume that str is always valid json string\n+  parseObj = (str) => {\n+    const output = {};\n+    if (str.length < 3) return output;\n+    const valueStr = str.slice(1, str.length - 1);\n+    let start = 0;\n+    let key;\n+    let val;\n+    for (let i = 0; i <= valueStr.length; i++) {\n+      if (stack[stack.length - 1] === valueStr[i]) {\n+        stack.pop();\n+      }\n+      if (valueStr[i] === "{") {\n+        stack.push("}");\n+      }\n+      if (!stack.length) {\n+        if (valueStr[i] === ":") {\n+          key = parse(valueStr.slice(start, i));\n+          start = i + 1;\n+        }\n+        if (valueStr[i] === "," || i === valueStr.length) {\n+          val = parse(valueStr.slice(start, i));\n+          start = i + 1;\n+          output[key] = val;\n+        }\n+      }\n+    }\n+    return output;\n+  };\n+  const stack = [];\n+  if (str[0] === \'"\') return str.slice(1, str.length - 1);\n+  if (str.charCodeAt(0) >= 48 && str.charCodeAt(0) <= 57) return Number(str);\n+  if (str[0] === "{") return parseObj(str);\n };\n \n-module.exports = parseJSON;\n+module.exports = parse;\n',
      comment: null,
      challenge: {
        __typename: 'Challenge',
        title: 'Functional 3 Sum'
      },
      challengeId: 9,
      lessonId: 1,
      user: {
        __typename: 'User',
        id: 3,
        username: 'newbie'
      },
      reviewer: null,
      comments: [],
      createdAt: dayjs().subtract(16, 'day').valueOf().toString(),
      updatedAt: dayjs().subtract(16, 'day').valueOf().toString()
    },
    {
      __typename: 'Submission',
      id: 108,
      status: SubmissionStatus.Open,
      diff: 'diff --git a/foobar.js b/foobar.js\nnew file mode 100644\nindex 0000000..473b871\n--- /dev/null\n+++ b/foobar.js\n@@ -0,0 +1,32 @@\n+/*\n+SUBMISSION B\n+THIS IS A MOCK SUBMISSION TO TEST COMMENTS\n+\n+DO NOT CLOSE IT, PLEASE\n+*/\n+\n+const fetch = require("node-fetch");\n+\n+const fs = require("fs");\n+\n+fetch("https://pokeapi.co/api/v2/pokemon/")\n+  .then((data) => {\n+    return data.json();\n+  })\n+  .then((data) => {\n+    const fetchPromises = data.results.map((e) => {\n+      return fetch(e.url).then((info) => {\n+        return info.json();\n+      });\n+    });\n+\n+    Promise.all(fetchPromises)\n+      .then((result) => {\n+        return result.reduce((acc, pokeInfo) => {\n+          return `${acc}<p>${pokeInfo.name}</p><img src="${pokeInfo.sprites.front_default}"/>`;\n+        }, ``);\n+      })\n+      .then((htmlStr) => {\n+        fs.writeFile("9.html", htmlStr, () => {});\n+      });\n+  });\ndiff --git a/js7/10.js b/js7/10.js\nindex dda5c78..30e3ba2 100644\n--- a/js7/10.js\n+++ b/js7/10.js\n@@ -1,5 +1,37 @@\n-const parseJSON = (str) => {\n-  return {};\n+const parse = (str) => {\n+  //assume that str is always valid json string\n+  parseObj = (str) => {\n+    const output = {};\n+    if (str.length < 3) return output;\n+    const valueStr = str.slice(1, str.length - 1);\n+    let start = 0;\n+    let key;\n+    let val;\n+    for (let i = 0; i <= valueStr.length; i++) {\n+      if (stack[stack.length - 1] === valueStr[i]) {\n+        stack.pop();\n+      }\n+      if (valueStr[i] === "{") {\n+        stack.push("}");\n+      }\n+      if (!stack.length) {\n+        if (valueStr[i] === ":") {\n+          key = parse(valueStr.slice(start, i));\n+          start = i + 1;\n+        }\n+        if (valueStr[i] === "," || i === valueStr.length) {\n+          val = parse(valueStr.slice(start, i));\n+          start = i + 1;\n+          output[key] = val;\n+        }\n+      }\n+    }\n+    return output;\n+  };\n+  const stack = [];\n+  if (str[0] === \'"\') return str.slice(1, str.length - 1);\n+  if (str.charCodeAt(0) >= 48 && str.charCodeAt(0) <= 57) return Number(str);\n+  if (str[0] === "{") return parseObj(str);\n };\n \n-module.exports = parseJSON;\n+module.exports = parse;\n',
      comment: null,
      challenge: {
        __typename: 'Challenge',
        title: 'Functional 3 Sum'
      },
      challengeId: 9,
      lessonId: 1,
      user: {
        __typename: 'User',
        id: 3,
        username: 'newbie'
      },
      reviewer: null,
      comments: [
        {
          __typename: 'Comment',
          content: 'first line comment',
          submissionId: 108,
          createdAt: '1624433720838',
          authorId: 1,
          line: 2,
          fileName: 'js7/10.js',
          author: {
            __typename: 'User',
            username: 'admin',
            name: 'Admin Administrator'
          }
        },
        {
          __typename: 'Comment',
          content: 'second line comment',
          submissionId: 108,
          createdAt: '1624433879292',
          authorId: 1,
          line: 1,
          fileName: 'js7/10.js',
          author: {
            __typename: 'User',
            username: 'admin',
            name: 'Admin Administrator'
          }
        }
      ],
      createdAt: dayjs().subtract(16, 'day').valueOf().toString(),
      updatedAt: dayjs().subtract(16, 'day').valueOf().toString()
    }
  ]
}

export default dummyPreviousSubmissionsData
