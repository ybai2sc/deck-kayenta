import { SETTINGS } from '@spinnaker/core';

export interface ICanarySettings {
  liveCalls: boolean;
  reduxLogger: boolean;
  metricsAccountName: string;
  storageAccountName: string;
  defaultJudge: string;
  metricStore: string;
  defaultServiceSettings: {[key: string]: any};
  reportsEnabled: boolean;
  stagesEnabled: boolean;
  graphImplementation: string;
  featureDisabled: boolean;
}

export const CanarySettings = SETTINGS.canary || { featureDisabled: true };
