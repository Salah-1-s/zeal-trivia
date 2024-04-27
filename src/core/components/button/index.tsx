import styled from "styled-components";

const StyledBtn = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition-duration: 0.4s;

  &:hover {
    background-color: #45a049;
  }

  &:disabled {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
    cursor: not-allowed;
  }
`;

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
}

export default function PrimaryButton({ children, ...props }: ButtonProps) {
  return <StyledBtn {...props}>{children}</StyledBtn>;
}
