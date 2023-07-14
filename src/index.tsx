//import { StrictMode } from "react";
import * as ReactDOMClient from 'react-dom/client';

import FrameTimingWidget from './widget/FrameTimingWidget';

const rootElement = document.getElementById('root');
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  //<StrictMode>
  <FrameTimingWidget />
  //</StrictMode>
);
