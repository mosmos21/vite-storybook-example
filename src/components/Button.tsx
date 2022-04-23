import type { FC } from "react";

type Props = {
  label: string
  onClick?: () => void
}

export const Button: FC<Props> = ({ label, onClick }) => (
  <button onClick={onClick}>
    {label}
  </button>
)

