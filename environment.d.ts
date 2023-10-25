declare namespace NodeJS {
    export interface ProcessEnv {
      readonly ENV_VARIABLE: string
      readonly NEXT_PUBLIC_ENV_VARIABLE: string
    }
  }