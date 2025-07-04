import { PodcastResponseModel } from "../models/podcast-response-model";
import { repositoryPodcast } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/status-code";

export const serviceFilterEpisodes = async (
  podcastName: string | undefined
): Promise<PodcastResponseModel> => {
  let responsePodcastModel: PodcastResponseModel = {
    statusCode: 0,
    body: [],
  };

  const queryString = podcastName?.split("?p=")[1] || "";
  const data = await repositoryPodcast(queryString);

  responsePodcastModel = {
    statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NoContent,
    body: data,
  };

  return responsePodcastModel;
};