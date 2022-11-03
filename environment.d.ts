export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      LINKEDIN_API_URL: string;
    }
  }
}
