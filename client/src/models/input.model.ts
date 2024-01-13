import {
  NativeSyntheticEvent,
  TextInput,
  TextInputChangeEventData,
  TextInputProps,
  View,
} from "react-native";

export interface IInputProps extends TextInputProps {
  label: string;
  value: string;
  onChange: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
}

export interface EventType {
  event: NativeSyntheticEvent<TextInputChangeEventData>;
}
