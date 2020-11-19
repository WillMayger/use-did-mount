# useDidMount React Hook for using componentDidMount in react hooks.

This package is intended as a last resort for using componentDidMount in react hooks.

There are other, simpler, more efficient, solutions to finding a componentDidMount equivalent in react hooks that do not need to be imported. The article and gist below will help you find the relevant one for you.

Before using this package I highly recommend reading the following article about [using componentDidMount in react hooks](https://atomizedobjects.com/blog/react/using-componentdidmount-in-react-hooks/).
And then checking [this Gist for potential solutions to this problem](https://gist.github.com/WillMayger/03f04be7a3697549e62baef6343a62d7).

If none of these other solutions are applicable then this package is for you.

## Install

Yarn:
`yarn add use-did-mount`

NPM:
`npm install --save use-did-mount`

## Importing

`import useDidMount from 'use-did-mount'`

## Usage

```js
import React from 'react'
import useDidMount from 'use-did-mount'

export default function DidMountExampleComponent() {
  useDidMount(() => {
    window.title = 'Hello world!'
  })

  return <h1>Hello world! </h1>
}
```

Alternatively with external dependencies:

```js
import React from 'react'
import useDidMount from 'use-did-mount'

const fetchName = async (set) => {
  const name = await fetch('https://atomizedobjects.com')
  set(name)
}

export default function DidMountExampleComponent() {
  const [name, setName] = useState(null)
  useDidMount(() => {
    fetchName(setName)
  })

  return <h1>Hello, {name}!</h1>
}
```

### Types & Arguments

| Argument | TypeScript Type | JavaScript Type | Description                                 |
| -------- | --------------- | --------------- | ------------------------------------------- |
| callback | () => void      | function        | A function that will be run once, on mount. |
