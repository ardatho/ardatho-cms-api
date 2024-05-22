import type { InputFilter, InputFilterType } from 'generated/graphql';

export type InputFilterValue = {
  key: string;
  type: InputFilterType;
  value: string;
};

export type InputFilterValues = {
  key: string;
  type: InputFilterType;
  values: string[];
};

export const isInputFilterValue = (filter: InputFilter): filter is InputFilterValue => {
  return (filter as InputFilterValue).value !== undefined;
};

export const isInputFilterValues = (filter: InputFilter): filter is InputFilterValues => {
  return (filter as InputFilterValues).values !== undefined;
};
