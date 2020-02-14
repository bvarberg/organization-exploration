function fromEnvironment(env: NodeJS.ProcessEnv) {
  return {
    logger: {
      type: env.REACT_APP_LOGGER_TYPE || "console",
    },
    teamService: {
      baseURL: env.REACT_APP_TEAM_SERVICE_BASE_URL || "http://localhost:4444",
    },
  }
}

export const config = fromEnvironment(process.env)
