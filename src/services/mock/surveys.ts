import type { ISurvey } from "@/types/survey";

export const mockSurvey: ISurvey[] = [
  {
    id: "1",
    status: "active",
    dateEndTime: "30.01.2003",
    title: "Лучший ресторан фастфуда в городе",
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
