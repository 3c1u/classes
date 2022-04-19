type _ConditionalClassItem = string | false | null | undefined | 0
type _ClassType =
  | _ConditionalClassItem
  | _ConditionalClassItem[]
  | Record<string, boolean>

const cleanup = (s: string) => s.replace(/\s+/gm, ' ').trim()

const processClassType = (ty: _ClassType): string => {
  if (!ty) {
    return ''
  }

  if (typeof ty === 'string') {
    return cleanup(ty)
  } else if (Array.isArray(ty)) {
    return (ty.filter(Boolean) as string[]).map(cleanup).join(' ')
  }

  return Object.entries(ty)
    .flatMap(([k, v]) => (v ? [cleanup(k)] : []))
    .join(' ')
}

export const classes = (
  str: TemplateStringsArray,
  ...keys: _ClassType[]
): string => {
  let res = [] as string[]

  str.forEach((s, i) => {
    const tr = cleanup(s)
    if (tr !== '') {
      res.push(tr)
    }

    if (keys.length <= i) {
      return
    }

    const key = processClassType(keys[i])
    if (key !== '') {
      res.push(key)
    }
  })

  return res.join(' ')
}

export default classes
