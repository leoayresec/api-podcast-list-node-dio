import { ServerResponse } from 'http'
import { PodcastResponseModel } from '../../models/podcast-response-model'
import { ContentType } from '../../utils/content-type';
const defaultContent = { "Content-Type": ContentType.JSON };

export const sendReponseHttp = async(res: ServerResponse, content: PodcastResponseModel) =>{
  res.writeHead(content.statusCode, defaultContent);
  res.write(JSON.stringify(content.body));
  res.end();
}