import { objectType, extendType, stringArg, nonNull, intArg, floatArg } from "nexus";

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
        t.boolean('paid')
    },
})

export const LessonQuery = extendType({
    type: 'Query',
    definition(t) {
        t.nonNull.list.field('records', {
            type: 'Lesson',
            resolve(_root, _args, ctx) {
                return ctx.db.lessons.filter(lesson => lesson.paid === false)
            },
        })
        t.list.field('lessons', {
            type: 'Lesson',
            resolve(_root, _args, ctx) {
                return ctx.db.lessons.filter(lesson => lesson.paid === true)
            },
        })
    },
})

export const LessonMutation = extendType({
    type: 'Mutation',
    definition(t) {
        t.nonNull.field('addLesson', {
            type: 'Lesson',
            args: {
                year: nonNull(intArg()),
                month: nonNull(intArg()),
                day: nonNull(intArg()),
                student: nonNull(stringArg()),
                duration: nonNull(floatArg()),
                hourly_rate: nonNull(intArg())
            },
            resolve(_root, args, ctx) {
                const newLesson = {
                    id: ctx.db.lessons.length + 1,
                    year: args.year,
                    month: args.month,
                    day: args.day,
                    student: args.student,
                    duration: args.duration,
                    hourly_rate: args.hourly_rate,
                    paid: false,
                }
                ctx.db.lessons.push(newLesson)
                return newLesson
            }
        })
        t.field('togglePaid', {
            type: 'Lesson',
            args: {
                id: nonNull(intArg())
            },
            resolve(_root, args, ctx) {
                let paidLesson = ctx.db.lessons.find(lesson => lesson.id === args.id)
                if (!paidLesson) {
                    throw new Error('Could not find lesson with ')
                }
                paidLesson.paid = !(paidLesson.paid)
                return paidLesson
            }
        })
    }
})