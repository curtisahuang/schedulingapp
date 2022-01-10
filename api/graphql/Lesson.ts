import { objectType } from "nexus";
import { extendType } from "nexus";

export const Lesson = objectType({
    name: 'Lesson',
    definition(t) {
        t.int('id')
        t.int('year')
        t.int('month')
        t.int('day')
        t.string('student')
        t.float('duration')
        t.int('hourly_rate')
    },
})

export const PostQuery = extendType({
    type: 'Query',
    definition(t) {
        t.nonNull.list.field('records', {
            type: 'Lesson',
            resolve() {
                return [{ id: 1, year: 2021, month: 1, day: 1, student: 'test', duration: 0, hourly_rate: 0 }]
              },
        })
    },
})