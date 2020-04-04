import * as React from 'react';
import { ReactUnity, Tooltip } from 'react-unity-renderer';

class App extends React.Component<{}, {}> {
  render() {
    const tooltipContent = <view layout={{ Padding: 10 }}
      style={{ backgroundColor: new ColorNative(0.4, 0.4, 0.4), fontColor: 'white' }}>
      Cool tooltip
    </view>;

    return (
      <view layout={{ Height: '100%', AlignItems: 'Center', JustifyContent: 'Center' }}>
        <Tooltip tooltipContent={tooltipContent} position='bottom' offset={20}>
          Hover to see cool tooltip.
        </Tooltip>
      </view>
    );
  }
}
ReactUnity.render(<App />, RootContainer, null);
