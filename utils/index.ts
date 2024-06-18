export const yearDuration = (from: Date, to?: Date): {
    months: number
    years: number
} => {
    const dur = Math.abs((to ?? new Date()).getTime() - from.getTime())
    // const millis = dur
    // const seconds = dur / 1_000
    // const minutes = seconds / 60
    // const hours = minutes / 60
    // const days = hours / 24
    // const months = Math.round(days / 30.436875)
    // const

    const years = dur / 1_000 / 60 / 60 / 24 / 365
    const months = Math.ceil(years % 1 * 12)

    return { years: Math.floor(years), months: Math.ceil(months) }
}
