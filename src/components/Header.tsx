import { FC } from "react";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return <header className="p-2 bg-violet-300">전국 박물관 정보</header>;
};

export default Header;
