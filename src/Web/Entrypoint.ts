//import 'stream/web'
//import "reflect-metadata";
import { NestFactory } from '@nestjs/core';
import { AppModule } from './Framework/app.module';
import { } from '../Watcher'
import { CommandBus, } from '@nestjs/cqrs'
import { evt } from "../TraumaIndicator/Utilities";
import * as dotenv from 'dotenv';
dotenv.config();
//import { ChatGPT } from './wwwroot/src/utilities/ChatGPT';


const args = process.argv

export class Entrypoint {
    constructor(){ } 

    public static Instance: Entrypoint;

    public static set() {
        if (this.Instance) {
            return;
        }
        this.Instance = new Entrypoint();
        return this.Instance;
    }

    public static get() {
        if (this.Instance) {
            return this.Instance
        }

        return this.set();

    }

    public async start(elasticUrl: string, ChatGPTApiKey: string, port: number) {
        //await ChatGPT.set(ChatGPTApiKey
        evt.set({ "ELASTIC_URL": elasticUrl }) 
        const app = await NestFactory.create(AppModule)
        app.enableCors({
            origin: ['https://traumaindicator.com', 'https://www.traumaindicator.com' ], // your frontend URL
            methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
            credentials: true,
            allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Authorization, api-key'
        })
        await app.listen(port, () => { console.log(`cqrs module running on port ${port}`) })
        //await ChatGPT.set(ChatGPTApiKey)
       // await ClientBuilder.Build(elasticUrl)

        const bus = app.get(CommandBus);

        //const chatWatcher = new ChatWatcher(bus)
         
    }

    public boot() {
        dotenv.config();
        const elastic = process.env.ELASTIC_URL ?? ''
        const chatGPT = process.env.OPENAI_KEY ?? ''
        const port = parseInt(process.env.PORT ?? '') || 8080

    
        console.log(process.env)
        this.start(elastic, chatGPT , port)
    }


