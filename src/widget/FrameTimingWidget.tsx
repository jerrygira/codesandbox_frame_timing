import React from 'react';

import { ReactWidget } from '@jupyterlab/apputils';

import FrameTimingComponent from './FrameTimingComponent';

export class FrameTimingWidget extends React.Component {
  render(): JSX.Element {
    return (
      <div id="webds_sandbox_widget_content" className="jp-webds-widget">
        <div className="jp-webds-widget-outer-pseudo">
          <div className="jp-webds-widget-inner-pseudo">
            <FrameTimingComponent />
          </div>
        </div>
      </div>
    );
  }
}

export default FrameTimingWidget;
