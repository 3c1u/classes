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

## Usage with Tailwind CSS + Visual Studio Code

To get autocomplete working with Tailwind CSS, install the [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) extension. Then, add the following to your `settings.json`:

```jsonc
  "tailwindCSS.experimental.classRegex": [
    ["tw`([^`]*)`", "[`'\"`]([^'\"`,;]*)[`'\"`]"],
    // ...
  ],
```

## Similar Projects

### [clsx](https://github.com/lukeed/clsx)

Classname utility for conditionally joining classNames together. It uses function arguments instead of template literals.

## License

Licensed under the MIT license.
See [LICENSE](./LICENSE) for more information.
