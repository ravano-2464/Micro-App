export interface InterfaceModal {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}