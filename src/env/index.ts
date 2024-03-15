const BASE_URL: string = import.meta.env.VITE_BASE_URL as string + "/api/";
const UPLOADS_URL: string = import.meta.env.VITE_BASE_URL as string + "/uploads/";

const APP_ENV = {
    BASE_URL: BASE_URL,
    UPLOADS_URL: UPLOADS_URL
};
export { APP_ENV };
