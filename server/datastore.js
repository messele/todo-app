module.exports = {
    todos: function () {
        return {
            cardList: [
                {
                    id: 1,
                    title: "Fix EFTPS payments",
                    description: "EFTPS payments need to be fixed",
                    status: "NOT_STARTED",
                    tasks: []
                },
                {
                    id: 2,
                    title: "Learn React",
                    description: "Do projects in react.",
                    status: "IN_PROGRESS",
                    tasks: [
                        {
                            id: 1,
                            name: "ContactList Example",
                            done: true
                        },
                        {
                            id: 2,
                            name: "Kanban Example",
                            done: false
                        },
                        {
                            id: 3,
                            name: "My own experiments",
                            done: false
                        }
                    ]
                },

            ]
        }
    }
};
