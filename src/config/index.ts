export type ConfigType = {
    env: EnvEnums;
    apiHost: string;
};

export enum EnvEnums {
    development = 'development',
    test = 'test',
    production = 'production',
}

const devConfig: ConfigType = {
    env: EnvEnums.development,
    apiHost: 'http://localhost:5005',
};
const testConfig: ConfigType = {
    env: EnvEnums.test,
    apiHost: 'http://localhost:5005',
};
const liveConfig: ConfigType = {
    env: EnvEnums.production,
    apiHost: 'http://localhost:5005',
};

const envCong = {
    development: devConfig,
    test: testConfig,
    production: liveConfig,
};

export const appConfig: ConfigType = envCong[process.env.NODE_ENV];
