export const truncateText = (text, limit) => {
  return text.length > limit ? text.substring(0, limit) + "..." : text;
};

export const ROOT_URL = import.meta.env.VITE_API_ROOT;

export const calendly_URL =
  "https://calendly.com/stackwisr/request-a-call-with-us";
