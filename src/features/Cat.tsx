import { useAppDispatch } from "../hooks";
import { CatItem, upVoteCat, resetCat } from "./catsSlice";

const Cat = (props: { cat: CatItem }) => {
  const { cat } = props;
  const dispatch = useAppDispatch();

  return <div className="cat">
    <div className="cat__controls">
      <div onClick={() => dispatch(upVoteCat(cat.id))}>☆</div>
      <div onClick={() => dispatch(resetCat(cat.id))}>Reset</div>
    </div>
    {cat.upvotes > 0 && <div className="cat__upvotes">{cat.upvotes}☆</div>}
    <div className="cat__image" style={{ backgroundImage: `url(https://cataas.com/cat/${cat.id})` }}></div>
  </div>
}

export default Cat;