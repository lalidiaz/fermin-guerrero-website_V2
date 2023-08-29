export const contentful = require("contentful");

export const client = contentful.createClient({
  space: process.env.CMS_ID,
  accessToken: process.env.CMS_ACCESS_TOKEN,
});
