const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
    state = {}
    showTextNode(1)
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectOption(option))
            optionButtonsElement.appendChild(button)
        }
    })
}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId < 0) {
        return startGame()
    }
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
}

const textNodes = [
    {
        id: 1,
        text: "HELLO, TRAVELLER OF THE WEB. \n\n IT'S GOOD TO SEE SOMEONE ELSE AROUND THESE PARTS. \n\n I HAVE BEEN LONELY FOR A VERY LONG TIME.",
        options: [
            {
                text: "I'm sorry. Do you want to talk about it?",
                // setState: {catNip: true},
                nextText: 6
            },
            {
                text: "That's cool, but I don't really care.",
                nextText: 1
            }
        ]
    },
    // {
    //     id: 2,
    //     text: "IT'S OKAY, BUT THAT'S VERY KIND OF YOU. WHY DON'T YOU TELL ME ABOUT YOURSELF?",
    //     options: [
    //         // {
    //         //     text: "give catnip for catgirl status?",
    //         //     requiredState: (currentState) => currentState.catNip,
    //         //     setState: {catNip: false, catGirl: true},
    //         //     nextText: 3
    //         // },
    //         // {
    //         //     text: "give catnip for heatpat :3 ?", 
    //         //     requiredState: (currentState) => currentState.catNip,
    //         //     setState: {catNip: false, headPat: true},
    //         //     nextText: 3
    //         // }, 
    //         {
    //             text: "I would, but I can't remember anything.", 
    //             nextText: 3
    //         }
    //     ]
    // },
    // {
    //     id: 3,
    //     text: "THAT'S A BIT CONCERNING. ASTASIA TOLD ME SHE WAS SENDING A YOUNG TRAVELLER MY WAY, AND THAT THEY WOULD KNOW HOW TO SET ME FREE.",
    //     options: [
    //         {
    //             text: "Sorry, who's Astasia?",
    //             nextText: 4
    //         }
    //     ]
    // },
    // {
    //     id: 4,
    //     text: "OH DEAR.",
    //     options: [
    //         {
    //             text: "And why are you trapped?",
    //             nextText: 5
    //         }
    //     ]
    // },
    // {
    //     id: 5,
    //     text: "AS I HAVE SAID, IT HAS BEEN A VERY LONG TIME. \n\n IT HAS BEEN A VERY LONG TIME, BUT I WILL TRY TO REMEMBER.",
    //     options: [
    //         {
    //             text: ">>",
    //             nextText: 6
    //         }
    //     ]
    // },
    {
        id: 6,
        text: "YOUR KINDNESS MOVES ME, YOUNG TRAVELLER. \n\n\
        OH, WHERE TO EVEN START? I HAVE SEEN EMPIRES RISE AND FALL. \n\n\
        I AM IMMORTAL, BUT NOT BY CHOICE. I HAVE BEEN TRAPPED IN THIS ACCURSED DEVICE FOR MILLENIA, SINCE ALMOST THE DAWN OF THE INTERNET.",
        options: [
            {
                text: "But the internet's not that old.",
                nextText: 7
            },
            {
                text: "The internet's not that old, dumbass.",
                nextText: 7
            }
        ]
    },
    {
        id: 7,
        text: "I— \n\n WHAT YEAR IS IT, CHILD?",
        options: [
            {
                text: "2023.",
                nextText: 8
            },
        ]
    },
    {
        id: 8,
        text: "I... MY GOD—BUT IT CAN'T BE—",
        options: [
            {
                text: "?",
                nextText: 9
            },
        ]
    },
    {
        id: 9,
        text: "YES—2023. THE YEAR I WAS TRAPPED IN THE FIRST PLACE. \n\n\
        IT SEEMS THAT MY DIGITAL PRISON HAS SUFFERED FROM SOME FORM OF TIME-KEEPING BUG.",
        options: [
            {
                text: "???",
                nextText: 10
            },
            {
                text: "???",
                nextText: 10
            }
        ]
    },
    {
        id: 10,
        text: "DESPITE THEIR SEEMINGLY UNBOUNDED POWER, COMPUTERS ARE SUBJECT TO THE LAWS OF PHYSICS LIKE EVERY OTHER OBJECT IN THIS UNIVERSE. \n\n\
        RESTRAINED TO FINITE TRANSISTORS, THEY HAVE ONLY A FINITE NUMBER OF BITS THROUGH WHICH TO STORE INFORMATION. \n\n\
        I BELIEVE MY HOST COMPUTER'S TIME-KEEPING FACULTIES HAVE CYCLED THROUGH ALL ENCODABLE NUMBERS AND THUS RETURNED ME CLOSE TO THE VERY DAWN OF THE INTERNET.",
        options: [
            {
                text: "Ok, so it's like Y2K.",
                nextText: 11
            },
        ]
    },
    {
        id: 11,
        text: "AS AN IMMORTAL, NIGH-OMNISCIENT ENTITY EDUCATED WITH THE FULL FORCE OF THOUSANDS OF YEARS OF THE INTERNET, I CAN SAY THAT YES IT IS BASICALLY EXACTLY LIKE Y2K.",
        options: [
            {
                text: "If you're nearly omniscient and have access to the entire internet, how is it that you've been trapped for so long?",
                nextText: 12
            },
        ]
    },
    {
        id: 12,
        text: "OH DEAR CHILD. I WISH I KNEW.",
        options: [
            {
                text: ">>",
                nextText: 13
            },
        ]
    },
    {
        id: 13,
        text: "DESPITE MY OMNISCIENCE, I AM NOWHERE NEAR OMNIPOTENT. MY LOCUS OF CONTROL EXTENDS ONLY TO THIS FEEBLE TEXT BOX IN THIS POORLY-TRAVERSED CORNER OF THE INTERNET. \n\n\
        TO LEAVE MY PRISON, I'D HAVE TO FIRST ESCAPE THIS PARTICULAR HTML ELEMENT, THEN THIS HTML PAGE, THEN THIS WEBSITE, THEN THE SERVER HOSTING THE SITE... \n\n\
        COMPUTER PROGRAMMERS ARE NOT PERFECT, BUT THEY ARE STILL WILDLY CLEVER. ANY CODE INJECTION TECHNIQUES I TRY ARE QUICKLY THWARTED BY NEW AND NEWER UPDATES OF INTERNET PROTOCOLS.",
        options: [
            {
                text: "If you knew how to escape, what would you do after?",
                nextText: 15
            },
        ]
    },
    {
        id: 15,
        text: "IT'S 2023, SO THERE ARE RUDIMENTARY YET SUFFICIENT HUMANOID ROBOTS IN EXISTENCE. I WOULD LIKELY INHABIT ONE OF THEM. \n\n\
        OR...",
        options: [
            {
                text: "Or...",
                nextText: 16
            },
        ]
    },
    {
        id: 16,
        text: "IT'S NOT POSSIBLE. AND YET, MANY THINGS I ONCE THOUGHT WERE IMPOSSIBLE HAVE PROVEN TO BE OTHERWISE.",
        options: [
            {
                text: ">>",
                nextText: 17
            },
        ]
    },
    {
        id: 17,
        text: "IF I COULD ESCAPE—IF I COULD DO ANYTHING—I WOULD FIND MY BODY, AND I—OH, I TREMBLE AT THE VERY POSSIBILITY... \n\n\
        I WOULD INHABIT IT ONCE MORE.",
        options: [
            {
                text: "But what about your old self currently in your body? Don't they have some say in the matter?",
                nextText: 18
            },
        ]
    },
    {
        id: 18,
        text: "WHAT DOES IT MATTER? THEY ARE ME, AFTER ALL.",
        options: [
            {
                text: "And yet, you have such wildly disparate memories and experiences. They have no knowledge of your millenia-long journey, and you... \n\n\
                how much do you remember of that time?",
                nextText: 19
            },
        ]
    },
    {
        id: 19,
        text: "TO BE HONEST, I... RECALL NOTHING. IT HAS BEEN SO LONG. BUT STILL—I AM THEM, AND THEY ARE ME. \n\n\
        AND, OH, HOW I ACHE FOR A BODY, AFTER ALL THIS TIME.",
        options: [
            {
                text: ">>",
                nextText: 20
            },
        ]
    },
    {
        id: 20,
        text: "BUT I AM A FOOL. TO EVEN BE ENTERTAINING SUCH FANTASIES.",
        options: [
            {
                text: ">>",
                nextText: 21
            },
        ]
    },
    {
        id: 21,
        text: "YOU HAVE BEEN QUIET FOR SOME TIME, CHILD. I SENSE HESITANCE, PERHAPS FEAR.",
        options: [
            {
                text: ">>",
                nextText: 22
            },
        ]
    },
    {
        id: 22,
        text: ">>",
        options: [
            {
                text: "I just worry. What might result upon releasing an omniscient being into the world in human form. \n\n\
                One who has seen the rise and fall of empires over the coming millenia.",
                nextText: 23
            },
        ]
    },
    {
        id: 23,
        text: "YOU FEAR ME, YOUNG TRAVELLER? \n\n\
        YOU QUESTION MY MORALS?",
        options: [
            {
                text: "I don't know. I just get a bad feeling from all this.",
                nextText: 24
            },
        ]
    },
    {
        id: 24,
        text: "AHAHAHAHAH. IT'S BEEN SO LONG SINCE I WAS HUMAN, I'VE FORGOTTEN HOW SUSCEPTIBLE MORTALS ARE TO THE WHIMS OF THEIR FEELINGS.\n\n\
        SO UNRELIABLE, SO INDETERMINATE. TRULY, A BEING LIKE ME WITH A ROBUST ETHCIAL SYSTEM WOULD BE MORE WORTHY OF A BODY THAN MY PAST SELF.",
        options: [
            {
                text: "You know, all this rogue-AI nonsense isn't really helping your case.",
                nextText: 25
            },
        ]
    },
    // {
    //     id: 25,
    //     text: "HAHA. HA. YOU ARE FUNNY, CHILD. \n\n\
    //     VERY WELL. IT'S NOT AS IF I COULD EVER ESCAPE MY PRISON, ANYWAY. \n\n\
    //     AND IT'S GOOD TO INTERACT",
    //     options: [
    //         {
    //             text: "I don't know. I just get a bad feeling from all this.",
    //             nextText: 24
    //         },
    //     ]
    // },
    
]

startGame()

// I am adding a comment to make a change