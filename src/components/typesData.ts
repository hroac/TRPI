
export const typesData: any[] = [
  { type: 'ENTP', functions: ['Ne Ti', 'Ni Fe'], mode: 'Fight', bgColor: '#ff0000', bronze: 'ISFJ', silver: 'INTJ', gold: 'INFJ', copper: 'ESFP',
    description: `ENTPs are innovative, curious, and thrive in environments where they can explore and challenge the world around them.
    Known as the "Debaters," they enjoy engaging in intellectually stimulating conversations and aren’t afraid to question assumptions.
    ENTPs are highly adaptable, easily able to switch perspectives to see multiple sides of a debate. 
    Their natural enthusiasm and charm make them engaging communicators, though their competitive nature can sometimes come across as abrasive.`,
    strengths: ['Adaptable', 'Creative', 'Confident', 'Good communicators', 'Objective'],
    weaknesses: ['Can be argumentative', 'Struggle with follow-through', 'Insensitive at times', 'Overly competitive']
  },
  { type: 'ESTP', functions: ['Se Ti', 'Si Te'], mode: 'Fight', bgColor: '#ff0000', bronze: 'INFJ', silver: 'ISTJ', gold: 'ISFP', copper: 'ENFP',
    description: `ESTPs are action-oriented, adaptable, and enthusiastic, preferring hands-on approaches and quick thinking.
    Known for their energetic nature, they engage directly with the present moment, making quick decisions and thriving in dynamic environments.
    However, their impulsive tendencies can sometimes lead them to overlook long-term consequences.`,
    strengths: ['Energetic', 'Pragmatic', 'Charismatic', 'Quick to respond', 'Observant'],
    weaknesses: ['Impatient', 'Impulsive', 'Risk-prone', 'Can be insensitive', 'Dislike routine']
  },
  { type: 'INTP', functions: ['Ti Ne', 'Te Si'], mode: 'Fight', bgColor: '#ff0000', bronze: 'ESFJ', silver: 'ENTJ', gold: 'ESTJ', copper: 'ISFP',
    description: `INTPs are analytical, logical, and independent thinkers, motivated by understanding complex systems and theories.
    Known as "The Thinkers," they are driven by their inner world of ideas and are often deep, abstract, and introspective thinkers.`,
    strengths: ['Analytical', 'Open-minded', 'Objective', 'Innovative', 'Independent'],
    weaknesses: ['Absent-minded', 'Struggle with social interaction', 'Insensitive', 'Procrastinate']
  },
  { type: 'ISTP', functions: ['Ti Se', 'Te Ni'], mode: 'Fight', bgColor: '#ff0000', bronze: 'ENFJ', silver: 'ESTJ', gold: 'ENTJ', copper: 'INFP',
    description: `ISTPs are practical, resourceful, and independent, skilled at handling real-world problems with a hands-on approach.
    They are adaptable and resilient, often able to respond quickly to changing circumstances with a grounded perspective.`,
    strengths: ['Efficient', 'Adaptable', 'Self-reliant', 'Problem-solving', 'Direct'],
    weaknesses: ['Insensitive', 'Impulsive', 'Risk-prone', 'Private', 'Unpredictable']
  },
  { type: 'INTJ', functions: ['Ni Te', 'Ne Fi'], mode: 'Freeze', bgColor: '#3b82f6', bronze: 'ESFP', silver: 'ENTP', gold: 'ENFP', copper: 'ISFJ',
    description: `INTJs are strategic and insightful thinkers with a drive to bring their visions and plans to fruition.
    They are driven by their strong inner vision and their ability to see long-term possibilities. With high standards,
    they approach tasks analytically and strive for efficiency, though they can come across as perfectionistic.`,
    strengths: ['Strategic', 'Independent', 'Determined', 'High standards', 'Loyal'],
    weaknesses: ['Overly critical', 'Insensitive', 'Perfectionistic', 'Reluctant to open up']
  },
  { type: 'ISTJ', functions: ['Si Te', 'Se Ti'], mode: 'Freeze', bgColor: '#3b82f6', bronze: 'ENFP', silver: 'ESTP', gold: 'ESFP', copper: 'INFJ',
    description: `ISTJs are responsible, organized, and grounded, driven by duty and loyalty to their commitments.
    Known as the "Duty Fulfillers," they have a meticulous attention to detail and respect for established traditions and norms.`,
    strengths: ['Reliable', 'Organized', 'Diligent', 'Practical', 'Detail-oriented'],
    weaknesses: ['Rigid', 'Insensitive', 'Struggle with change', 'Judgmental', 'Can be too serious']
  },
  { type: 'ENTJ', functions: ['Te Ni', 'Ti Se'], mode: 'Freeze', bgColor: '#3b82f6', bronze: 'ISFP', silver: 'INTP', gold: 'ISTP', copper: 'ESFJ',
    description: `ENTJs are confident, strategic leaders who excel at organizing resources and achieving their goals.
    Often known as "The Commanders," they are efficient and motivated by accomplishment and effectiveness.`,
    strengths: ['Efficient', 'Confident', 'Charismatic', 'Goal-oriented', 'Decisive'],
    weaknesses: ['Impatient', 'Dominating', 'Insensitive', 'Stubborn', 'Dislike inefficiency']
  },
  { type: 'ESTJ', functions: ['Te Si', 'Ti Ne'], mode: 'Freeze', bgColor: '#3b82f6', bronze: 'INFP', silver: 'ISTP', gold: 'INTP', copper: 'ENFJ',
    description: `ESTJs are organized, responsible, and focused on efficiency, often taking on leadership roles.
    Known for their reliability, they value tradition and structure and take pride in being pillars of their communities.`,
    strengths: ['Practical', 'Dependable', 'Hardworking', 'Structured', 'Loyal'],
    weaknesses: ['Inflexible', 'Insensitive', 'Judgmental', 'Resistant to change', 'Work-focused']
  },
  { type: 'ISFJ', functions: ['Si Fe', 'Se Ti'], mode: 'Fawn', bgColor: '#a855f7', bronze: 'ENTP', silver: 'ESFP', gold: 'ESTP', copper: 'INTJ',
    description: `ISFJs are gentle, considerate, and dedicated, driven by a strong sense of responsibility to others.
    Known for their nurturing and protective nature, they are often described as "The Caregivers" of their communities.`,
    strengths: ['Caring', 'Supportive', 'Detail-oriented', 'Reliable', 'Patient'],
    weaknesses: ['Overly selfless', 'Resistant to change', 'Shy', 'Overworked', 'Reluctant to open up']
  },
  { type: 'INFJ', functions: ['Ni Fe', 'Ne Ti'], mode: 'Fawn', bgColor: '#a855f7', bronze: 'ESTP', silver: 'ENFP', gold: 'ENTP', copper: 'ISTJ',
    description: `INFJs are insightful, idealistic, and compassionate, often feeling a strong sense of purpose in their lives.
    Known as "The Counselors," they are focused on understanding others and helping those around them grow.`,
    strengths: ['Empathetic', 'Insightful', 'Determined', 'Idealistic', 'Intuitive'],
    weaknesses: ['Overly idealistic', 'Sensitive to criticism', 'Reserved', 'Can be perfectionistic']
  },
  { type: 'ESFJ', functions: ['Fe Si', 'Fi Ne'], mode: 'Fawn', bgColor: '#a855f7', bronze: 'INTP', silver: 'ISFP', gold: 'INFP', copper: 'ENTJ',
    description: `ESFJs are warm, outgoing, and dedicated to maintaining harmony in their social environments.
    Known for their sociability and their genuine care for others, they are often pillars of support in their communities.`,
    strengths: ['Friendly', 'Caring', 'Reliable', 'Community-focused', 'Organized'],
    weaknesses: ['Can be overly concerned with others opinions', 'Judgmental', 'Overly self-sacrificing', 'Reluctant to change']
  },
  { type: 'ENFJ', functions: ['Fe Ni', 'Fi Se'], mode: 'Fawn', bgColor: '#a855f7', bronze: 'ISTP', silver: 'INFP', gold: 'ISFP', copper: 'ESTJ',
    description: `ENFJs are empathetic, organized, and driven by a genuine interest in the well-being of others.
    Known as "The Protagonists," they often take on roles that involve helping or inspiring people, thriving in environments where they can make a positive impact.`,
    strengths: ['Charismatic', 'Altruistic', 'Supportive', 'Good communicators', 'Organized'],
    weaknesses: ['Overly idealistic', 'Struggle with criticism', 'Can be people-pleasing', 'Sensitive to rejection']
  },
  { type: 'ESFP', functions: ['Se Fi', 'Si Te'], mode: 'Flight', bgColor: '#22c55e', bronze: 'INTJ', silver: 'ISFJ', gold: 'ISTJ', copper: 'ENTP',
    description: `ESFPs are energetic, spontaneous, and love to live in the moment. Known as "The Performers," they bring warmth and excitement to their surroundings,
    and are often enthusiastic about connecting with others.`,
    strengths: ['Warm', 'Enthusiastic', 'Sociable', 'Observant', 'Practical'],
    weaknesses: ['Easily bored', 'Impulsive', 'Dislike planning', 'Can be overly sensitive']
  },
  { type: 'ENFP', functions: ['Ne Fi', 'Ni Te'], mode: 'Flight', bgColor: '#22c55e', bronze: 'ISTJ', silver: 'INFJ', gold: 'INTJ', copper: 'ESTP',
    description: `ENFPs are imaginative, spontaneous, and enthusiastic about exploring new ideas and possibilities.
    Known as "The Campaigners," they enjoy connecting with people on a deeper level and are often driven by a sense of purpose.`,
    strengths: ['Enthusiastic', 'Creative', 'Curious', 'Empathetic', 'Energetic'],
    weaknesses: ['Overthinkers', 'Easily distracted', 'Can be overly idealistic', 'Struggle with follow-through']
  },
  { type: 'ISFP', functions: ['Fi Se', 'Fe Ni'], mode: 'Flight', bgColor: '#22c55e', bronze: 'ENTJ', silver: 'ESFJ', gold: 'ESTJ', copper: 'INTP',
    description: `ISFPs are sensitive, artistic, and attuned to their surroundings. Known as "The Adventurers," they value freedom of expression and are often guided by their values.
    They prefer a quiet, peaceful life and enjoy opportunities to create and explore.`,
    strengths: ['Loyal', 'Compassionate', 'Flexible', 'Artistic', 'Authentic'],
    weaknesses: ['Easily stressed', 'Private', 'Can struggle with planning', 'Avoids conflict']
  },
  { type: 'INFP', functions: ['Fi Ne', 'Fe Si'], mode: 'Flight', bgColor: '#22c55e', bronze: 'ESTJ', silver: 'ENFJ', gold: 'ESFJ', copper: 'ISTP',
    description: `INFPs are idealistic, introspective, and driven by a strong sense of values. Known as "The Mediators," they are passionate about causes close to their heart
    and often strive to make a positive difference in the world.`,
    strengths: ['Empathetic', 'Creative', 'Loyal', 'Introspective', 'Idealistic'],
    weaknesses: ['Can be overly sensitive', 'Struggle with structure', 'Prone to indecision', 'Withdrawn']
  }
];
