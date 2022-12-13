import { EditModeToggle } from "../components/util/editMode-toggle";
import "../styles.css";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <EditModeToggle />
    </>
  );
};

export default App;
