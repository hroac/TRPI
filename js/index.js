let state = {
    questions: {},
    phase: {
        "FFFF": 0,
    },
    types: {
        'Fight': { 'ENTP': 0, 'ENTJ': 0, 'ESTP': 0, 'ESTJ': 0, },
        'Freeze': { 'INTJ': 0, 'INTP': 0, 'ISTJ': 0, 'ISTP': 0, },
        'Fawn': { 'ISFJ': 0, 'ESFJ': 0, 'INFJ': 0, 'ENFJ': 0, },
        'Flight': { 'ESFP': 0, 'ISFP': 0, 'ENFP': 0, 'INFP': 0, },
    },
    answers: {}
}
const types = { "ENTP": { "Mode": "FIGHT", "Sphere": "Innovative, enthusiastic, and argumentative. ENTPs love to explore ideas and challenge the status quo." }, "INTJ": { "Mode": "FREEZE", "Sphere": "Analytical, strategic, and independent. INTJs excel at planning and executing long-term goals." }, "ISFJ": { "Mode": "FAWN", "Sphere": "Caring, meticulous, and responsible. ISFJs are dedicated to supporting and protecting others." }, "ESFP": { "Mode": "FLIGHT", "Sphere": "Energetic, fun-loving, and spontaneous. ESFPs love to engage with others and enjoy the present moment." }, "ENTJ": { "Mode": "FIGHT", "Sphere": "Strategic, efficient, and natural leaders. ENTJs excel in organizing and executing plans." }, "INTP": { "Mode": "FREEZE", "Sphere": "Theoretical, curious, and logical. INTPs love exploring abstract concepts and ideas." }, "ESFJ": { "Mode": "FAWN", "Sphere": "Social, supportive, and organized. ESFJs thrive in roles that involve helping others and fostering community." }, "ISFP": { "Mode": "FLIGHT", "Sphere": "Artistic, sensitive, and flexible. ISFPs are driven by personal values and a desire for authentic experiences." }, "ESTP": { "Mode": "FIGHT", "Sphere": "Action-oriented, adaptable, and resourceful. ESTPs thrive in dynamic environments and enjoy taking risks." }, "ISTJ": { "Mode": "FREEZE", "Sphere": "Reliable, detail-oriented, and methodical. ISTJs excel in maintaining order and following procedures." }, "INFJ": { "Mode": "FAWN", "Sphere": "Insightful, idealistic, and compassionate. INFJs are driven by a deep understanding of human nature and a desire to make a difference." }, "ESTJ": { "Mode": "FIGHT", "Sphere": "Organized, practical, and dependable. ESTJs are skilled at managing people and resources." }, "ENFJ": { "Mode": "FAWN", "Sphere": "Inspiring, charismatic, and empathetic. ENFJs excel at motivating and guiding others." }, "ISTP": { "Mode": "FREEZE", "Sphere": "Practical, hands-on, and independent. ISTPs are skilled at troubleshooting and finding solutions." }, "ENFP": { "Mode": "FLIGHT", "Sphere": "Enthusiastic, imaginative, and sociable. ENFPs are passionate about exploring new ideas and possibilities." }, "INFP": { "Mode": "FLIGHT", "Sphere": "Reflective, empathetic, and creative. INFPs are guided by their personal values and a desire for authenticity." } }
const input = `
1.	Imagine you're walking alone at night, and suddenly someone approaches you aggressively, demanding your belongings. In this situation, would you:
a) Stand your ground and refuse to comply, ready to defend yourself if necessary  
b) Attempt to run away from the attacker  
c) Feel frozen in fear, unable to react or respond  
d) Quickly hand over your belongings to avoid escalating the situation 
2.	You're in a meeting at work, and a colleague starts criticizing your ideas in front of everyone. Do you: 
a) Counter their criticism with strong arguments and defend your ideas assertively  
b) Feel the urge to leave the meeting or find a reason to excuse yourself  
c) Find yourself unable to respond, feeling overwhelmed by the criticism  
d) Try to downplay the conflict and maintain a positive atmosphere in the meeting 
3.	Picture yourself driving on a busy highway when suddenly another car swerves into your lane, nearly causing an accident. Do you: 
a) React with anger and frustration, honking your horn and gesturing at the other driver  
b) Swerve to avoid the other car and then try to distance yourself from the situation  
c) Freeze momentarily, gripping the steering wheel tightly, unsure how to react  
d) Try to de-escalate the situation by slowing down and giving the other driver space 
4.	You're at a social gathering, and someone starts making rude comments about your appearance. How do you respond? 
a) Fire back with witty comebacks and assert yourself confidently  
b) Excuse yourself from the conversation and find a distraction elsewhere  
c) Feel speechless and uncomfortable, unable to respond to the comments  
d) Laugh it off and try to redirect the conversation to avoid tension 
5.	Imagine you're hiking in the woods when suddenly you encounter a wild animal blocking your path. Do you: 
a) Make yourself appear larger and louder to intimidate the animal and scare it away 
b) Slowly back away from the animal while keeping a close eye on its movements  
c) Freeze in place, hoping the animal will lose interest and leave you alone  
d) Speak softly and avoid sudden movements to avoid alarming the animal 
6.	You're at a party, and someone spills a drink on you accidentally. How do you react? 
a) Express your frustration and demand an apology from the person responsible  
b) Quickly excuse yourself to clean up and change your clothes  
c) Stand still, feeling embarrassed and unsure how to react to the situation  
d) Brush it off with a smile, reassuring the other person that it's okay and accidents happen 
7.	While walking in a crowded area, you accidentally bump into someone, causing them to drop their belongings. What's your immediate reaction? 
a) Engage in a verbal confrontation, blaming the other person for being in your way  
b) Feel embarrassed and quickly walk away from the situation  
c) Freeze momentarily, unsure how to react to the unexpected collision  
d) Apologize and offer to help pick up their things, taking responsibility for the accident 
8.	You're at a family gathering, and tensions start rising between two relatives. How do you intervene? 
a) Step in assertively to diffuse the situation and offer solutions to resolve the conflict  
b) Excuse yourself from the gathering, feeling uncomfortable with the conflict unfolding  
c) Feel overwhelmed and unsure how to respond, wishing you could disappear from the situation  
d) Try to change the subject or redirect the attention elsewhere to avoid further conflict 
9.	Imagine you're in a crowded elevator when it suddenly stops between floors, leaving everyone trapped inside. How do you react? 
a) Take charge of the situation, suggesting solutions and keeping everyone calm  
b) Feel a surge of panic and try to pry the doors open or call for help  
c) Freeze in place, feeling helpless and paralyzed by the unexpected situation  
d) Comfort others and try to maintain a positive atmosphere while waiting for help to arrive  
10.	You're in a team meeting, and your supervisor criticizes your performance in front of your colleagues. How do you respond? 
a) Defend your actions confidently and provide explanations for your decisions  
b) Feel the urge to leave the meeting or distance yourself emotionally from the criticism  
c) Become speechless and feel your confidence waver under the scrutiny  
d) Attempt to address your supervisor's concerns diplomatically and seek ways to improve 
11.	You encounter a stray dog blocking your path. It appears aggressive and starts growling at you. How do you react?
a) Stand your ground and assertively command the dog to back off
b) Slowly back away from the dog, keeping eye contact to monitor its movements
c) Freeze momentarily, feeling unsure how to proceed in the face of the threat
d) Attempt to calm the dog down by speaking softly and avoiding sudden movements
#
1. 	You're working on a group project, and a team member is not pulling their weight, jeopardizing the project's success. How do you handle the situation?
a) Confront the team member directly about their lack of contribution (ENTP)
b) Take charge and reassign tasks to ensure completion (ENTJ)
c) Energize the team with motivational speeches and incentives (ESTP)
d) Implement strict deadlines and consequences for non-compliance (ESTJ)
2.  	When faced with a challenging problem, what's your initial approach?
a) Dive headfirst into brainstorming various solutions (ENTP)
b) Analyze the problem thoroughly, considering all angles (ENTJ)
c) Trust your instincts and rely on quick thinking (ESTP)
d) Follow established procedures and protocols (ESTJ)
3.  	Your friend is in a difficult situation and seeks your advice. What do you offer?
a) Innovative strategies to tackle the problem from new perspectives (ENTP)
b) Practical steps and a clear plan of action (ENTJ)
c) Encouragement to take risks and embrace spontaneity (ESTP)
d) Reliable guidance based on past experiences and traditions (ESTJ)
4.  	In a heated debate, how do you assert your position?
a) With logical arguments and intellectual wit (ENTP)
b) Assertively, emphasizing your authority on the subject (ENTJ)
c) With charisma and persuasive storytelling (ESTP)
d) By appealing to tradition and established norms (ESTJ)
5.  	How do you handle criticism in a professional setting?
a) Embrace it as an opportunity for growth and self-improvement (ENTP)
b) Analyze it objectively and use it to refine your strategies (ENTJ)
c) Brush it off and focus on immediate results (ESTP)
d) Take it seriously and make adjustments accordingly (ESTJ)
6.  	You're leading a team project, and conflicts arise among team members. How do you address this?
a) Encourage open dialogue and facilitate constructive discussions (ENTP)
b) Implement clear roles and responsibilities to minimize conflicts (ENTJ)
c) Intervene immediately to resolve conflicts and restore harmony (ESTP)
d) Set strict guidelines and protocols for conflict resolution (ESTJ)
7.  	When initiating a new project, what's your preferred approach?
a) Dive in and figure things out as you go (ENTP)
b) Develop a detailed plan before taking any action (ENTJ)
c) Start with a rough outline and adapt as needed (ESTP)
d) Follow established procedures and guidelines (ESTJ)
8.  	How do you react to unexpected changes or disruptions?
a) Embrace them as opportunities for innovation (ENTP)
b) Quickly adapt and reassess your strategies (ENTJ)
c) Roll with the punches and adjust on the fly (ESTP)
d) Seek stability and maintain course despite challenges (ESTJ)
9.  	In a leadership role, how do you motivate your team?
a) By fostering a creative and intellectually stimulating environment (ENTP)
b) With clear goals and rewards for achievement (ENTJ)
c) Through hands-on activities and exciting challenges (ESTP)
d) By emphasizing the importance of duty and responsibility (ESTJ)
10. 	When presented with conflicting opinions, how do you reconcile them?
a) Explore each viewpoint thoroughly to find common ground (ENTP)
b) Assert your own perspective and seek consensus (ENTJ)
c) Embrace the diversity of opinions and encourage debate (ESTP)
d) Uphold established principles and values to guide decisions (ESTJ)
11. 	How do you prefer to organize your workspace or environment?
a) Flexibly, with room for spontaneity and change (ENTP)
b) Systematically, with everything in its designated place (ENTJ)
c) Dynamically, with space for collaboration and movement (ESTP)
d) Structurally, following established rules and order (ESTJ)
#
1.  	You've been assigned a challenging task at work with a tight deadline. How do you initially react?
a) Embrace the challenge and dive into the task headfirst (ESFP)
b) Feel overwhelmed and seek assistance from others (ISFP)
c) Explore alternative approaches to completing the task (ENFP)
d) Retreat momentarily to collect your thoughts and plan your approach (INFP)
2.  	How do you prefer to unwind after a long day?
a) Engage in exciting and spontaneous activities (ESFP)
b) Indulge in creative pursuits or hobbies (ISFP)
c) Socialize and connect with friends or loved ones (ENFP)
d) Spend time alone reflecting or pursuing personal interests (INFP)
3.  	When making plans with friends, what's most important to you?
a) Having fun and enjoying the moment (ESFP)
b) Creating meaningful experiences together (ISFP)
c) Exploring new ideas and possibilities (ENFP)
d) Ensuring everyone feels included and valued (INFP)
4.  	How do you react to unexpected changes in your schedule?
a) Embrace them as opportunities for spontaneity (ESFP)
b) Feel unsettled but adapt quickly (ISFP)
c) See them as chances for new experiences and adventures (ENFP)
d) Appreciate the chance to explore different options (INFP)
5.  	When meeting new people, how do you typically engage with them?
a) With enthusiasm and charm, focusing on the present moment (ESFP)
b) With warmth and empathy, seeking to understand them deeply (ISFP)
c) With curiosity and a desire to explore shared interests (ENFP)
d) With sensitivity and a willingness to listen (INFP)
6.  	How do you approach decision-making in your personal life?
a) By following your instincts and going with the flow (ESFP)
b) By considering your values and personal preferences (ISFP)
c) By exploring all options and possibilities (ENFP)
d) By reflecting on your feelings and inner convictions (INFP)
7.  	When faced with a difficult choice, what guides your decision?
a) The immediate impact on your happiness and enjoyment (ESFP)
b) Your personal values and ethical considerations (ISFP)
c) The potential for growth and new experiences (ENFP)
d) Your inner sense of authenticity and alignment (INFP)
8.  	How do you approach conflicts within relationships?
a) By addressing them directly and seeking resolution (ESFP)
b) By avoiding confrontation and seeking harmony (ISFP)
c) By exploring underlying emotions and perspectives (ENFP)
d) By prioritizing open communication and understanding (INFP)
9.  	In your free time, what activities do you find most fulfilling?
a) Anything that allows for spontaneity and excitement (ESFP)
b) Creative pursuits like art, music, or writing (ISFP)
c) Exploring new ideas and possibilities (ENFP)
d) Reflecting on personal growth and introspection (INFP)
10. 	How do you handle stress or pressure in your life?
a) By seeking distractions and activities to lift your spirits (ESFP)
b) By retreating to a peaceful and calming environment (ISFP)
c) By exploring different perspectives and solutions (ENFP)
d) By reconnecting with your inner thoughts and emotions (INFP)
11. 	What role do spontaneity and flexibility play in your life?
a) They're essential for keeping life interesting and vibrant (ESFP)
b) They're important for maintaining a sense of freedom and creativity (ISFP)
c) They're opportunities for new adventures and discoveries (ENFP)
d) They're moments for listening to your inner voice and intuition (INFP)
#
1.  	When faced with a major decision, how do you initially react?
a) Analyze all possible outcomes and consequences (INTJ)
b) Explore different perspectives and gather information (INTP)
c) Stick to familiar routines and established methods (ISTJ)
d) Take practical steps to assess the situation calmly (ISTP)
2.  	How do you prefer to approach new challenges or projects?
a) With careful planning and strategic thinking (INTJ)
b) By experimenting with different approaches and ideas (INTP)
c) With a methodical and step-by-step approach (ISTJ)
d) By diving in and figuring things out as you go (ISTP)
3.  	When learning something new, what's your preferred method?
a) Self-directed study and research (INTJ)
b) Hands-on experimentation and trial-and-error (INTP)
c) Following structured courses or guides (ISTJ)
d) Observing others and learning through experience (ISTP)
4.  	How do you handle unexpected challenges or obstacles?
a) Develop contingency plans and backup strategies (INTJ)
b) Analyze the problem from different angles to find solutions (INTP)
c) Stick to familiar methods and routines (ISTJ)
d) Adapt quickly and respond with practical solutions (ISTP)
5.  	How do you approach disagreements or conflicts within relationships?
a) By maintaining emotional distance and objectivity (INTJ)
b) By analyzing the situation logically to find a resolution (INTP)
c) By relying on established norms and traditions (ISTJ)
d) By addressing the issue directly and seeking practical solutions (ISTP)
6.  	What role does structure and organization play in your life?
a) They're essential for maintaining efficiency and productivity (INTJ)
b) They're helpful but flexible enough to accommodate change (INTP)
c) They're necessary for providing stability and security (ISTJ)
d) They're useful when needed but not strictly adhered to (ISTP)
7.  	How do you prefer to communicate your ideas or opinions?
a) With clarity and precision, focusing on logical reasoning (INTJ)
b) With creativity and innovation, exploring new possibilities (INTP)
c) With practicality and attention to detail (ISTJ)
d) With adaptability and a willingness to adjust as needed (ISTP)
8.  	What motivates you to pursue your goals or interests?
a) The desire to achieve success and excellence (INTJ)
b) The quest for knowledge and understanding (INTP)
c) The need for stability and security (ISTJ)
d) The excitement of exploring new experiences (ISTP)
9.  	How do you handle uncertainty or ambiguity in your life?
a) By seeking to control and minimize it through planning (INTJ)
b) By embracing it as an opportunity for exploration (INTP)
c) By relying on established routines and structures (ISTJ)
d) By adapting quickly and remaining open to change (ISTP)
10. 	How do you approach personal growth and development?
a) With a clear plan and systematic approach (INTJ)
b) By exploring new ideas and perspectives (INTP)
c) By building on existing skills and knowledge (ISTJ)
d) By embracing challenges and seeking new experiences (ISTP)
11. 	What's your preferred method of problem-solving?
a) Systematically analyzing the issue to find the most efficient solution (INTJ)
b) Exploring various possibilities and experimenting with different approaches (INTP)
c) Following established procedures and methods (ISTJ)
d) Adapting quickly to changing circumstances and finding practical solutions (ISTP)
#
1.  	How do you typically respond to conflicts or disagreements within your social circle?
a) By avoiding confrontation and seeking compromise (ISFJ)
b) By offering emotional support and mediation (ESFJ)
c) By withdrawing from the situation to avoid conflict (INFJ)
d) By actively seeking resolution and reconciliation (ENFJ)
2.  	When someone close to you is upset, how do you comfort them?
a) By providing practical assistance and solutions (ISFJ)
b) By offering a listening ear and emotional support (ESFJ)
c) By giving them space to process their emotions (INFJ)
d) By actively engaging with them to find solutions (ENFJ)
3.  	How do you approach social gatherings or events?
a) By ensuring everyone feels included and comfortable (ISFJ)
b) By taking on a hosting role and ensuring everyone's needs are met (ESFJ)
c) By observing from the sidelines and engaging with select individuals (INFJ)
d) By networking and connecting with a wide range of people (ENFJ)
4.  	What's your preferred method of expressing appreciation to others?
a) Through acts of service and practical assistance (ISFJ)
b) Through verbal affirmations and compliments (ESFJ)
c) Through thoughtful gestures and gifts (INFJ)
d) Through emotional support and encouragement (ENFJ)
5.  	How do you handle conflicts or disagreements in a group setting?
a) By seeking compromise and consensus among all parties (ISFJ)
b) By mediating the conflict and facilitating open communication (ESFJ)
c) By withdrawing to avoid confrontation (INFJ)
d) By actively working to resolve the conflict and restore harmony (ENFJ)
6.  	What role do traditions and rituals play in your life?
a) They provide a sense of stability and continuity (ISFJ)
b) They serve as opportunities for bonding and connection (ESFJ)
c) They're important for preserving cultural heritage and identity (INFJ)
d) They facilitate social harmony and community cohesion (ENFJ)
7.  	How do you approach decision-making within a group?
a) By considering everyone's needs and preferences (ISFJ)
b) By taking charge and providing clear direction (ESFJ)
c) By weighing all options carefully before making a choice (INFJ)
d) By involving everyone in the decision-making process (ENFJ)
8.  	How do you respond to criticism or feedback from others?
a) By taking it to heart and striving to improve (ISFJ)
b) By seeking validation and reassurance from others (ESFJ)
c) By reflecting on it privately and considering its validity (INFJ)
d) By using it as an opportunity for growth and self-reflection (ENFJ)
9.  	What motivates you to help others?
a) The desire to make a meaningful difference in their lives (ISFJ)
b) The satisfaction of being appreciated and valued (ESFJ)
c) The need to connect with others on a deeper level (INFJ)
d) The opportunity to inspire and empower others (ENFJ)
10. 	How do you handle unexpected changes or disruptions in your plans?
a) By adapting quickly and finding alternative solutions (ISFJ)
b) By seeking support and guidance from others (ESFJ)
c) By taking time to process the changes and their implications (INFJ)
d) By rallying others to overcome the challenges together (ENFJ)
11. 	How do you approach leadership roles or responsibilities?
a) By focusing on nurturing and supporting those under your care (ISFJ)
b) By providing direction and structure to achieve common goals (ESFJ)
c) By leading by example and inspiring others through your actions (INFJ)
d) By fostering collaboration and teamwork to achieve success (ENFJ)
 `

