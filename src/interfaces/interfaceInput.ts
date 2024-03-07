export interface InterfaceInput {
  placeholder: string;
  type: string;
  name: string;
  id: string;
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}