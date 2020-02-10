function fromEnvironment(env: NodeJS.ProcessEnv) {
  return {
    api: {
      baseUrl: env.REACT_APP_API_BASE_URL || "http://localhost:4444",
    },
    logger: {
      type: env.REACT_APP_LOGGER_TYPE || "console",
    },
  }
}

export const config = fromEnvironment(process.env)
