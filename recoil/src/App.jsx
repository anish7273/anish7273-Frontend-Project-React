import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import "./App.css";
import { jobsAtom, messageAtom, networkAtom, notificationAtom, totalNotiselector } from "./Atoms";

function App() {
  return (
    <RecoilRoot>
    <div>
      <Main />
    </div>
    </RecoilRoot>
  );
}

function Main() {
  const networkNoticount = useRecoilValue(networkAtom);
  const jobsAtomcount = useRecoilValue(jobsAtom);
  const messageAtomcount = useRecoilValue(messageAtom);
  const notificationAtomcount = useRecoilValue(notificationAtom);
   const totalNotiCount = useRecoilValue(totalNotiselector);
  //  const setmessageCount  = useSetRecoil onClick={()=>{useSetRecoilState}}
  return (
    <>
      <button>Home</button>
      <button>
        My Network({networkNoticount >= 100 ? "99+" : networkNoticount})
      </button>
      <button>Jobs({jobsAtomcount >= 100 ? "99+" : jobsAtomcount})</button>
      <button>Mesaaging({messageAtomcount >= 100 ? "99+" : messageAtomcount})</button>
      <button>Notification({notificationAtomcount >= 100 ? "99+" : notificationAtomcount})</button>

      <button >Me : {totalNotiCount}</button>
    </>
  );
}

export default App;
