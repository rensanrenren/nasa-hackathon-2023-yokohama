import { MoonquakeType } from "./moon";

export type Option = {
  autoRotate: boolean;
  minYear: number;
  maxYear: number;
  typeFilter: Set<MoonquakeType>;
};

export class OptionConstants {
  static readonly autoRotate = true;
  static readonly minYear = 1965;
  static readonly maxYear = 1980;
  static readonly typeFilter = new Set<MoonquakeType>([0, 1, 2]);
}
