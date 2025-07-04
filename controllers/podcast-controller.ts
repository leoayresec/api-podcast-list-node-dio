import { IncomingMessage, ServerResponse } from 'http';
import { statusInfo } from '../services/podcast-status-service';
import { ContentType } from '../utils/content-type';
import { PodcastResponseModel } from '../models/podcast-response-model';
import { serviceListEpisodes } from '../services/podcast-list-service';
import { serviceFilterEpisodes } from '../services/podcast-list-episodes-service';
import { sendReponseHttp } from '../services/http/response-http-service';
import { StatusCode } from '../utils/status-code';

const defaultContent = { "Content-Type": ContentType.JSON };

export const getStatusInfo = async (
  req: IncomingMessage,
  res: ServerResponse
) =>{
  const status = await statusInfo();

  
  res.writeHead(StatusCode.OK, defaultContent);
  res.write(JSON.stringify(status));
  res.end();

}

export const getListEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const content: PodcastResponseModel = await serviceListEpisodes();
  await sendReponseHttp(res, content);
};

export const getFilterEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const content: PodcastResponseModel = await serviceFilterEpisodes(req.url);
  await sendReponseHttp(res, content);
};