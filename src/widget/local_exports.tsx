import React from 'react';

import { TouchcommADCReport } from '../utils';

export { requestAPI, webdsService } from '../local_exports';

export const ADCDataContext = React.createContext([] as TouchcommADCReport[]);
