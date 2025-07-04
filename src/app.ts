import * as http from "http";
import { Routes } from "../routes/routes";
import { HttpMethod } from "../utils/http-methods";
import { getFilterEpisodes, getListEpisodes, getStatusInfo } from "../controllers/podcast-controller";

export const app = async (
  request: http.IncomingMessage,
  response: http.ServerResponse
) => {
  if (!request.url || !request.method) {
    response.statusCode = 400;
    response.end("Requisição inválida");
    return;
  }

  const baseUrl = request.url.split("?")[0];
  const routeKey = `${request.method}:${baseUrl}`;

  const routes: Record<string, () => Promise<void>> = {
    [`${HttpMethod.GET}:${Routes.STATUS}`]: () => getStatusInfo(request, response),
    [`${HttpMethod.GET}:${Routes.LIST}`]: () => getListEpisodes(request, response),
    [`${HttpMethod.GET}:${Routes.ESPISODE}`]: () => getFilterEpisodes(request, response),
  };

  if (routes[routeKey]) {
    console.log(`[INFO] ${request.method} ${request.url}`);
    await routes[routeKey]();
  } else {
    response.statusCode = 404;
    response.end("Rota não encontrada");
  }
};
