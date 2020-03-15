const envCache: NodeJS.ProcessEnv = process.env;

function accessEnv(key: string, defaultValue?: string): string {
  const value: string | undefined = envCache[key];

  if (value) {
    return value.trim();
  }

  if (defaultValue) {
    return defaultValue;
  }

  throw new Error(`${key} not found in process.env`);
}

export default accessEnv;
