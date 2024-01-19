import { Manifest, RemoteConfig } from "@angular-architects/module-federation";

export type CustomRemoteConfig = RemoteConfig & {
    remoteName: string;
    exposedModule: string;
    displayName: string;
    routePath: string;
    ngModuleName: string;
    icon: string;
};

export type CustomManifest = Manifest<CustomRemoteConfig>;