window.onload = start()


function update(key, value) {
    console.log(state, key, value)
    state[key] = value
}

function fill(num) {
    const grid = document.querySelector('.grid')
    for (let i = 0; i < num; i++) {
        grid.append(genPlus())
    }
}

function genPlus() {
    var plus = genComponent('plusBox', 'div', '<div class="lineUp"></div><div class="lineSide"></div>')
    return plus
}

function start() {
    document.title = 'TRPI'
    fill(360)

    var content = document.querySelector('.content');
    var explanation = `
    This is the Trauma Response Personality Indicator (TRPI) test developed based on the 4 trauma responses: Fight, Flight, Fawn, and Freeze. 
    It has 22 questions, 11 to determine which trauma response fits you best and 11 to determine which type of brain you have.
    According to this theory the Myers-Briggs types can be divided into 4 categories, see these links for more info: <a href="https://hroac.github.io/about.html">About</a>, <a href="https://hroac.github.io/TRPI_OCEAN.pdf">TRPI paper</a> 
    Try to think as little as possible and just go with your gut because its who you are!
    `
    var context = genComponent('context title', 'div', explanation)
    var start = genComponent('start', 'button', '<p>Start!</p>', '', {
        ['onclick']: 'next()'
    })
    content.appendChild(context);

    content.appendChild(start);
}



