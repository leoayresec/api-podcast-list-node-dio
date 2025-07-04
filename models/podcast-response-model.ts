import { PodcastModel } from "./podcast-model";

export interface PodcastResponseModel {
  statusCode: number;
  body: PodcastModel[];
}