import { useDispatch, useSelector } from "react-redux";
import Tile from "./Tile";
import { useEffect } from "react";
import Modal from "../../ui/Modal";
import DetailsPane from "../details/DetailsPane";
import Loader from "../../ui/Loader";

function TilesListLayout() {
  const days = useSelector((state) => state.search.days);
  const isLoading = useSelector(state=>state.search.status) === 'loading'
  return (
    <div className="flex  flex-row flex-wrap items-start justify-center gap-x-5 gap-y-8 md:gap-y-5 md:mt-9 px-3 mt-2 mb-5">
      {isLoading && <Loader />}
      <Modal>
      {days.map((day) => (
        <>
          <Modal.Open open={`tile-${day.index}`} key={`${day.index}-open`}>
            <Tile day={day} key={day.index} />
          </Modal.Open>
          <Modal.Window name={`tile-${day.index}`} key={`${day.index}-window`}>
            <DetailsPane day={day} key={`${day.index}-details`}/>
          </Modal.Window>
        </>
        ))}
        </Modal>
        
    </div>
  );
}

export default TilesListLayout;