function next() {
    genQuestions();
    var content = document.querySelector('.content')
    var nextButton = content.querySelector('.start')
    var explanation = content.querySelector('.context')
    removeComponent(content, nextButton)
    removeComponent(content, explanation)

    var gender = genComponent('title', 'div', 'What is your gender?')
    var genders = ['Man', 'Woman', 'Private'].map(opt => {
        return genComponent('option', 'button', opt, '', {
            ['onclick']: 'selectOption(innerHTML)'
        })
    })

    //nextQuestion();

    var options = genComponent('btn-group', 'div', '', '', {}, genders)
    var question = genComponent('question', 'div', '', '', {}, [gender, options])
    content.appendChild(question)
}

function genQuestions() {
    update("questions", parser(input))
}

function genQuestion(question, answers) {
    var opts = Object.values(answers).map(opt => {
        return genComponent('option', 'button', opt, '', {
            ['onclick']: 'selectOption(innerHTML)'
        })
    })
    var title = genComponent('title', 'div', question)
    var options = genComponent('btn-group', 'div', '', '', {}, opts)
    var qstn = genComponent('question', 'div', '', '', {}, [title, options])

    return qstn
}

function nextQuestion() {
    var phase = Object.keys(state.phase)[0]
    var num = state.phase[phase]
    var type = '';


    console.log(phase)
    if (phase == 'FFFF' && state.phase[phase] >= 11) {
        console.log(state)

        var options = { 'Fight': 0, 'Freeze': 0, 'Fawn': 0, 'Flight': 0, }

        if (state.gender !== 'Private') {

            if (state.gender == 'Man') {
                options['Fight'] = 3
                options['Freeze'] = 3
            }

            if (state.gender == 'Woman') {
                options['Fawn'] = 3
                options['Flight'] = 3
            }
        }
        var mode = '';
        Object.values(state.answers['FFFF']).forEach(answer => {
            var char = answer.trimStart().slice(0, 1)
            console.log(char)
            if (char == 'a') {
                options['Fight'] = options['Fight'] + 1
            }
            if (char == 'b') {
                options['Flight'] = options['Flight'] + 1
            }
            if (char == 'c') {
                options['Freeze'] = options['Freeze'] + 1
            }
            if (char == 'd') {
                options['Fawn'] = options['Fawn'] + 1
            }

        })

        let count = 0;


        Object.entries(options).forEach(([key, value]) => {
            if (value > count) {
                count = value;
                mode = key;
            }
        });

        state.phase = {
            [mode]: 0
        }
        phase = mode;
        num = 0

    }

    if (phase != 'FFFF' && state.phase[phase] >= 11) {
        var options = state.types[phase]
        var type1 = Object.keys(state.types[phase])[0]
        var type2 = Object.keys(state.types[phase])[1]
        var type3 = Object.keys(state.types[phase])[2]
        var type4 = Object.keys(state.types[phase])[3]


        Object.values(state.answers[phase]).forEach(answer => {
            var char = answer.trimStart().slice(0, 1)
            console.log(char)
            if (char == 'a') {
                options[type1] = options[type1] + 1
            }
            if (char == 'b') {
                options[type2] = options[type2] + 1
            }
            if (char == 'c') {
                options[type3] = options[type3] + 1
            }
            if (char == 'd') {
                options[type4] = options[type4] + 1
            }
        })

        let count = 0;


        Object.entries(options).forEach(([key, value]) => {
            if (value > count) {
                count = value;
                type = key;
            }
        });
    }

    var content = document.querySelector('.content')
    var docQuestion = content.querySelector('.question')
    if (!type) {
        var question = Object.keys(state.questions[phase])[num];
        var answers = Object.values(state.questions[phase])[num]

        var question = genQuestion(question, answers);

        replaceComponent(content, docQuestion, question)
    } else {
        var phase = Object.keys(state.phase)[0]
        var mode = genComponent('mode', 'div', `You operate primarily in ${phase} mode`)
            //var prefix = genComponent('prefix', 'div', `Congratulations you are an`)


        document.title = type;
        var col = Object.keys(state.types[phase]).indexOf(type)
        var fourSides = Object.values(state.types).map(val => Object.keys(val)[col]).map(val => {
                    var mode = Object.entries(state.types)
                        .map(value => [value[0], Object.keys(value[1])])
                        .find(value => value[1].includes(val))[0]

                    var description = types[val]
                    var descriptionComponent = genComponent('description', 'div', `${Object.entries(description).map(desc => `<p class=${desc[0]}>${desc[1]}</p>`).join('\n')}`)
            var line = genComponent(`line ${mode} ${val == type ? 'primary' : ''}`, 'div', val, '', {}, [descriptionComponent])
            return line;
        })
        var answer = genComponent('answer', 'div')
        //answer.appendChild(mode)
        //answer.appendChild(prefix)
        fourSides.forEach(side => {
            answer.appendChild(side)
        })

        replaceComponent(content, docQuestion, answer)
        content.appendChild(mode)
        save({
            answers: state.answers,
            gender: state.gender,
            types: state.types
        })
    }

}

