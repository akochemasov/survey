import type { ISurvey } from "@/types/survey";

export const mockSurveyPopular: ISurvey[] = [
  {
    id: "1",
    status: "active",
    dateEndTime: "30.01.2003",
    title: "Лучший ресторан фастфуда в городе",
    author: "Ivan",
    answers: [
      {
        id: "0",
        text: "McDonald's",
        voices: 5,
      },
      {
        id: "1",
        text: "Burger King",
        voices: 2,
      },
      {
        id: "2",
        text: "KFC",
        voices: 3,
      },
    ],
  },
  {
    id: "2",
    status: "active",
    dateEndTime: "01.01.2003",
    title: "Лучший кофе",
    author: "Anonymous",
    answers: [
      {
        id: "0",
        text: "Робуста",
        voices: 10,
      },
      {
        id: "2",
        text: "Арабика",
        voices: 50,
      },
    ],
  },
];

export const mockSurveyLast: ISurvey[] = [
  {
    id: "1",
    status: "active",
    dateEndTime: "30.01.2003",
    title: "Сколько вы спите?",
    author: "Sonya",
    answers: [
      {
        id: "0",
        text: "меньше 8 часов",
        voices: 3,
      },
      {
        id: "1",
        text: "больше 8 часов",
        voices: 22,
      },
    ],
  },
];

export const mockSurveyMy: ISurvey[] = [];

export const mockSurvey = {
  popular: mockSurveyPopular,
  last: mockSurveyLast,
  my: mockSurveyMy,
};
