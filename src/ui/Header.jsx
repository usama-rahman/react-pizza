import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import UserName from '../features/user/UserName';

const Header = () => {
  return (
    <header className="flex items-center justify-around border-b border-stone-200 bg-yellow-500 px-4 py-3 uppercase sm:px-6 ">
      <Link to="/">Fast React Pizza Co.</Link>
      <SearchOrder />
      <UserName />
    </header>
  );
};
export default Header;
