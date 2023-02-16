type _ConditionalClassItem = string | false | null | undefined | 0
type _ClassType =
  | _ConditionalClassItem
  | _ConditionalClassItem[]
  | Record<string, boolean>
type _Merger = (...args: string[]) => string

const cleanup = (s: string) => s.replace(/\s+/gm, ' ').trim()

const processClassType = (
  ty: _ClassType,
  merger: _Merger = defaultMerger,
): string => {
  if (!ty) {
    return ''
  }

  if (typeof ty === 'string') {
    return cleanup(ty)
  } else if (Array.isArray(ty)) {
    return merger(...(ty.filter(Boolean) as string[]).map(cleanup))
  }

  return merger(
    ...Object.entries(ty).flatMap(([k, v]) => (v ? [cleanup(k)] : [])),
  )
}

const defaultMerger = (...args: string[]) => args.join(' ')

export const createClasses = (merger: _Merger = defaultMerger) => {
  return (str: TemplateStringsArray, ...keys: _ClassType[]): string => {
    let res = [] as string[]

    str.forEach((s, i) => {
      const tr = cleanup(s)
      if (tr !== '') {
        res.push(tr)
      }

      if (keys.length <= i) {
        return
      }

      const key = processClassType(keys[i], merger)
      if (key !== '') {
        res.push(key)
      }
    })

    return merger(...res)
  }
}

export const classes = createClasses()

export default classes
