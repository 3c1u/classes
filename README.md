# classes

Simple classname utility for whitespace sanitizing and conditional rendering.

## Usage

```
yarn add @3c1u/classes
```

```ts
const disabled = true
const isActive = false
const isPrimary = true

const className = classes`
  ${disabled && 'opacity-90'}
  ${[isActive && 'bg-blue-500', 'focus:ring']}
  ${{
    'font-bold': isPrimary,
  }}
`
```

```ts
import { twMerge } from 'tailwind-merge'

const tw = createClasses(twMerge)

const className = tw`bg-blue-500 bg-blue-600`
```
