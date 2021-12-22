import url from "url";

export const urlParse = (urls) => {
  return url.parse(urls);
};

export const getProtocol = (url) => {
  return urlParse(url).protocol;
};

export const getHost = (url) => {
  return urlParse(url).host;
};

export const getHostName = (url) => {
  return urlParse(url).hostname;
};

export const getPort = (url) => {
  return urlParse(url).port;
};

export const getQuery = (url) => {
  return urlParse(url).query;
};

export const getPath = (url) => {
  return urlParse(url).path;
};

export const getPathName = (url) => {
  return urlParse(url).pathname;
};
