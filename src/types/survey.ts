export type IStatus = "active" | "inactive";

export enum TypeSurvey {
  "popular" = "popular",
  "last" = "last",
  "my" = "my",
}

export interface IAnswer {
  id: string;
  text: string;
  voices: number;
}

export interface ISurvey {
  id: string;
  title: string;
  author: string;
  status: IStatus;
  dateEndTime: string;
  answers: IAnswer[];
}
