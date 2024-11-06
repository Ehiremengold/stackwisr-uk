export const truncateText = (text, limit) => {
  return text.length > limit ? text.substring(0, limit) + "..." : text;
};

const env = "LOCAL"; // PROD

export const LOCAL_ROOT_URL = import.meta.env.VITE_LOCAL_ROOT;

export const ROOT_URL =
  env === "LOCAL"
    ? import.meta.env.VITE_LOCAL_ROOT
    : import.meta.env.VITE_API_ROOT;

export const calendly_URL =
  "https://calendly.com/stackwisr/request-a-call-with-us";
