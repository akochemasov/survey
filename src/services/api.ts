import { mock, useRequest } from "@/use/useRequest";
import { mockSurvey } from "@/services/mock/surveys";
import type { ISurvey } from "@/types/survey";

export const getSurveys = async (): Promise<ISurvey[]> => {
  const { get } = useRequest();

  mock.onGet("/surveys").reply(200, mockSurvey);

  return await get("/surveys");
};
