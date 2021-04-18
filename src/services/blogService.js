import appConfig from "../config/appConfig";
import { promiseReturn } from "./serviceUtils";

const URI = appConfig.BASE_URI;

export const getPosts = () => {
  const url = `${URI}${appConfig.POSTS}`;
  const urlData = {
    url,
  };
  return new Promise((resolve, reject) =>
    promiseReturn(urlData, resolve, reject)
  );
};

export const getPost = (postId) => {
  const url = `${URI}${appConfig.POSTS}/${postId}`;
  const urlData = {
    url,
  };
  return new Promise((resolve, reject) =>
    promiseReturn(urlData, resolve, reject)
  );
};

export const getCommentsByPostId = (postId) => {
  const url = `${URI}${appConfig.COMMENTS}?postId=${postId}`;
  const urlData = {
    url,
  };
  return new Promise((resolve, reject) =>
    promiseReturn(urlData, resolve, reject)
  );
};
