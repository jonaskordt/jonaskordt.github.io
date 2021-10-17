export enum ControlMode {
  MOUSE = 0,
  TOUCH = 1,
}

export interface IControl {
  readonly action: string;
}

export interface IUIControl<T> extends IControl {
  callback: (value: T) => void;
  readonly initialValue: T;
}

export type IUIToggleControl = IUIControl<boolean>;

export interface IUISliderControl extends IUIControl<number> {
  min?: number;
  max?: number;
  step?: number;
  logarithmic?: boolean;
}

export interface IKeyControl extends IControl {
  readonly keys: string[];
  callback: () => void;
  touchEnabled: boolean;
}

export interface IMouseControl extends IControl {
  readonly controls: string[];
}

export type ITouchControl = IMouseControl;

export type Controls = [
  IUIToggleControl[],
  IUISliderControl[],
  [IMouseControl[], ITouchControl[]],
  IKeyControl[],
];

export const noControls: Controls = [[], [], [[], []], []];
