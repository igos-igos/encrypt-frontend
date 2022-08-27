import { HttpClient, HttpRequest, HttpResponse } from '@/data/transports';
import axios, { AxiosError, AxiosResponse } from 'axios';

export class AxiosHttpClient implements HttpClient {
  instance = axios.create({ withCredentials: true, baseURL: import.meta.env.VITE_API_URL });

  async request(data: HttpRequest): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse;
    try {
      axiosResponse = await this.instance.request({
        url: data.url,
        method: data.method,
        data: data.body,
        headers: data.headers,
      });
    } catch (error) {
      axiosResponse = (error as AxiosError).response!;
    }
    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data,
    };
  }
}
