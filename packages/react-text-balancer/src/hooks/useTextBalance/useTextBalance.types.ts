export type UseTextBalanceProps = {
  ref: React.RefObject<HTMLElement | null>;
  text: string;
  onBalance: (result: string) => void;
  maxLines?: number;
};
