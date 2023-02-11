import { mock, useRequest } from "@/use/useRequest";
import type { ISurvey } from "@/types/survey";
import { TypeSurvey } from "@/types/survey";
import { mockSurvey } from "@/services/mock";
import { mockSurveyItems } from "@/services/mock/survey";

const { get } = useRequest();

export const getSurveys = async ({
  type = TypeSurvey.popular,
}: {
  type?: TypeSurvey;
}): Promise<ISurvey[]> => {
  try {
    mock.onGet(`/surveys?type=${type}`).reply(202, mockSurvey[type]);
    // mock.onGet(`/surveys?type=${type}`).reply(404, { error: "Not found" });

    return await get(`/surveys?type=${type}`);
  } catch {
    return [];
  }
};

export const getSurvey = async ({
  id,
}: {
  id: string;
}): Promise<ISurvey | null> => {
  try {
    //todo: если пользователь авторизован, то запросить как пользователь проголосовал за этот вариант.
    // И после объединить результаты. Или же это объединение будет реализовано на бэкенде

    if (id === "0" || id === "1") {
      mock.onGet(`/survey?id=${id}`).reply(202, mockSurveyItems[id]);
    } else {
      mock.onGet(`/survey?id=${id}`).reply(404, { error: "Not found" });
    }

    return await get(`/survey?id=${id}`);
  } catch {
    return null;
  }
};
