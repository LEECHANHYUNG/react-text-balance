import { useRef } from "react";
import { useSafeLayoutEffect } from "~/hooks/useSafeLayoutEffect";
import { UseTextBalanceProps } from "./useTextBalance.types";
import { balanceText } from "~/utils/textBalancer";

export function useTextBalance({
  ref,
  text,
  onBalance,
  maxLines,
}: UseTextBalanceProps) {
  const observerRef = useRef<ResizeObserver | null>(null);

  useSafeLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const compute = () => {
      // text balance 알고리즘 실행
      const balanced = maxLines ? balanceText(text, maxLines) : text;
      onBalance(balanced); // TODO: 실제 줄바꿈 적용
    };

    compute();
    observerRef.current = new ResizeObserver(compute);
    observerRef.current.observe(el);

    return () => observerRef.current?.disconnect();
  }, [text, ref, maxLines, onBalance]);
}
