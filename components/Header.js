import { BadgeCheckIcon,CollectionIcon,HomeIcon, LightningBoltIcon,SearchIcon, UserIcon} from "@heroicons/react/outline";
import Image from "next/image";
// {BadgeCheckIcon,CollectionIcon,HomeIcon, LightningBoltIcon,SearchIcon, UserIcon}
import HeaderItems from "./HeaderItems";
const myLoader = () => {
  return `https://image.tmdb.org/t/p/w500/pqUTCleNUiTLAVlelGxUgWn1ELh.png`;
};

const Header = () => {
  return (
   
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItems title="HOME" Icon={HomeIcon} />
        <HeaderItems title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItems title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItems title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItems title="SEARCH" Icon={SearchIcon} />
        <HeaderItems title="ACCOUNT" Icon={UserIcon} />
      </div>
      <Image
        loader={myLoader}
        src="https://image.tmdb.org/t/p/w500/pqUTCleNUiTLAVlelGxUgWn1ELh.png"
        alt="Logo"
        width={150}
        height={50}
      />
    </header>

  );
};

export default Header;
