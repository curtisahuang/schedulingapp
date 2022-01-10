export interface Lesson {
    id: number
    year: number
    month: number
    day: number
    student: string
    duration: number
    hourly_rate: number
}

export interface Db {
    lessons: Lesson[]
}

export const db: Db = {
    lessons: [{ id: 1, year: 2021, month: 1, day: 1, student: 'test', duration: 0, hourly_rate: 0 }],
}