import * as React from 'react';
import { ReactUnity } from 'react-unity-renderer';

export function App() {
  return <view layout={{ Height: '100%', AlignItems: 'Center', JustifyContent: 'Center' }}>
    <input placeholder="Write something!" style={{ backgroundColor: 'aqua' }} />
  </view>;
}

export default () => ReactUnity.render(<App />, RootContainer, null);
