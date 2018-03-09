import React, { Component } from "react";
import PropTypes from "prop-types";

import HorizontalLayout from "./HorizontalLayout";
import VerticalLayout from "./VerticalLayout";

import FormTextInput from "./FormTextInput";
import Modal from "./Modal";
import Button from "./Button";
import FormNumberInput from "./FormNumberInput";
import FormLabel from "./FormLabel";

import layoutElement from "./layoutElement";

import "./FormColorInput.scss";

/**
 * Converts an HSL color value to RGB. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes hue is in the set of [0, 360], saturation, lightness and alpha are contained in the set [0, 100] and
 * returns red, green and blue in the set [0, 255].
 *
 * @param   {{ hue: number, saturation: number, lightness: number, alpha?: number }} color The HSL color value.
 * @return  {{ red: number, green: number, blue: number, alpha?: number }} The RGBA representation
 */
function hslaToRgba(color) {
  if (!color) return { red: 0, green: 0, blue: 0 };
  const { hue, saturation, lightness, alpha } = color;
  const h = hue / 360;
  const s = saturation / 100;
  const l = lightness / 100;
  var r, g, b;

  if (s == 0) {
    r = g = b = l; // achromatic
  } else {
    var hue2rgb = function hue2rgb(p, q, t) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return {
    red: Math.round(r * 255),
    green: Math.round(g * 255),
    blue: Math.round(b * 255),
    alpha
  };
}

/**
 * Converts an RGB color value to HSL. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * returns hue is in the set of [0, 360], saturation, lightness and alpha are contained in the set [0, 100] and
 * Assumes red, green and blue in the set [0, 255].
 *
 * @param {{ red: number, green: number, blue: number, alpha?: number }} color The RGBA representation
 * @return {{ hue: number, saturation: number, lightness: number, alpha?: number }} The HSL color representation.
 */
function rgbaToHsla(color) {
  if (!color) return rgbaToHsla({ red: 0, green: 0, blue: 0, alpha: 0 });
  const { red, green, blue, alpha } = color;
  const r = red / 255;
  const g = green / 255;
  const b = blue / 255;
  var max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  var h,
    s,
    l = (max + min) / 2;

  if (max == min) {
    h = s = 0; // achromatic
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return {
    hue: Math.floor(h * 360),
    saturation: s * 100,
    lightness: l * 100,
    alpha
  };
}

class SaturationAndLightnessMap extends Component {
  state = {
    mouseDown: false
  };

  onCanvasRef = ref => {
    if (ref) {
      this.__ctx = ref.getContext("2d");
      this._refreshCanvas();
    }
  };

  componentDidUpdate() {
    this._refreshCanvas();
  }

  componentWillUpdate() {
    this._refreshCanvas();
  }

  _refreshCanvas() {
    /** @type {CanvasRenderingContext2D} */
    const ctx = this.__ctx;
    if (!ctx) return;
    const { saturation, lightness, hue } = this.props;
    for (let x = 0; x < 100; ++x) {
      for (let y = 0; y < 100; ++y) {
        ctx.fillStyle = `hsl(${hue}, ${x}%, ${100 - y}%)`;
        ctx.fillRect(x, y, 1, 1);
      }
    }
    ctx.fillStyle = "transparent";
    ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
    ctx.beginPath();
    ctx.arc(saturation - 2, 100 - lightness - 2, 3, 0, Math.PI * 2);
    ctx.stroke();
    ctx.strokeStyle = "rgba(0, 0, 0, 0.5)";
    ctx.beginPath();
    ctx.arc(saturation - 2, 100 - lightness - 2, 2, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(saturation - 2, 100 - lightness - 2, 4, 0, Math.PI * 2);
    ctx.stroke();
  }

  onCanvasClick = event => {
    var totalOffsetX = 0;
    var totalOffsetY = 0;
    var canvasX = 0;
    var canvasY = 0;
    var currentElement = event.target;
    const { onChange } = this.props;
    do {
      totalOffsetX += currentElement.offsetLeft - currentElement.scrollLeft;
      totalOffsetY += currentElement.offsetTop - currentElement.scrollTop;
    } while ((currentElement = currentElement.offsetParent));

    canvasX = event.pageX - totalOffsetX;
    canvasY = event.pageY - totalOffsetY;
    onChange(Math.floor(canvasX / 2), 100 - Math.floor(canvasY / 2));
  };

  onMouseDown = event => {
    console.log(event.button);
    if (event.button === 0) {
      this.setState({ mouseDown: true });
    }
  };
  onMouseUp = event => {
    if (event.button === 0) {
      this.setState({ mouseDown: false });
    }
  };

  onMouseMove = event => {
    if (this.state.mouseDown) {
      this.onCanvasClick(event);
    }
  };

  onMouseLeave = event => {
    this.setState({ mouseDown: false });
  };

  render() {
    return (
      <canvas
        key="canvas"
        width="100"
        height="100"
        ref={this.onCanvasRef}
        onClick={this.onCanvasClick}
        onMouseDown={this.onMouseDown}
        onMouseUp={this.onMouseUp}
        onMouseMove={this.onMouseMove}
        onMouseLeave={this.onMouseLeave}
        className="sn-sl-map"
      />
    );
  }
}

class HueMap extends Component {
  state = {
    mouseDown: false
  };

  onHueChange = event => {
    var totalOffsetY = 0;
    var canvasY = 0;
    var currentElement = event.target;
    const { onChange } = this.props;
    do {
      totalOffsetY += currentElement.offsetTop - currentElement.scrollTop;
    } while ((currentElement = currentElement.offsetParent));

    canvasY = event.pageY - totalOffsetY;
    onChange(Math.floor(canvasY * 360 / 200));
  };

  onMouseDown = event => {
    if (event.button === 0) {
      this.setState({ mouseDown: true });
    }
  };
  onMouseUp = event => {
    if (event.button === 0) {
      this.setState({ mouseDown: false });
    }
  };

  onMouseMove = event => {
    if (this.state.mouseDown) {
      this.onHueChange(event);
    }
  };

  onMouseLeave = event => {
    this.setState({ mouseDown: false });
  };

  render() {
    const { hue } = this.props;
    return (
      <div
        className="sn-h-map"
        onClick={this.onHueChange}
        onMouseDown={this.onMouseDown}
        onMouseUp={this.onMouseUp}
        onMouseMove={this.onMouseMove}
        onMouseLeave={this.onMouseLeave}
      >
        <div className="sn-h-map-mark" style={{ "--h": hue }} />
      </div>
    );
  }
}

class AlphaMap extends Component {
  state = {
    mouseDown: false
  };

  onAlphaChange = event => {
    var totalOffsetY = 0;
    var canvasY = 0;
    var currentElement = event.target;
    const { onChange } = this.props;
    do {
      totalOffsetY += currentElement.offsetTop - currentElement.scrollTop;
    } while ((currentElement = currentElement.offsetParent));

    canvasY = event.pageY - totalOffsetY;
    onChange(Math.floor(canvasY / 2));
  };

  onMouseDown = event => {
    console.log(event.button);
    if (event.button === 0) {
      this.setState({ mouseDown: true });
    }
  };
  onMouseUp = event => {
    if (event.button === 0) {
      this.setState({ mouseDown: false });
    }
  };

  onMouseMove = event => {
    if (this.state.mouseDown) {
      this.onAlphaChange(event);
    }
  };

  onMouseLeave = event => {
    this.setState({ mouseDown: false });
  };

  render() {
    const { r, g, b, a } = this.props;
    return (
      <div className="sn-a-map-wrap">
        <div
          className="sn-a-map"
          onClick={this.onAlphaChange}
          onMouseDown={this.onMouseDown}
          onMouseUp={this.onMouseUp}
          onMouseMove={this.onMouseMove}
          onMouseLeave={this.onMouseLeave}
          style={{
            background: `linear-gradient(rgba(${r},${g},${b},0),rgba(${r},${g},${b},1))`
          }}
        >
          <div
            className="sn-a-map-mark"
            style={{
              "--a": a
            }}
          />
        </div>
      </div>
    );
  }
}

class RgbaColorForm extends Component {
  onRedChange = event => {
    const { onChange, g, b, a } = this.props;
    const r = Math.min(255, Math.max(0, Number(event.target.value)));
    const { hue: h, lightness: l, saturation: s } = rgbaToHsla({
      red: r,
      green: g,
      blue: b
    });
    onChange(h, l, s, r, g, b, a);
  };

  onBlueChange = event => {
    const { onChange, r, g, a } = this.props;
    const b = Math.min(255, Math.max(0, Number(event.target.value)));
    const { hue: h, lightness: l, saturation: s } = rgbaToHsla({
      red: r,
      green: g,
      blue: b
    });
    onChange(h, l, s, r, g, b, a);
  };

  onGreenChange = event => {
    const { onChange, r, b, a } = this.props;
    const g = Math.min(255, Math.max(0, Number(event.target.value)));
    const { hue: h, lightness: l, saturation: s } = rgbaToHsla({
      red: r,
      green: g,
      blue: b
    });
    onChange(h, l, s, r, g, b, a);
  };

  onAlphaChange = event => {
    const { onChange, h, l, s, r, g, b } = this.props;
    onChange(
      h,
      l,
      s,
      r,
      g,
      b,
      Math.min(100, Math.max(0, Number(event.target.value)))
    );
  };

  render() {
    const {
      showAlpha,
      redLabel,
      greenLabel,
      blueLabel,
      alphaLabel,
      r,
      g,
      b,
      a
    } = this.props;
    return (
      <HorizontalLayout
        grow
        align="center"
        justify="space-between"
        margin="10px"
      >
        <VerticalLayout>
          <FormLabel>{redLabel}</FormLabel>
          <FormNumberInput
            min={0}
            max={255}
            key="r"
            value={r}
            onChange={this.onRedChange}
          />
        </VerticalLayout>
        <VerticalLayout>
          <FormLabel>{greenLabel}</FormLabel>
          <FormNumberInput
            min={0}
            max={255}
            key="g"
            value={g}
            onChange={this.onGreenChange}
          />
        </VerticalLayout>
        <VerticalLayout>
          <FormLabel>{blueLabel}</FormLabel>
          <FormNumberInput
            min={0}
            max={255}
            key="b"
            value={b}
            onChange={this.onBlueChange}
          />
        </VerticalLayout>
        {showAlpha ? (
          <VerticalLayout>
            <FormLabel>{alphaLabel}</FormLabel>
            <FormNumberInput
              min={0}
              max={255}
              step={0.1}
              key="a"
              value={a}
              onChange={this.onAlphaChange}
            />
          </VerticalLayout>
        ) : null}
      </HorizontalLayout>
    );
  }
}

class HslColorForm extends Component {
  render() {
    return (
      <HorizontalLayout grow justify="space-between" margin="10px">
        HSL
      </HorizontalLayout>
    );
  }
}

class ColorForm extends Component {
  state = {
    mode: "rgba"
  };
  render() {
    const { mode } = this.state;
    return (
      <HorizontalLayout grow>
        {mode === "rgba" ? (
          <RgbaColorForm {...this.props} />
        ) : (
          <HslColorForm {...this.props} />
        )}
      </HorizontalLayout>
    );
  }
}

class ColorPreview extends Component {
  render() {
    const { color } = this.props;
    const a = typeof color.alpha === "number" ? color.alpha : 100;
    const bg = `rgba(${color.red}, ${color.green}, ${color.blue}, ${a / 100})`;
    return <div className="sn-color-preview" style={{ background: bg }} />;
  }
}

class FormColorInput extends Component {
  static propTypes = {
    value: PropTypes.oneOfType([
      PropTypes.shape({
        red: PropTypes.number.isRequired,
        green: PropTypes.number.isRequired,
        blue: PropTypes.number.isRequired,
        alpha: PropTypes.number
      }),
      PropTypes.shape({
        hue: PropTypes.number.isRequired,
        saturation: PropTypes.number.isRequired,
        lightness: PropTypes.number.isRequired,
        alpha: PropTypes.number
      })
    ]),
    onChange: PropTypes.func,
    name: PropTypes.string,
    showAlpha: PropTypes.bool,
    disabled: PropTypes.bool,
    cancelLabel: PropTypes.node,
    acceptLabel: PropTypes.node,
    redLabel: PropTypes.node,
    greenLabel: PropTypes.node,
    blueLabel: PropTypes.node,
    hueLabel: PropTypes.node,
    saturationLabel: PropTypes.node,
    lightnessLabel: PropTypes.node,
    alphaLabel: PropTypes.node,
    previousLabel: PropTypes.node,
    currentLabel: PropTypes.node
  };

  static defaultProps = {
    value: {
      red: 0,
      green: 0,
      blue: 0,
      alpha: 100
    },
    disabled: false,
    cancelLabel: "Cancel",
    acceptLabel: "Ok",
    redLabel: "R",
    greenLabel: "G",
    blueLabel: "B",
    hueLabel: "H",
    saturationLabel: "S",
    lightnessLabel: "L",
    alphaLabel: "A",
    currentLabel: "Current",
    previousLabel: "Previous"
  };

  constructor(props) {
    super(props);
    const value = props.value || props.defaultValue;
    const state = this.getNewColorState(value);
    state.modalOpen = false;
    this.state = state;
  }

  componentWillReceiveProps(nextProps) {
    if (typeof nextProps.value !== "undefined") {
      this.setState(this.getNewColorState(nextProps.value));
    }
  }

  getNewColorState(color) {
    let rgba, hsla;
    if (this.colorIsRgba(color)) {
      rgba = color;
      hsla = rgbaToHsla(color);
    } else {
      hsla = color;
      rgba = hslaToRgba(color);
    }
    return {
      rgba,
      hsla,
      r: rgba.red,
      g: rgba.green,
      b: rgba.blue,
      a: rgba.alpha,
      h: hsla.hue,
      s: hsla.saturation,
      l: hsla.lightness
    };
  }

  colorIsRgba(color) {
    if (!color) return false;
    const r = typeof color.red === "number";
    const g = typeof color.green === "number";
    const b = typeof color.blue === "number";
    return r && g && b;
  }

  toHex(n) {
    const result = n.toString(16);
    if (result.length < 2) {
      return `0${result}`;
    }
    return result;
  }

  colorToString(color) {
    if (!color) return "#000000";
    if (this.colorIsRgba(color)) {
      if (typeof color.alpha === "number" && color.alpha < 100) {
        return `rgba(${color.red}, ${color.green}, ${
          color.blue
        }, ${color.alpha / 100})`;
      }
      return `#${this.toHex(color.red)}${this.toHex(color.green)}${this.toHex(
        color.blue
      )}`;
    }
    if (typeof color.alpha === "number") {
      return `hsla(${color.hue}, ${color.saturation}, ${color.lightness}, ${
        color.alpha
      })`;
    }
    return `hsl(${color.hue}, ${color.saturation}, ${color.lightness})`;
  }

  toggleModal = () => {
    this.setState({ modalOpen: !this.state.modalOpen });
  };

  onCancel = () => {
    const { rgba, hsla } = this.state;
    this.setState({
      r: rgba.red,
      g: rgba.green,
      b: rgba.blue,
      a: rgba.alpha,
      h: hsla.hue,
      s: hsla.saturation,
      l: hsla.lightness,
      modalOpen: false
    });
  };
  onAccept = () => {
    const { onChange, value } = this.props;
    const { r: red, g: green, b: blue, a: alpha } = this.state;
    const color = {
      red,
      green,
      blue,
      alpha
    };
    if (typeof onChange === "function") {
      if (this.colorIsRgba(value)) {
        return onChange(color);
      }
      return onChange(rgbaToHsla(color));
    }
    const newState = this.getNewColorState(color);
    newState.modalOpen = false;
    this.setState(newState);
  };

  onSaturationAndLightnessMapChange = (saturation, lightness) => {
    const hsla = {
      hue: this.state.h,
      saturation: Math.max(0, Math.min(100, saturation)),
      lightness: Math.max(0, Math.min(100, lightness)),
      alpha: this.state.a
    };
    const rgba = hslaToRgba(hsla);
    this.updateColorModalState(hsla, rgba);
  };

  onHueChange = hue => {
    const hsla = {
      hue,
      saturation: this.state.s,
      lightness: this.state.l,
      alpha: this.state.a
    };
    const rgba = hslaToRgba(hsla);
    this.updateColorModalState(hsla, rgba);
  };

  onAlphaChange = alpha => {
    const hsla = {
      hue: this.state.h,
      saturation: this.state.s,
      lightness: this.state.l,
      alpha: alpha
    };
    const rgba = hslaToRgba(hsla);
    this.updateColorModalState(hsla, rgba);
  };

  updateColorModalState(hsla, rgba) {
    this.setState({
      r: rgba.red,
      g: rgba.green,
      b: rgba.blue,
      a: rgba.alpha,
      h: hsla.hue,
      s: hsla.saturation,
      l: hsla.lightness
    });
  }

  onFormChange = (h, l, s, r, g, b, a) => {
    console.log(r, g, b, a);
    this.setState({
      h,
      l,
      s,
      r,
      g,
      b,
      a
    });
  };

  render() {
    const { rgba, hsla, modalOpen, s, l, h, r, g, b, a } = this.state;
    const {
      style,
      name,
      disabled,
      cancelLabel,
      acceptLabel,
      showAlpha,
      currentLabel,
      previousLabel
    } = this.props;
    const colorString = this.colorToString(rgba);
    return (
      <div style={style} className="sn-color-input">
        <input type="hidden" name={name} value={colorString} />
        <button
          type="button"
          className="preview"
          onClick={this.toggleModal}
          disabled={disabled}
        >
          <div
            style={{ background: colorString, width: "100%", height: "100%" }}
          />
        </button>
        <FormTextInput disabled value={colorString} grow />
        <Modal open={modalOpen} vertical>
          <HorizontalLayout grow justify="space-between" margin="20px">
            <SaturationAndLightnessMap
              saturation={s}
              lightness={l}
              hue={h}
              onChange={this.onSaturationAndLightnessMapChange}
            />
            <HorizontalLayout>
              <HueMap hue={h} onChange={this.onHueChange} />
              {showAlpha ? (
                <AlphaMap
                  r={r}
                  g={g}
                  b={b}
                  a={a}
                  onChange={this.onAlphaChange}
                />
              ) : null}
              <VerticalLayout
                justify="center"
                selfAlign="start"
                align="center"
                margin={{ left: "15px" }}
              >
                <FormLabel>{currentLabel}</FormLabel>
                <VerticalLayout className="sn-color-preview-wrapper">
                  <ColorPreview
                    color={{ red: r, green: g, blue: b, alpha: a }}
                  />
                  <ColorPreview color={rgba} />
                </VerticalLayout>
                <FormLabel>{previousLabel}</FormLabel>
              </VerticalLayout>
            </HorizontalLayout>
          </HorizontalLayout>
          <ColorForm
            {...this.props}
            r={r}
            g={g}
            b={b}
            a={a}
            h={h}
            s={s}
            l={l}
            onChange={this.onFormChange}
          />
          <HorizontalLayout justify="end" grow>
            <Button onClick={this.onCancel}>{cancelLabel}</Button>
            <Button onClick={this.onAccept}>{acceptLabel}</Button>
          </HorizontalLayout>
        </Modal>
      </div>
    );
  }
}

export default layoutElement(FormColorInput);
