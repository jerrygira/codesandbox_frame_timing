import React from 'react';
import Landing from './Landing';

export const FrameTimingComponent = (props: any): JSX.Element => {
  return <Landing />;
};

export type FrameTimingData = {
  id: number;
  gear: number;
  tab: string;
  isFreqQuiet: boolean;
  isFreqMulti: boolean;
  isQfUsed: boolean;
  isMfUsed: boolean;
  bandwidth: number;
  burstSize1: number;
  burstSize2: number;
  burstPerCluster: number;
  frequency: number;
  reportRateQF: number;
  reportRateMF: number;
  intDur: number;
  resetDur: number;
  iStretchDur: number;
  rStretchDur: number;
};

export default FrameTimingComponent;
