const quizQuestions = [
    {
        answers: [
            {
                content: "Yes",
                isResult: true,
                nextId: 0

            },
            {
                content: "No",
                isResult: false,
                nextId: 1

            }
        ],
        id: 0,
        question: "Are you an asshole?"


    },
    {
        answers: [
            {
                content: "Yes",
                isResult: true,
                nextId: 1

            },
            {
                content: "No",
                isResult: false,
                nextId: 2

            }
        ],
        id: 1,
        question: "Are your pants currently on your head?"


    },
    {
        answers: [
            {
                content: "Yes",
                isResult: true,
                nextId: 2

            },
            {
                content: "No",
                isResult: false,
                nextId: 3

            }
        ],
        id: 2,
        question: "Is your hard on for Thrall as big as Metzen's?"


    },
    {
        answers: [
            {
                content: "Yes",
                isResult: true,
                nextId: 3

            },
            {
                content: "No",
                isResult: false,
                nextId: 4

            }
        ],
        id: 3,
        question: "Are you going through an emo phase?"


    },
    {
        answers: [
            {
                content: "Yes",
                isResult: false,
                nextId: 13

            },
            {
                content: "No",
                isResult: false,
                nextId: 7

            }
        ],
        id: 4,
        question: "Are you a girl?"

    },
    {
        answers: [
            {
                content: "Yes",
                isResult: true,
                nextId: 4 // druid

            },
            {
                content: "No",
                isResult: false,
                nextId: 6

            }
        ],
        id: 5,
        question: "Do you have an unhealthy thing for cats?"

    },
    {
        answers: [
            {
                content: "Yes",
                isResult: true,
                nextId: 5 // priest

            },
            {
                content: "No",
                isResult: false,
                nextId: 9

            }
        ],
        id: 6,
        question: "Do you like shiny gold sparkles?"

    },
    {
        answers: [
            {
                content: "Yes",
                isResult: true,
                nextId: 6 // warrior

            },
            {
                content: "No",
                isResult: false,
                nextId: 8

            }
        ],
        id: 7,
        question: "Are you overcompensating for something?"

    },
    {
        answers: [
            {
                content: "Yes",
                isResult: true,
                nextId: 7 // pally

            },
            {
                content: "No",
                isResult: false,
                nextId: 9

            }
        ],
        id: 8,
        question: "Are you a 15 year old boy with a hero complex?"

    },
    {
        answers: [
            {
                content: "Yes",
                isResult: true,
                nextId: 8 // mage

            },
            {
                content: "No",
                isResult: false,
                nextId: 10

            }
        ],
        id: 9,
        question: "Do you enjoy lighting things on fire when you're drunk?"

    },
    {
        answers: [
            {
                content: "Yes",
                isResult: true,
                nextId: 9 // Monk

            },
            {
                content: "No",
                isResult: false,
                nextId: 11

            }
        ],
        id: 10,
        question: "Did you really like that one Kung Fu lesson you took in 3rd grade?"

    },
    {
        answers: [
            {
                content: "Yes",
                isResult: true,
                nextId: 10 // warlock

            },
            {
                content: "No",
                isResult: false,
                nextId: 12

            }
        ],
        id: 11,
        question: "Is summoning a girlfriend the only way you'd get one?"

    },
    {
        answers: [
            {
                content: "Yes",
                isResult: true,
                nextId: 11 // Demon hunter

            }
        ],
        id: 12,
        question: "Are you pretty much subbing just for double jump?"

    },
    {   answers: [
            {
                content: "Yes",
                isResult: false,
                nextId: 5
            },
            {
                content: "No",
                isResult: false,
                nextId: 7
            }
        ],
        id: 13,
        question: "Really?"
    }
];

export default quizQuestions;