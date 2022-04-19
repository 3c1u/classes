import { classes } from '../src'

describe('classes', () => {
  it('sanitizes whitespace', () => {
    expect(classes`a b　c\t\nd`).toBe('a b c d')
  })

  it('expands boolean', () => {
    expect(classes`a ${1 > 2 && 'false'} ${1 < 2 && 'true\nyes'}`).toBe(
      'a true yes',
    )
  })

  it('expands array', () => {
    expect(classes`a ${[1 > 2 && 'false', 1 < 2 && 'true\nyes']}`).toBe(
      'a true yes',
    )
  })

  it('expands object', () => {
    expect(
      classes`a ${{
        false: 1 > 2,
        'true\nyes': 1 < 2,
      }}`,
    ).toBe('a true yes')
  })
})
