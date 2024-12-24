import React, { useState } from 'react';
import {
  Grid,
  IconButton,
  Box,
  Typography,
  Slider,
  Button,
  Paper,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
  LinearProgress,
  Modal,
  useMediaQuery,
  useTheme,
  Tooltip
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {
  determinePrimary4FType,
  matchMBTIType,
  MBTIProfiles,
} from '../utils/mbtiMapping';
import Matrix from './Matrix';
import { 
  HelpOutline,  
  Close,
  Check,
  SwitchAccount,
  ShuffleOn
} from '@mui/icons-material';
import { guid } from '../utils/guid';
import { typesData } from '../utils/typesData';
import { Helmet } from 'react-helmet';

const BigFiveQuestionnaireHelmet: React.FC = () => (
  <Helmet>
    <title>Discover Your Personality with the TRPI Test</title>
    <meta
      name="description"
      content="Take the TRPI Assessment Tool to uncover your personality type, explore Big Five traits, and learn how trauma responses shape your personality. Start your journey today on TraumaIndicator.com!"
    />
    <meta
      property="og:title"
      content="Discover Your Personality with the TRPI Test"
    />
    <meta
      property="og:description"
      content="Uncover your true self with the TRPI Test. Analyze your Big Five traits and discover how your personality aligns with 4F trauma responses. Take the test now on TraumaIndicator.com!"
    />
    <meta property="og:type" content="website" />
    <meta
      property="og:url"
      content="https://traumaindicator.com/#/test"
    />
    <meta
      property="og:image"
      content="https://traumaindicator.com/logo.png"
    />
  </Helmet>
);


const statements = [
  {
    text: 'I am open to exploring new ideas and perspectives.',
    trait: 'openness',
    weight: 1.2,
    subtraits: {
      '0-10': { text: 'I am slightly open to new ideas.', weight: 0.1 },
      '10-20': { text: 'I have a mild interest in exploring new perspectives.', weight: 0.2 },
      '20-30': { text: 'I sometimes consider new ideas.', weight: 0.3 },
      '30-40': { text: 'I moderately explore new perspectives.', weight: 0.4 },
      '40-50': { text: 'I am fairly open to exploring different ideas.', weight: 0.5 },
      '50-60': { text: 'I am quite open to considering new perspectives.', weight: 0.6 },
      '60-70': { text: 'I regularly explore new ideas and perspectives.', weight: 0.7 },
      '70-80': { text: 'I am highly open to trying different approaches.', weight: 0.8 },
      '80-90': { text: 'I am extremely open to all kinds of ideas.', weight: 0.9 },
      '90-100': { text: 'I am exceptionally open to exploring and embracing new perspectives.', weight: 1.0 },
    }
  },
  {
    text: 'I often think about abstract concepts and like to ponder deep questions.',
    trait: 'openness',
    weight: 0.9,
    subtraits: {
      '0-10': { text: 'I rarely think about abstract concepts.', weight: 0.1 },
      '10-20': { text: 'I occasionally consider simple abstract ideas.', weight: 0.2 },
      '20-30': { text: 'I sometimes think about abstract questions.', weight: 0.3 },
      '30-40': { text: 'I moderately enjoy pondering deep ideas.', weight: 0.4 },
      '40-50': { text: 'I fairly often engage with abstract concepts.', weight: 0.5 },
      '50-60': { text: 'I frequently think about profound and complex questions.', weight: 0.6 },
      '60-70': { text: 'I regularly engage with complex abstract thoughts.', weight: 0.7 },
      '70-80': { text: 'I consistently think deeply about abstract questions.', weight: 0.8 },
      '80-90': { text: 'I almost always consider profound and abstract ideas.', weight: 0.9 },
      '90-100': { text: 'I perpetually ponder the deepest and most abstract concepts.', weight: 1.0 },
    }
  },
  {
    text: 'I am comfortable with change and easily adapt to new situations.',
    trait: 'openness',
    weight: 0.9,
    subtraits: {
      '0-10': { text: 'I struggle with change and prefer stability.', weight: 0.1 },
      '10-20': { text: 'I occasionally adapt to small changes.', weight: 0.2 },
      '20-30': { text: 'I sometimes embrace change with some hesitation.', weight: 0.3 },
      '30-40': { text: 'I moderately adapt to new situations.', weight: 0.4 },
      '40-50': { text: 'I fairly often feel comfortable with changes.', weight: 0.5 },
      '50-60': { text: 'I frequently embrace change and adapt quickly.', weight: 0.6 },
      '60-70': { text: 'I regularly handle change with ease.', weight: 0.7 },
      '70-80': { text: 'I am highly comfortable adapting to new situations.', weight: 0.8 },
      '80-90': { text: 'I am extremely adept at managing changes.', weight: 0.9 },
      '90-100': { text: 'I thrive on change and effortlessly adapt to new situations.', weight: 1.0 },
    }
  },
  {
    "text": "I set clear priorities and focus on achieving my long-term goals.",
    "trait": "conscientiousness",
    "weight": 1.2,
    "subtraits": {
      "0-10": { "text": "I rarely set clear priorities or focus on long-term goals.", "weight": 0.1 },
      "10-20": { "text": "I occasionally set goals but struggle to prioritize.", "weight": 0.2 },
      "20-30": { "text": "I sometimes focus on setting and achieving long-term goals.", "weight": 0.3 },
      "30-40": { "text": "I moderately set priorities and work towards my goals.", "weight": 0.4 },
      "40-50": { "text": "I fairly often focus on achieving long-term goals.", "weight": 0.5 },
      "50-60": { "text": "I frequently set clear priorities and focus on goals.", "weight": 0.6 },
      "60-70": { "text": "I regularly focus on achieving my long-term goals.", "weight": 0.7 },
      "70-80": { "text": "I strongly set and achieve long-term priorities.", "weight": 0.8 },
      "80-90": { "text": "I am highly focused on setting and achieving priorities.", "weight": 0.9 },
      "90-100": { "text": "I always set clear priorities and achieve my long-term goals with focus.", "weight": 1.0 }
    }
  },
  {
    "text": "I feel energized by engaging with new people and building connections.",
    "trait": "extraversion",
    "weight": 1.1,
    "subtraits": {
      "0-10": { "text": "I rarely feel energized by meeting new people.", "weight": 0.1 },
      "10-20": { "text": "I occasionally enjoy meeting new people but prefer to keep to myself.", "weight": 0.2 },
      "20-30": { "text": "I sometimes feel energized by engaging with new people.", "weight": 0.3 },
      "30-40": { "text": "I moderately enjoy meeting new people and making connections.", "weight": 0.4 },
      "40-50": { "text": "I fairly often feel energized by social interactions.", "weight": 0.5 },
      "50-60": { "text": "I frequently enjoy meeting new people and forming connections.", "weight": 0.6 },
      "60-70": { "text": "I regularly feel energized by engaging with new people.", "weight": 0.7 },
      "70-80": { "text": "I strongly enjoy building connections with new people.", "weight": 0.8 },
      "80-90": { "text": "I am highly energized by meeting and connecting with others.", "weight": 0.9 },
      "90-100": { "text": "I always feel invigorated by engaging with new people and building connections.", "weight": 1.0 }
    }
  },
  {
    "text": "I enjoy supporting my friends and helping them succeed.",
    "trait": "agreeableness",
    "weight": 1.1,
    "subtraits": {
      "0-10": { "text": "I rarely enjoy helping or supporting my friends.", "weight": 0.1 },
      "10-20": { "text": "I occasionally help friends but don’t enjoy it much.", "weight": 0.2 },
      "20-30": { "text": "I sometimes support my friends and their goals.", "weight": 0.3 },
      "30-40": { "text": "I moderately enjoy supporting and helping friends.", "weight": 0.4 },
      "40-50": { "text": "I fairly often support my friends and enjoy their success.", "weight": 0.5 },
      "50-60": { "text": "I frequently enjoy helping my friends succeed.", "weight": 0.6 },
      "60-70": { "text": "I regularly support and enjoy helping my friends.", "weight": 0.7 },
      "70-80": { "text": "I strongly enjoy supporting and encouraging friends.", "weight": 0.8 },
      "80-90": { "text": "I am highly focused on supporting my friends and their goals.", "weight": 0.9 },
      "90-100": { "text": "I always prioritize supporting my friends and celebrating their successes.", "weight": 1.0 }
    }
  },
  {
    "text": "I often feel overwhelmed when dealing with multiple responsibilities.",
    "trait": "neuroticism",
    "weight": 1.1,
    "subtraits": {
      "0-10": { "text": "I rarely feel overwhelmed by responsibilities.", "weight": 0.1 },
      "10-20": { "text": "I occasionally feel overwhelmed but manage well.", "weight": 0.2 },
      "20-30": { "text": "I sometimes feel overwhelmed with responsibilities.", "weight": 0.3 },
      "30-40": { "text": "I moderately feel overwhelmed under pressure.", "weight": 0.4 },
      "40-50": { "text": "I fairly often feel overwhelmed by responsibilities.", "weight": 0.5 },
      "50-60": { "text": "I frequently feel overwhelmed when managing tasks.", "weight": 0.6 },
      "60-70": { "text": "I regularly feel overwhelmed with multiple responsibilities.", "weight": 0.7 },
      "70-80": { "text": "I strongly feel overwhelmed when under pressure.", "weight": 0.8 },
      "80-90": { "text": "I am highly prone to feeling overwhelmed by responsibilities.", "weight": 0.9 },
      "90-100": { "text": "I always feel deeply overwhelmed when managing many tasks.", "weight": 1.0 }
    }
  },    
  {
    text: 'I prefer organized, planned activities over spontaneous events.',
    trait: 'conscientiousness',
    weight: 0.9,
    subtraits: {
      '0-10': { text: 'I rarely prefer organized activities and enjoy spontaneity.', weight: 0.1 },
      '10-20': { text: 'I occasionally enjoy planned activities but like being spontaneous.', weight: 0.2 },
      '20-30': { text: 'I sometimes prefer organized activities over spontaneous ones.', weight: 0.3 },
      '30-40': { text: 'I moderately enjoy planned activities.', weight: 0.4 },
      '40-50': { text: 'I fairly often prefer organized and structured events.', weight: 0.5 },
      '50-60': { text: 'I frequently choose planned activities over spontaneous ones.', weight: 0.6 },
      '60-70': { text: 'I regularly prefer organized, planned events.', weight: 0.7 },
      '70-80': { text: 'I strongly favor structured and well-planned activities.', weight: 0.8 },
      '80-90': { text: 'I am highly inclined to choose organized events over spontaneous ones.', weight: 0.9 },
      '90-100': { text: 'I exclusively prefer meticulously organized and planned activities.', weight: 1.0 },
    }
  },
  {
    text: 'I often take charge in group settings and feel energized by social interactions.',
    trait: 'extraversion',
    weight: 1.0,
    subtraits: {
      '0-10': { text: 'I rarely take charge in groups and avoid social settings.', weight: 0.1 },
      '10-20': { text: 'I occasionally take charge but prefer to observe in social settings.', weight: 0.2 },
      '20-30': { text: 'I sometimes feel energized by group interactions.', weight: 0.3 },
      '30-40': { text: 'I moderately enjoy taking charge in group settings.', weight: 0.4 },
      '40-50': { text: 'I fairly often feel energized by socializing.', weight: 0.5 },
      '50-60': { text: 'I frequently take charge and enjoy social interactions.', weight: 0.6 },
      '60-70': { text: 'I regularly feel energized and confident in group settings.', weight: 0.7 },
      '70-80': { text: 'I strongly enjoy leading and socializing in group settings.', weight: 0.8 },
      '80-90': { text: 'I am highly energized by taking charge in social interactions.', weight: 0.9 },
      '90-100': { text: 'I thrive on leading groups and am fully energized by social interactions.', weight: 1.0 },
    }
  },
  {
    text: 'I often prioritize harmony and avoid conflict in my relationships.',
    trait: 'agreeableness',
    weight: 1.0,
    subtraits: {
      '0-10': { text: 'I rarely prioritize harmony and may engage in conflicts.', weight: 0.1 },
      '10-20': { text: 'I occasionally try to avoid conflict but don’t always prioritize harmony.', weight: 0.2 },
      '20-30': { text: 'I sometimes try to maintain harmony in my relationships.', weight: 0.3 },
      '30-40': { text: 'I moderately prioritize harmony and avoid conflicts when possible.', weight: 0.4 },
      '40-50': { text: 'I fairly often strive to maintain harmony in my relationships.', weight: 0.5 },
      '50-60': { text: 'I frequently avoid conflict and prioritize harmonious relationships.', weight: 0.6 },
      '60-70': { text: 'I regularly make efforts to maintain harmony and avoid disagreements.', weight: 0.7 },
      '70-80': { text: 'I strongly prioritize harmony in my relationships.', weight: 0.8 },
      '80-90': { text: 'I am highly committed to avoiding conflicts and fostering harmony.', weight: 0.9 },
      '90-100': { text: 'I always prioritize harmony and work tirelessly to avoid conflicts.', weight: 1.0 },
    }
  },
  {
    text: 'I tend to feel anxious or worried in stressful situations.',
    trait: 'neuroticism',
    weight: 1.0,
    subtraits: {
      '0-10': { text: 'I rarely feel anxious or worried, even in stressful situations.', weight: 0.1 },
      '10-20': { text: 'I occasionally feel mild anxiety in stress-inducing situations.', weight: 0.2 },
      '20-30': { text: 'I sometimes feel worried or anxious under stress.', weight: 0.3 },
      '30-40': { text: 'I moderately experience anxiety in stressful scenarios.', weight: 0.4 },
      '40-50': { text: 'I fairly often feel worried when faced with stress.', weight: 0.5 },
      '50-60': { text: 'I frequently feel anxious during stressful situations.', weight: 0.6 },
      '60-70': { text: 'I regularly experience worry or anxiety in stressful circumstances.', weight: 0.7 },
      '70-80': { text: 'I strongly feel anxious and worried in stressful situations.', weight: 0.8 },
      '80-90': { text: 'I am highly prone to anxiety and worry under stress.', weight: 0.9 },
      '90-100': { text: 'I almost always feel deeply anxious or worried in stressful situations.', weight: 1.0 },
    }
  },
  
  {
    text: 'I feel a strong responsibility to meet my goals and commitments.',
    trait: 'conscientiousness',
    weight: 1.1,
    subtraits: {
      '0-10': { text: 'I rarely feel responsible for meeting my goals or commitments.', weight: 0.1 },
      '10-20': { text: 'I occasionally take responsibility for meeting my goals.', weight: 0.2 },
      '20-30': { text: 'I sometimes feel committed to fulfilling my goals.', weight: 0.3 },
      '30-40': { text: 'I moderately feel responsible for achieving my goals.', weight: 0.4 },
      '40-50': { text: 'I fairly often feel a strong responsibility to meet commitments.', weight: 0.5 },
      '50-60': { text: 'I frequently ensure I meet my goals and commitments.', weight: 0.6 },
      '60-70': { text: 'I regularly feel accountable for achieving my goals.', weight: 0.7 },
      '70-80': { text: 'I strongly feel responsible for meeting my commitments.', weight: 0.8 },
      '80-90': { text: 'I am highly dedicated to fulfilling my goals and responsibilities.', weight: 0.9 },
      '90-100': { text: 'I always feel a deep responsibility to achieve my goals.', weight: 1.0 },
    }
  },
  {
    text: 'I enjoy discussing ideas and debating with others.',
    trait: 'extraversion',
    weight: 1.1,
    subtraits: {
      '0-10': { text: 'I rarely enjoy discussing ideas or debating with others.', weight: 0.1 },
      '10-20': { text: 'I occasionally engage in discussions but avoid debates.', weight: 0.2 },
      '20-30': { text: 'I sometimes enjoy discussing ideas with others.', weight: 0.3 },
      '30-40': { text: 'I moderately enjoy debating and discussing topics.', weight: 0.4 },
      '40-50': { text: 'I fairly often engage in debates and discussions.', weight: 0.5 },
      '50-60': { text: 'I frequently enjoy sharing ideas and debating with others.', weight: 0.6 },
      '60-70': { text: 'I regularly discuss and debate ideas enthusiastically.', weight: 0.7 },
      '70-80': { text: 'I strongly enjoy sharing ideas and engaging in debates.', weight: 0.8 },
      '80-90': {text: 'I am highly energized by discussing and debating ideas.', weight: 0.9 },
      '90-100': {text: 'I always thrive on discussing ideas with others.', weight:1}
    }
  },
  {
    text: 'I strive to be understanding and supportive towards others.',
    trait: 'agreeableness',
    weight: 1.2,
    subtraits: {
      '0-10': { text: 'I rarely try to understand or support others.', weight: 0.1 },
      '10-20': { text: 'I occasionally make an effort to be supportive.', weight: 0.2 },
      '20-30': { text: 'I sometimes try to understand and support others.', weight: 0.3 },
      '30-40': { text: 'I moderately strive to show understanding.', weight: 0.4 },
      '40-50': { text: 'I fairly often make an effort to be supportive.', weight: 0.5 },
      '50-60': { text: 'I frequently try to understand and support others.', weight: 0.6 },
      '60-70': { text: 'I regularly strive to show understanding and support.', weight: 0.7 },
      '70-80': { text: 'I strongly strive to be understanding and supportive.', weight: 0.8 },
      '80-90': { text: 'I am highly focused on understanding and supporting others.', weight: 0.9 },
      '90-100': { text: 'I always prioritize being understanding and supportive.', weight: 1.0 },
    }
  },
  {
    text: 'I often feel uneasy or second-guess myself when making decisions.',
    trait: 'neuroticism',
    weight: 0.9,
    subtraits: {
      '0-10': { text: 'I rarely feel uneasy or second-guess my decisions.', weight: 0.1 },
      '10-20': { text: 'I occasionally second-guess myself when deciding.', weight: 0.2 },
      '20-30': { text: 'I sometimes feel unsure when making decisions.', weight: 0.3 },
      '30-40': { text: 'I moderately feel uneasy when deciding.', weight: 0.4 },
      '40-50': { text: 'I fairly often second-guess my decisions.', weight: 0.5 },
      '50-60': { text: 'I frequently feel uneasy when making decisions.', weight: 0.6 },
      '60-70': { text: 'I regularly second-guess myself when deciding.', weight: 0.7 },
      '70-80': { text: 'I strongly feel uneasy about making decisions.', weight: 0.8 },
      '80-90': { text: 'I am highly prone to second-guessing myself.', weight: 0.9 },
      '90-100': { text: 'I almost always feel uneasy and second-guess my decisions.', weight: 1.0 },
    }
  },
  
  {
    text: 'I tend to make decisions based on logic rather than emotions.',
    trait: 'conscientiousness',
    weight: 1.3,
    subtraits: {
      '0-10': { text: 'I rarely rely on logic when making decisions.', weight: 0.1 },
      '10-20': { text: 'I occasionally make logical decisions but often consider emotions.', weight: 0.2 },
      '20-30': { text: 'I sometimes prioritize logic over emotions in decisions.', weight: 0.3 },
      '30-40': { text: 'I moderately rely on logic when deciding.', weight: 0.4 },
      '40-50': { text: 'I fairly often make decisions based on logic.', weight: 0.5 },
      '50-60': { text: 'I frequently prioritize logic over emotions.', weight: 0.6 },
      '60-70': { text: 'I regularly rely on logical reasoning in decisions.', weight: 0.7 },
      '70-80': { text: 'I strongly favor logic over emotions in decision-making.', weight: 0.8 },
      '80-90': { text: 'I am highly focused on making logical decisions.', weight: 0.9 },
      '90-100': { text: 'I always make decisions rooted in logical reasoning.', weight: 1.0 },
    }
  },
  
  {
    text: 'I tend to stay calm and assertive when solving challenges.',
    trait: 'extraversion',
    weight: 1.3,
    subtraits: {
      '0-10': { text: 'I rarely stay calm or assertive when facing challenges.', weight: 0.1 },
      '10-20': { text: 'I occasionally remain calm but struggle with assertiveness.', weight: 0.2 },
      '20-30': { text: 'I sometimes stay calm and assertive in difficult situations.', weight: 0.3 },
      '30-40': { text: 'I moderately stay calm and focused under pressure.', weight: 0.4 },
      '40-50': { text: 'I fairly often maintain calm and assertiveness when solving challenges.', weight: 0.5 },
      '50-60': { text: 'I frequently stay calm and assertive under stress.', weight: 0.6 },
      '60-70': { text: 'I regularly remain calm and focused when solving problems.', weight: 0.7 },
      '70-80': { text: 'I strongly stay composed and assertive in challenges.', weight: 0.8 },
      '80-90': { text: 'I am highly calm and assertive under pressure.', weight: 0.9 },
      '90-100': { text: 'I always stay calm, composed, and assertive when facing challenges.', weight: 1.0 },
    }
  },
  {
    text: 'I’m sensitive to other people’s feelings and try to meet their needs.',
    trait: 'agreeableness',
    weight: 1.0,
    subtraits: {
      '0-10': { text: 'I rarely notice or care about others’ feelings.', weight: 0.1 },
      '10-20': { text: 'I occasionally pay attention to others’ feelings.', weight: 0.2 },
      '20-30': { text: 'I sometimes try to be sensitive to others’ needs.', weight: 0.3 },
      '30-40': { text: 'I moderately notice and respond to others’ feelings.', weight: 0.4 },
      '40-50': { text: 'I fairly often try to meet others’ emotional needs.', weight: 0.5 },
      '50-60': { text: 'I frequently notice and respond to others’ feelings.', weight: 0.6 },
      '60-70': { text: 'I regularly make an effort to meet others’ needs.', weight: 0.7 },
      '70-80': { text: 'I strongly focus on being sensitive and supportive.', weight: 0.8 },
      '80-90': { text: 'I am highly aware of others’ emotions and try to meet their needs.', weight: 0.9 },
      '90-100': { text: 'I always prioritize being sensitive and supportive to others.', weight: 1.0 },
    }
  },
  {
    text: 'I often dwell on past mistakes and worry about future outcomes.',
    trait: 'neuroticism',
    weight: 0.95,
    subtraits: {
      '0-10': { text: 'I rarely think about past mistakes or worry about the future.', weight: 0.1 },
      '10-20': { text: 'I occasionally reflect on past mistakes and consider future risks.', weight: 0.2 },
      '20-30': { text: 'I sometimes dwell on mistakes and worry about outcomes.', weight: 0.3 },
      '30-40': { text: 'I moderately worry about past and future outcomes.', weight: 0.4 },
      '40-50': { text: 'I fairly often dwell on past mistakes and outcomes.', weight: 0.5 },
      '50-60': { text: 'I frequently reflect on past mistakes and worry about outcomes.', weight: 0.6 },
      '60-70': { text: 'I regularly dwell on mistakes and stress about the future.', weight: 0.7 },
      '70-80': { text: 'I strongly focus on past mistakes and worry about future risks.', weight: 0.8 },
      '80-90': { text: 'I am highly prone to dwelling on past mistakes and future worries.', weight: 0.9 },
      '90-100': { text: 'I almost always dwell on the past and stress about the future.', weight: 1.0 },
    }
  },
  {
    text: 'I am detail-oriented and take time to think through tasks carefully.',
    trait: 'conscientiousness',
    weight: 0.9,
    subtraits: {
      '0-10': { text: 'I rarely pay attention to details or think through tasks.', weight: 0.1 },
      '10-20': { text: 'I occasionally take time to think about tasks in detail.', weight: 0.2 },
      '20-30': { text: 'I sometimes focus on details when completing tasks.', weight: 0.3 },
      '30-40': { text: 'I moderately pay attention to details.', weight: 0.4 },
      '40-50': { text: 'I fairly often think through tasks carefully.', weight: 0.5 },
      '50-60': { text: 'I frequently focus on details and think through tasks.', weight: 0.6 },
      '60-70': { text: 'I regularly take time to focus on details.', weight: 0.7 },
      '70-80': { text: 'I strongly focus on details and think carefully about tasks.', weight: 0.8 },
      '80-90': { text: 'I am highly detail-oriented and thorough with tasks.', weight: 0.9 },
      '90-100': { text: 'I always focus on details and think through tasks thoroughly.', weight: 1.0 },
    }
  },
  {
    text: 'I’m known for being independent and bold in my approach to problems.',
    trait: 'extraversion',
    weight: 1.0,
    subtraits: {
      '0-10': { text: 'I rarely act independently or boldly when solving problems.', weight: 0.1 },
      '10-20': { text: 'I occasionally act independently but rarely take bold steps.', weight: 0.2 },
      '20-30': { text: 'I sometimes approach problems boldly and independently.', weight: 0.3 },
      '30-40': { text: 'I moderately act boldly and independently in problem-solving.', weight: 0.4 },
      '40-50': { text: 'I fairly often show independence and boldness.', weight: 0.5 },
      '50-60': { text: 'I frequently solve problems independently and boldly.', weight: 0.6 },
      '60-70': { text: 'I regularly take bold and independent approaches to problems.', weight: 0.7 },
      '70-80': { text: 'I strongly demonstrate independence and boldness.', weight: 0.8 },
      '80-90': { text: 'I am highly independent and bold in my approach to challenges.', weight: 0.9 },
      '90-100': { text: 'I always act independently and boldly when solving problems.', weight: 1.0 },
    }
  },
  {
    text: 'I prefer to work as part of a team and value cooperation.',
    trait: 'agreeableness',
    weight: 0.9,
    subtraits: {
      '0-10': { text: 'I rarely value cooperation or enjoy working in a team.', weight: 0.1 },
      '10-20': { text: 'I occasionally work in teams but don’t always value cooperation.', weight: 0.2 },
      '20-30': { text: 'I sometimes prefer working as part of a team.', weight: 0.3 },
      '30-40': { text: 'I moderately value cooperation and teamwork.', weight: 0.4 },
      '40-50': { text: 'I fairly often enjoy working in teams and value cooperation.', weight: 0.5 },
      '50-60': { text: 'I frequently prefer teamwork and cooperative efforts.', weight: 0.6 },
      '60-70': { text: 'I regularly work well in teams and value cooperation.', weight: 0.7 },
      '70-80': { text: 'I strongly prefer teamwork and emphasize cooperation.', weight: 0.8 },
      '80-90': { text: 'I am highly inclined to work as part of a team and value cooperation.', weight: 0.9 },
      '90-100': { text: 'I always value teamwork and prioritize cooperation in group settings.', weight: 1.0 },
    }
  },
  {
    text: 'I tend to overthink situations and feel uneasy about the unknown.',
    trait: 'neuroticism',
    weight: 1.0,
    subtraits: {
      '0-10': { text: 'I rarely overthink or feel uneasy about the unknown.', weight: 0.1 },
      '10-20': { text: 'I occasionally feel uneasy when faced with the unknown.', weight: 0.2 },
      '20-30': { text: 'I sometimes overthink and feel uneasy about uncertainty.', weight: 0.3 },
      '30-40': { text: 'I moderately overthink situations and feel uneasy about the unknown.', weight: 0.4 },
      '40-50': { text: 'I fairly often feel uneasy about uncertain situations.', weight: 0.5 },
      '50-60': { text: 'I frequently overthink and feel uneasy about uncertainty.', weight: 0.6 },
      '60-70': { text: 'I regularly overthink situations and stress about the unknown.', weight: 0.7 },
      '70-80': { text: 'I strongly feel uneasy and overthink unknown scenarios.', weight: 0.8 },
      '80-90': { text: 'I am highly prone to overthinking and feeling uneasy about the unknown.', weight: 0.9 },
      '90-100': { text: 'I always overthink situations and feel deeply uneasy about uncertainty.', weight: 1.0 },
    }
  },
  
  ]

// Group statements into stages
const stages = [
  statements.slice(0, 3), // Stage 0
  statements.slice(3, 7), // Stage 1
  statements.slice(7, 11), // Stage 2
  statements.slice(11, 15), // Stage 3
  statements.slice(15, 19), // Stage 4
];

const BigFiveQuestionnaire: React.FC<{ onComplete: (responses: any) => void }> = ({
  onComplete,
}) => {
  const navigate = useNavigate();

  const initialResponses = () => {
    if(localStorage.getItem('responses')) {
      return JSON.parse(localStorage.getItem('responses')  || '')
    }
    return statements.reduce((acc, s) => {
    if (!acc[s.trait]) acc[s.trait] = [];
    acc[s.trait].push(0.5);
    return acc;
  }, {} as { [trait: string]: number[] })
};

  const [responses, setResponses] = useState(initialResponses);
  const [currentStage, setCurrentStage] = useState(0);

  const [primary4FType, setPrimary4FType] = useState<string | null>(null);
  const [matchedMBTIType, setMatchedMBTIType] = useState<string | null>(null);
  const [matchedType, setMatchedType] = useState<string | null>(null);
  const [selectedMbtiType, setSelectedMbtiType] = useState<string | null>(null);
  const [selectedStatement, setSelectedStatement] = useState<string | null>(null)
  const [openModal, setOpenModal] = useState(false); // Modal is pre-opened by default
  const type = typesData.find(t => t.type === matchedMBTIType);


  const setRandomly = () => {
    const randomResponses = statements.reduce((acc, s) => {
      if (!acc[s.trait]) acc[s.trait] = [];
      acc[s.trait].push(Math.random());
      return acc;
    }, {} as { [trait: string]: number[] });
    setResponses(randomResponses)

    const weightedScores = Object.keys(randomResponses).reduce(
      (acc, traitKey) => {
        const traitScores = randomResponses[traitKey].map((score, i) => 
          score * (statements.find(s => s.trait === traitKey && statements.indexOf(s) === i)?.weight || 1)
        );
        acc[traitKey] = traitScores.reduce((sum, score) => sum + score, 0) / traitScores.length;
        return acc;
      },
      {} as { [trait: string]: number }
    );
    const primary4F = determinePrimary4FType(weightedScores);
    const mbtiType = matchMBTIType(weightedScores, primary4F);
    const type = matchMBTIType(weightedScores, primary4F, false);

    setPrimary4FType(primary4F);
    setMatchedMBTIType(mbtiType);
    setMatchedType(type);
  }

  const getSubtrait = (trait: string, index: number, value: number) => {
    const statement = statements.filter((s) => s.trait === trait)[index];
    if (!statement) return null;

    const percentage = Math.round(value * 100);
    const range = Object.keys(statement.subtraits).find((key) => {
      const [min, max] = key.split('-').map(Number);
      return percentage >= min && percentage <= max;
    });

    return range ? (statement.subtraits as any)[range]?.text : null;
  };

  const handleSliderChange =
    (trait: string, index: number) =>
    (event: Event, value: number | number[], activeThumb: number) => {
      setResponses((prev: any) => {
        const updatedResponses = { ...prev };
        updatedResponses[trait][index] = value as number;

        
        const weightedScores = Object.keys(updatedResponses).reduce(
          (acc, traitKey) => {
            const traitScores = updatedResponses[traitKey].map((score: any, i: any) => 
              score * (statements.find(s => s.trait === traitKey && statements.indexOf(s) === i)?.weight || 1)
            );
            acc[traitKey] = traitScores.reduce((sum: any, score: any) => sum + score, 0) / traitScores.length;
            return acc;
          },
          {} as { [trait: string]: number }
        );

        const primary4F = determinePrimary4FType(weightedScores);
        const mbtiType = matchMBTIType(weightedScores, primary4F);
        const type = matchMBTIType(weightedScores, primary4F,false);
        const sub = getSubtrait(trait, index, value as number);

        setSelectedStatement(sub)
        setPrimary4FType(primary4F);
        setMatchedMBTIType(mbtiType);
        setMatchedType(type);

        localStorage.setItem('responses', JSON.stringify(updatedResponses))
        return updatedResponses;
      });
    };

  const handleNext = () => {
    if (currentStage < stages.length - 1) setCurrentStage(currentStage + 1);
    setSelectedStatement(null)
  };

  const handleBack = () => {
    if (currentStage > 0) setCurrentStage(currentStage - 1);
    setSelectedStatement(null)
  };

  const handleSubmit = async () => {
    const weightedScores = Object.keys(responses).reduce((acc, trait) => {
      const traitScores = responses[trait].map((score: any, i: any) => 
        score * (statements.find(s => s.trait === trait && statements.indexOf(s) === i)?.weight || 1)
      );
      acc[trait] = traitScores.reduce((sum: any, score: any) => sum + score, 0) / traitScores.length;
      return acc;
    }, {} as { [trait: string]: number });

    const primary4F = determinePrimary4FType(weightedScores);
    const mbtiType = matchMBTIType(weightedScores, primary4F);
    const profile = typesData.find(t => t.type === mbtiType);

    const newJson = {
      type: mbtiType,
      primary4FType: primary4F,
      bigFiveResponses: weightedScores,
    }
    localStorage.setItem(guid(), JSON.stringify(newJson));
    localStorage.removeItem('responses')
    const binId = await onComplete({ primary4F, mbtiType, selectedMbtiType, profile: weightedScores, description: ''});
    navigate(`/result/${binId}`);
  };

  const progress = ((currentStage + 1) / stages.length) * 100;
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleMatrixSelect = (type: string) => {
    console.log('Selected Type:', type)
    if (type === 'XXXX') {
      // If the user doesn't know their type, we can just log it or set states accordingly
     // setPrimary4FType(null);
      //setMatchedMBTIType('XXXX');
      //setMatchedType('XXXX');
      handleCloseModal();
      return;
    }

    const profile = MBTIProfiles.find((p) => p.name === type)?.traits;
    setSelectedMbtiType(type);
    if (profile) {
      console.log(profile)
      const updatedResponses = { ...responses };
      Object.keys(updatedResponses).forEach((trait) => {
        updatedResponses[trait] = updatedResponses[trait].map(
          () => profile[trait as keyof typeof profile]
        );
      });
      setResponses(updatedResponses);

      const primary4F = determinePrimary4FType(profile);
      const mbtiType = matchMBTIType(profile, primary4F);
      const typeNo4F = matchMBTIType(profile, primary4F,false);

      setPrimary4FType(primary4F);
      setMatchedMBTIType(mbtiType);
      setMatchedType(typeNo4F);
    } else {
      setPrimary4FType(null);
      setMatchedMBTIType(null);
      setMatchedType(null);
    }
    handleCloseModal();
  };

  return (
    <Paper elevation={3} style={{ padding: 20, margin: '20px auto', maxWidth: 900, width: isMobile ? 300 : 750 }}>
     <BigFiveQuestionnaireHelmet/>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h5" gutterBottom>
          TRPI Assessment Tool
        </Typography>
        <Box>
          <IconButton onClick={setRandomly} color="primary">
            <ShuffleOn />
          </IconButton>
          <IconButton onClick={handleOpenModal} color="primary">
            <SwitchAccount />
          </IconButton>
        </Box>
      </Box>
      {/* Modal for Matrix selection */}
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            outline: 'none',
            width: { xs: '90%', sm: '60%' },
            borderRadius: '8px',
          }}
        >
          <Box sx={{
            marginLeft: '10%',
            marginTop: '5%',
            marginBottom: '5%',
            marginRight: '5%',
          }}>
          <Typography sx={{marginRight:"50px"}} variant="h6" gutterBottom>
            Select Your Type Here
          </Typography>
          <Typography variant="body2" gutterBottom>
            Use this as a preset if you already know your type!
          </Typography>
          <Matrix onSelectType={handleMatrixSelect} width={isMobile ? '60%' : '90%'}/>
          <Box sx={{position:'relative', right:'50px'}} mt={2} display="flex" justifyContent="center">
            <Button variant="contained" color="secondary" onClick={() => handleMatrixSelect('XXXX')}>
              I (don't) know my type!
            </Button>
          </Box>
          </Box>
        </Box>
      </Modal>

     

      {/* Display current stage statements */}
      {stages[currentStage].map((s, index) => (
        <Box key={`${s.trait}-${index}`} my={3}>
          <Typography variant="subtitle1" gutterBottom>
            {s.text}
          </Typography>
          <Grid container spacing={3} alignItems="center">
            <Grid item>
              <Typography variant="subtitle2" gutterBottom>
                <Close/>
              </Typography>
            </Grid>
            <Grid item xs>
              {/* The index mapping here depends on how you originally mapped sliders. 
                  If you notice any indexing issues, adjust accordingly. */}
              <Slider
               value={responses[s.trait][s.trait === 'openness' ? index : currentStage - 1]}
               onChange={handleSliderChange(s.trait, s.trait === 'openness' ? index : currentStage - 1)}
                max={1}
                step={0.01}
              />
            </Grid>
            <Grid item>
              <Typography variant="subtitle2" gutterBottom>
                <Check/>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      ))}
      
      <Box display={'flex'} justifyContent={'center'} my={3}>
        {/* Display matched MBTI type or anything else as needed */}
        <Typography variant='h6' fontWeight='bold' gutterBottom>
          {selectedStatement && '"'}{selectedStatement}{selectedStatement && '"'}
        </Typography>
      </Box>

      {/* Progress Bar */}
      <Box my={3}>
        <LinearProgress color="info" variant="determinate" value={progress} />
      </Box>

      {/* Navigation Buttons */}
      <Box display="flex" justifyContent="space-between" mt={3}>
        <Button onClick={handleBack} disabled={currentStage === 0}>
          Back
        </Button>
        {matchedMBTIType && matchedMBTIType !== 'XXXX' && type && (
          <Tooltip title={type.mode}>
            <Box
              bgcolor={type.bgColor}
              color="white"
              p={isMobile ? 1 : 2}
              textAlign="center"
              borderRadius={2}
              style={{ textDecoration: 'none' }}
              sx={{ fontSize: isMobile ? '0.75rem' : '1rem' }}
            >
              <Typography variant="subtitle1">{type.type}</Typography>
            </Box>
          </Tooltip>
        )}
        {currentStage === stages.length - 1 ? (
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Submit
          </Button>
        ) : (
          <Button onClick={handleNext} variant="contained" color="primary">
            Next
          </Button>
        )}
      </Box>
    </Paper>
  );
};

export default BigFiveQuestionnaire;
