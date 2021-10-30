import { resetAllCats } from "./features/catsSlice";
import { useAppDispatch, useAppSelector } from "./hooks";

const Header = () => {
  const dispatch = useAppDispatch();
  const catState = useAppSelector(state => state.cats);
  const starsTotal = catState.reduce((acc, catItem) => acc + catItem.upvotes, 0)
  return <header>
    <h1>Cat Collective</h1>
    <div>
      <div>Total {starsTotal} ☆</div>
      <div onClick={() => dispatch(resetAllCats())}>Reset all</div>
    </div>
  </header>
};

export default Header;