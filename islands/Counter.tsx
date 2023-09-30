import type { Signal } from "@preact/signals";
import { Button } from "../components/Button.tsx";
import { AppTabHeader } from "../components/AppTabHeader.tsx";

interface CounterProps {
  count: Signal<number>;
}

export default function Counter(props: CounterProps) {
  return (
    <>
      <AppTabHeader />
      <div class="flex gap-8 py-6">
        <Button onClick={() => props.count.value -= 1}>-1</Button>
        <p class="text-3xl">{props.count}</p>
        <Button onClick={() => props.count.value += 1}>+1</Button>
      </div>
    </>
  );
}
