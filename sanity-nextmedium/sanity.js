import {
  createImageUrlBuilder,
  createCurrentUserHook,
  createClient,
} from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "wo1mgf3s",
  apiVersion: "2021-03-25",
  useCdn: process.env.NODE_ENV === "production",
};

export const sanityClient = createClient(config);

//export const urlFor = (source) => createImageUrlBuilder(config).image(source);
export const ueCurrentUser = createCurrentUserHook(config);

const builder = imageUrlBuilder(config);
export const urlFor = (source) => builder.image(source);

// import sanityClient from "@sanity/client";
// import imageUrlBuilder from "@sanity/image-url";

// export const client = sanityClient({
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//   apiVersion: "2021-03-25",
//   useCdn: process.env.NODE_ENV === "production",
//   token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
// });

// const builder = imageUrlBuilder(client);
// export const urlFor = (source) => builder.image(source);