function selectOption(option) {
    console.log(option)
    var phase = Object.keys(state.phase)[0]
    var num = state.phase[phase]
    var genders = ["Man", "Woman", "Private"];

    if (genders.includes(option)) {
        update('gender', option)
    } else {
        if (!state.answers[phase]) {
            state.answers[phase] = {}
        }

        state.phase[phase] = state.phase[phase] + 1
        state.answers[phase][Object.keys(state.questions[phase])[num]] = option
    }


    nextQuestion();
}

function guid() {
    let guid = localStorage.getItem('guid') || '';

    if (guid) {
        console.log(guid)
        return guid
    }


    const cryptoObj = window.crypto || window.msCrypto; // for IE11
    if (!cryptoObj) {
        console.error('Crypto API not available');
        return null;
    }

    const randomArray = new Uint8Array(16);
    cryptoObj.getRandomValues(randomArray);

    randomArray[6] = (randomArray[6] & 0x0f) | 0x40; // Version 4
    randomArray[8] = (randomArray[8] & 0x3f) | 0x80; // Variant bits

    for (let i = 0; i < 16; i++) {
        guid += (i === 4 || i === 6 || i === 8 || i === 10) ? '-' : '';
        guid += (randomArray[i] < 16 ? '0' : '') + randomArray[i].toString(16);
    }

    localStorage.setItem('guid', guid.toLowerCase());
    return guid.toLowerCase(); // Convert to lowercase as GUIDs are typically represented in lowercase
};

async function save(state) {
    const apiKey = '$2a$10$q3P7Zn7sUJLykm7PHc2d4.zvCgVdfmt8tVVK38jEdNC947RlZgoOG'; // Your JSONBin.io API key
    const url = 'https://api.jsonbin.io/v3/b'; // JSONBin.io base URL for creating bins

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Master-Key': apiKey
            },
            body: JSON.stringify({
                id: guid(),
                [guid()]: {...state, date: new Date().toISOString() }
            })
        });

        if (!response.ok) {
            throw new Error('Failed to create bin');
        }

        const responseData = await response.json();
        console.log('Bin created successfully:', responseData);

        return responseData;
    } catch (error) {
        console.error('Error creating bin:', error);
        throw error;
    }
}

function getUniqueId(guid) {
    let uniqueId = localStorage.getItem(guid);

    if (!uniqueId) {
        // If no unique identifier exists, generate one and store it in local storage
        uniqueId = generateUniqueId();
        localStorage.setItem('guid', uniqueId);
    }

    return uniqueId;
}