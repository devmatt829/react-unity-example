import * as React from 'react';
import { startAnimation, easing, PositionType, FlexDirection, YogaJustify, ReactUnity, YogaAlign, TextOverflowModes, Vector2Native } from 'react-unity-renderer';

class App extends React.Component<{}, { val: number, animateRadius: boolean }> {
  constructor(props) {
    super(props);
    this.state = { val: 0, animateRadius: true };

    startAnimation({
      duration: 1000,
      onTick: val => this.setState({ val }),
      easing: easing.easeInOutQuint,
      delay: 1500,
      loop: true,
      loopMode: 'ping-pong',
    });
  }

  toggleAnimateRadius = () => {
    this.setState(x => ({ animateRadius: !x.animateRadius }))
  };

  render() {
    const val = this.state.val;

    return <view layout={{ FlexDirection: FlexDirection.Row, AlignItems: YogaAlign.Stretch, Height: YogaValueNative.Percent(100), JustifyContent: YogaJustify.SpaceAround }}>
      <view layout={{
        Margin: 50,
        Width: 300, FlexDirection: FlexDirection.Column, AlignItems: YogaAlign.Center, JustifyContent: YogaJustify.SpaceAround
      }}
        style={{
          backgroundColor: ColorNative.white,
          ...(this.state.animateRadius && { borderRadius: val * 100 })
        }}>

        <button layout={{ Width: Math.round((val * 150 + 130) / 2) * 2 }}>
          Width
        </button>

        <button style={{ backgroundColor: [ColorNative.red, val, ColorNative.yellow] }}>
          Color
        </button>


        <button style={{ rotate: 180 * val }}>
          Rotate
        </button>

        <button style={{ boxShadow: new ShadowDefinitionNative(1, [14 * val, 8 * val], ColorNative.black, 4 + 6 * val), scale: 1.2 + val * 0.1, backgroundColor: 0.97 }}>
          Shadow
        </button>
      </view>

      <view layout={{
        Margin: 50,
        Width: 300, FlexDirection: FlexDirection.Column, AlignItems: YogaAlign.Center, JustifyContent: YogaJustify.SpaceAround,
        BorderWidth: val * 10 + 2,
      }}
        style={{
          backgroundColor: ColorNative.white,
          borderColor: [ColorNative.red, val, ColorNative.green],
        }}>

        <button layout={{ PositionType: PositionType.Absolute, Top: 50 + val * 150 }}>
          Position
        </button>

        <button style={{ fontSize: Math.round(val * 24 + 12), textOverflow: TextOverflowModes.Truncate }} layout={{ PaddingHorizontal: 30 }}>
          Font size
        </button>

        <button style={{ scale: val * 2 }}>
          Scale
        </button>

        <button style={{ translate: [Math.random() * 10, Math.random() * 10] }}>
          Noise
        </button>

      </view>
    </view>;
  }
}
ReactUnity.render(<App />, RootContainer, null);
