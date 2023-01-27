import { mock, useRequest } from "@/use/useRequest";
import { mockSurvey } from "@/services/mock/surveys";
import type { ISurvey } from "@/types/survey";
import { TypeSurvey } from "@/types/survey";

export const getSurveys = async ({
  type = TypeSurvey.popular,
}: {
  type?: TypeSurvey;
}): Promise<ISurvey[]> => {
  const { get } = useRequest();

  try {
    mock.onGet(`/surveys?type=${type}`).reply(202, mockSurvey[type]);
    // mock.onGet(`/surveys?type=${type}`).reply(404, { error: "Not found" });

    return await get(`/surveys?type=${type}`);
  } catch {
    return [];
  }
};
