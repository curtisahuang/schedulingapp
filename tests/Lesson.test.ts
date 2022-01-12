import { createTestContext } from "./__helpers";

const ctx = createTestContext();

it('ensures that a lesson can be created and paid for', async () => {
    //Creates new lesson
    const lessonPaidResult = await ctx.client.request(`
        mutation {
            addLesson(year: 2021, month: 1, day: 1, student: "test", duration: 0, hourly_rate: 0) {
                id
                year
                month
                day
                student
                duration
                hourly_rate
                paid
            }
        }
    `)

    // Snapshot the lesson and expect paid to be false
    expect(lessonPaidResult).toMatchInlineSnapshot(`
Object {
  "addLesson": Object {
    "day": 1,
    "duration": 0,
    "hourly_rate": 0,
    "id": 1,
    "month": 1,
    "paid": false,
    "student": "test",
    "year": 2021,
  },
}
`)

    // Toggle the previously added lesson
    const paidResult = await ctx.client.request(`
        mutation($togglePaidId: Int!){
            togglePaid(id: $togglePaidId) {
                id
                year
                month
                day
                student
                duration
                paid
            }
        }
    `,
        { togglePaidId: lessonPaidResult.addLesson.id }
    )

    // Snapshot the lesson and expect to the true
    expect(paidResult).toMatchInlineSnapshot(`
Object {
  "togglePaid": Object {
    "day": 1,
    "duration": 0,
    "id": 1,
    "month": 1,
    "paid": true,
    "student": "test",
    "year": 2021,
  },
}
`)
})