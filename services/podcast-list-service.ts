import { PodcastResponseModel } from "../models/podcast-response-model"
import { repositoryPodcast } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/status-code";

export const serviceListEpisodes = async ():Promise<PodcastResponseModel> =>{
let responsePodcastModel: PodcastResponseModel = {
statusCode : 0,
body:[]
}
const data = await repositoryPodcast();

 responsePodcastModel = {
    statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NoContent,
    body: data,
  };
return responsePodcastModel;
}