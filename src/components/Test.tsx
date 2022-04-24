import type { FC } from "react";

type Props = {
  label: string
}

export const Test: FC<Props> = ({ label }) => (
  <div>
    {label}
  </div>
)
