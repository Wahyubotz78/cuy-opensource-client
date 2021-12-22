import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: process.env.GCMS_URL,
  key: process.env.GCMS_KEY,
  version: process.env.GCMS_VERSION,
});

export const getTag = async (data) => {
  return api.tags.browse({ filter: `name: ${data}` });
};

export const getTagId = async (data) => {
  let tagId;
  data.map(({ id }) => {
    return (tagId = id);
  });
  return tagId;
};

export const getPostByTag = async (data) => {
  return api.posts.browse({ filter: `tag:${data}+visibility:'public'` });
};
