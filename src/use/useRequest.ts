import axios from "axios";
import MockAdapter from "axios-mock-adapter";

export const mock = new MockAdapter(axios);

export function useRequest() {
  const axiosInstance = axios.create({
    baseURL: ".",
  });

  const get = async (url: string) => {
    const response = await axiosInstance.get(url);
    return response.data;
  };

  return {
    axios: axiosInstance,
    get,
  };
}
