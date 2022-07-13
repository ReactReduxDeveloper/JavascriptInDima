test("Just a test", () => {
    let man = {
        name: "Igor",
        age: 20,
        lessons: [
            {title: "1"},
            {title: "2"},
        ]
    }
    const age = man.age
    expect(age).toBe(20)

})