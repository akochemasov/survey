import type { ISurvey } from "@/types/survey";

export const mockSurvey1: ISurvey = {
  id: "0",
  status: "active",
  dateEndTime: "30.01.2003",
  title: "Лучший ресторан фастфуда в городе",
  author: "Ivan",
  totalVoices: 10,
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
};

export const mockSurvey2: ISurvey = {
  id: "1",
  status: "active",
  dateEndTime: "01.01.2003",
  title: "Лучший кофе",
  author: "Anonymous",
  totalVoices: 60,
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
      selected: true,
    },
  ],
};

export const mockSurveyItems: ISurvey[] = [mockSurvey1, mockSurvey2];