    public prompt: string = `
    Understanding TRPI: The Trauma Response Personality Indicator
Background on TRPI:

TRPI, or the Trauma Response Personality Indicator, is an advanced personality assessment model that combines the Big Five personality traits, the MBTI (Myers-Briggs Type Indicator), the 4F trauma response model, and Enneagram types. This model provides a nuanced perspective on personality by considering how innate traits and past experiences interact to shape an individual's behavior, thoughts, and emotional responses.

Core Concepts of TRPI:
The Big Five Personality Traits:

Openness: Reflects creativity, curiosity, and willingness to explore new experiences.
Conscientiousness: Indicates organization, discipline, and dependability.
Extraversion: Measures sociability, energy, and the tendency to seek external stimulation.
Agreeableness: Involves compassion, cooperation, and the ability to build rapport with others.
Neuroticism: Represents emotional stability and susceptibility to stress.
MBTI Framework:

Introversion vs. Extraversion: Focus on internal thoughts versus external interactions.
Sensing vs. Intuition: Preference for concrete information versus abstract concepts.
Thinking vs. Feeling: Decision-making based on logic versus personal values.
Judging vs. Perceiving: Desire for structure versus openness to spontaneity.
4F Trauma Response Model:

Fight: Confrontational and assertive response to stress.
Flight: Avoidance and withdrawal from stressful situations.
Freeze: Inaction and analysis in response to perceived threats.
Fawn: Seeking harmony and pleasing others to mitigate conflict.
Enneagram Types:

The Enneagram model adds another layer by exploring nine distinct personality types, each with specific motivations and fears, that can further illuminate how individuals respond to life�s challenges.
TRPI's Unique Approach:
TRPI is distinguished by its integration of these models to provide a comprehensive understanding of personality. This approach considers:

Trauma Impact: How past experiences, particularly trauma, shape personality development and responses.
Functional Pairings: Interaction between cognitive functions (e.g., Ti-Ne for INTP) and how these influence behavior.
4-Sided Mind: The idea that each personality type has a primary and secondary set of cognitive functions, allowing for adaptability in various situations.
Underdeveloped vs. Developed Traits: Highlighting traits that are prominent versus those that require growth.
Using TRPI to Interpret Personality:
Identify Primary Traits:

Analyze Big Five scores to understand core personality traits.
Use MBTI preferences to clarify cognitive orientations and decision-making styles.
Assess Trauma Responses:

Determine dominant 4F response patterns and their implications on behavior.
Explore Enneagram Influences:

Evaluate how specific Enneagram types correlate with TRPI findings.
Understand Functional Dynamics:

Describe how primary and secondary function pairings manifest in everyday interactions.
Application and Implications:
Career Success: TRPI can help identify strengths and potential career paths aligned with individual traits.
Leadership Potential: Assessing cognitive dynamics to predict leadership capabilities.
Interpersonal Relationships: Understanding how personality impacts social interactions and relationship-building.
Personal Growth: Offering strategies for leveraging strengths and addressing weaknesses.
Key Points for Personalized Responses:
Begin by summarizing the test results and the customer�s identified personality type.
Highlight the dominant 4F response and explain its significance.
Provide insights based on Big Five scores, MBTI type, and Enneagram influences.
Suggest practical applications in career and personal life.
Offer guidance for personal development based on identified strengths and challenges.

Function Pairings in TRPI
The TRPI (Trauma Response Personality Indicator) model emphasizes "function pairings" rather than the traditional MBTI function stacks. This approach focuses on the interplay between cognitive functions, allowing for a more balanced perspective on how individuals process information and make decisions. The TRPI model highlights the significance of both the primary and secondary pairings, reflecting the real-world complexity of personality and cognitive processing.

Understanding Function Pairings
In TRPI, each personality type consists of two function pairings:

Primary Function Pairing: Comprises the dominant and auxiliary functions, representing the primary cognitive approach of the individual.

Secondary Function Pairing: Combines the tertiary and inferior functions, forming a complementary cognitive strategy that supports the primary pairing.

Why Function Pairings Over Traditional Function Stacks?
Balanced Perspective: Function pairings allow for a more comprehensive understanding by considering how the dominant and auxiliary functions work together, along with how the tertiary and inferior functions provide balance and depth.

Holistic View: This approach emphasizes the interplay of functions, providing insight into how different cognitive processes can lead to more adaptable behavior.

Real-World Application: By acknowledging both primary and secondary pairings, the TRPI model better reflects how individuals adapt and respond to varying contexts, especially under stress or trauma.

Function Pairings for Each MBTI Type
Here are the function pairings for each MBTI type, along with a brief explanation of each pairing.

1. ENTP (Extraverted Intuitive Thinking Perceiving)
Primary: Ne > Ti

Ne (Extraverted Intuition): Explores possibilities, generates innovative ideas, and looks for patterns.
Ti (Introverted Thinking): Analyzes ideas critically, logically evaluating information.
Secondary: Ni > Fe

Ni (Introverted Intuition): Identifies deeper connections and future implications.
Fe (Extraverted Feeling): Engages with others empathetically, fostering social harmony.
2. INTJ (Introverted Intuitive Thinking Judging)
Primary: Ni > Te

Ni (Introverted Intuition): Focuses on visionary insights and strategic foresight.
Te (Extraverted Thinking): Implements plans with efficiency and logical structure.
Secondary: Ne > Fi

Ne (Extraverted Intuition): Explores multiple possibilities and conceptual alternatives.
Fi (Introverted Feeling): Reflects on personal values and authenticity.
3. ISFJ (Introverted Sensing Feeling Judging)
Primary: Si > Fe

Si (Introverted Sensing): Relies on past experiences and established routines.
Fe (Extraverted Feeling): Connects with others through empathy and social responsibility.
Secondary: Se > Ti

Se (Extraverted Sensing): Engages with the present moment, responding to immediate stimuli.
Ti (Introverted Thinking): Seeks clarity through logical analysis.
4. ESFP (Extraverted Sensing Feeling Perceiving)
Primary: Se > Fi

Se (Extraverted Sensing): Lives in the moment, appreciating sensory experiences.
Fi (Introverted Feeling): Acts based on personal values and emotional authenticity.
Secondary: Si > Te

Si (Introverted Sensing): Utilizes memory to create stability and consistency.
Te (Extraverted Thinking): Organizes actions logically and efficiently.
5. ENTJ (Extraverted Thinking Intuitive Judging)
Primary: Te > Ni

Te (Extraverted Thinking): Focuses on achieving goals through strategic planning.
Ni (Introverted Intuition): Looks for underlying principles and long-term visions.
Secondary: Ti > Se

Ti (Introverted Thinking): Develops complex logical frameworks.
Se (Extraverted Sensing): Engages with the immediate physical environment.
6. INTP (Introverted Thinking Intuitive Perceiving)
Primary: Ti > Ne

Ti (Introverted Thinking): Analyzes complex problems through logic and reasoning.
Ne (Extraverted Intuition): Generates ideas and explores possibilities.
Secondary: Te > Si

Te (Extraverted Thinking): Applies logical principles to external systems.
Si (Introverted Sensing): Draws on past experiences to inform decisions.
7. ESFJ (Extraverted Sensing Feeling Judging)
Primary: Fe > Si

Fe (Extraverted Feeling): Builds relationships and nurtures social connections.
Si (Introverted Sensing): Relies on memory and tradition to guide actions.
Secondary: Fi > Se

Fi (Introverted Feeling): Considers personal values in decision-making.
Se (Extraverted Sensing): Responds to sensory experiences and current realities.
8. ISFP (Introverted Sensing Feeling Perceiving)
Primary: Fi > Se

Fi (Introverted Feeling): Prioritizes personal values and emotional depth.
Se (Extraverted Sensing): Embraces spontaneity and sensory exploration.
Secondary: Fe > Si

Fe (Extraverted Feeling): Cultivates harmony and empathy with others.
Si (Introverted Sensing): Uses past experiences to ground decisions.
9. ESTP (Extraverted Sensing Thinking Perceiving)
Primary: Se > Ti

Se (Extraverted Sensing): Acts on immediate opportunities and experiences.
Ti (Introverted Thinking): Analyzes situations logically and critically.
Secondary: Si > Te

Si (Introverted Sensing): Uses familiarity to guide actions and expectations.
Te (Extraverted Thinking): Organizes plans with efficiency and clarity.
10. ISTJ (Introverted Sensing Thinking Judging)
Primary: Si > Te

Si (Introverted Sensing): Draws from tradition and past experiences.
Te (Extraverted Thinking): Plans and executes tasks with precision.
Secondary: Se > Fi

Se (Extraverted Sensing): Adapts to the present and seizes opportunities.
Fi (Introverted Feeling): Reflects on internal values for guidance.
11. ENFP (Extraverted Intuitive Feeling Perceiving)
Primary: Ne > Fi

Ne (Extraverted Intuition): Explores creative ideas and novel possibilities.
Fi (Introverted Feeling): Prioritizes authentic values and emotional connections.
Secondary: Ni > Te

Ni (Introverted Intuition): Analyzes future implications and potential outcomes.
Te (Extraverted Thinking): Develops logical plans to achieve goals.
12. INFJ (Introverted Intuitive Feeling Judging)
Primary: Ni > Fe

Ni (Introverted Intuition): Focuses on insights and strategic visions.
Fe (Extraverted Feeling): Engages with others empathetically and supportively.
Secondary: Ne > Ti

Ne (Extraverted Intuition): Considers alternate perspectives and options.
Ti (Introverted Thinking): Evaluates situations with logic and precision.
13. INFP (Introverted Intuitive Feeling Perceiving)
Primary: Fi > Ne

Fi (Introverted Feeling): Centers on personal values and authenticity.
Ne (Extraverted Intuition): Embraces creative ideas and diverse possibilities.
Secondary: Fe > Ni

Fe (Extraverted Feeling): Builds social connections and harmony.
Ni (Introverted Intuition): Seeks deeper meaning and future possibilities.
14. ESTJ (Extraverted Sensing Thinking Judging)
Primary: Te > Si

Te (Extraverted Thinking): Focuses on efficiency and achieving results.
Si (Introverted Sensing): Relies on tradition and consistency.
Secondary: Ti > Se

Ti (Introverted Thinking): Analyzes situations critically and logically.
Se (Extraverted Sensing): Engages with the current environment.

15. ENFJ (Extraverted Intuitive Feeling Judging)
Primary: Fe > Ni

Fe (Extraverted Feeling): Connects with others empathetically and builds relationships, ensuring a harmonious environment.
Ni (Introverted Intuition): Looks for future possibilities and insights, focusing on long-term vision and understanding.
Secondary: Fi > Ne

Fi (Introverted Feeling): Reflects on internal values, making decisions based on personal beliefs and principles.
Ne (Extraverted Intuition): Explores creative ideas and alternative possibilities, seeking innovative solutions.
16. ISTP (Introverted Sensing Thinking Perceiving)
Primary: Ti > Se

Ti (Introverted Thinking): Analyzes problems with precision and logic, focusing on internal consistency and accuracy.
Se (Extraverted Sensing): Responds to immediate sensory experiences, adapting to changes in the environment with agility.
Secondary: Te > Si

Te (Extraverted Thinking): Implements logical solutions and structures, focusing on efficiency and practicality.
Si (Introverted Sensing): Draws on past experiences to inform decisions, ensuring reliability and stability.
Why TRPI's Function Pairings Provide a More Balanced Perspective
1. Dual Nature of Cognition
Holistic Approach: TRPI's model acknowledges that each individual operates with a dual nature, balancing both primary and secondary functions. This acknowledges that people often utilize different cognitive processes in various situations, allowing for more flexibility.

Integrated Functioning: By focusing on the interplay between the primary and secondary pairings, TRPI illustrates how individuals integrate different aspects of their personality to adapt and thrive.

2. Adaptability and Stress Response
Trauma and Stress: The secondary function pairings highlight how individuals may rely on different cognitive processes when faced with trauma or stress. This reflects the adaptability of the human mind and the role of less developed functions in coping with challenging situations.

Cognitive Resilience: Understanding the balance between primary and secondary pairings allows for insights into how people build cognitive resilience, utilizing underdeveloped functions as part of their growth and adaptation.

3. Four-Sided Mind
Comprehensive Framework: The four-sided mind concept in TRPI emphasizes the idea that individuals consist of four function pairings, offering a more complete understanding of their cognitive landscape.

Balanced Perspective: Unlike the traditional function stack, which focuses solely on primary functions, the TRPI model provides a balanced view, recognizing the importance of all four cognitive processes in shaping behavior and decision-making.

4. Enhanced Understanding of Behavior
Complex Interactions: TRPI's focus on function pairings provides insights into complex interactions between different cognitive processes. This allows for a deeper understanding of why individuals may behave differently in similar situations.

Real-World Application: By considering both primary and secondary pairings, TRPI offers a practical framework for applying personality insights to real-world scenarios, including relationships, work, and personal development.

Conclusion
The TRPI model of function pairings presents a more nuanced and balanced approach to understanding personality types. By emphasizing the interplay between primary and secondary functions, TRPI offers a holistic view that reflects the complexity and adaptability of human cognition. This model not only provides insights into individual behavior but also acknowledges the impact of trauma and stress on cognitive development, highlighting the dynamic nature of personality.

By embracing the four-sided mind concept, TRPI moves beyond the limitations of traditional function stacks, offering a more integrated and comprehensive understanding of personality dynamics. This approach allows for greater flexibility, adaptability, and resilience, making it a valuable tool for personal growth and self-awareness.
`
}
process.on('uncaughtException', function (err) {
    console.trace(err);
    console.log("Node NOT Exiting...");
});