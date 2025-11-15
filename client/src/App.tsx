import { Toaster } from "react-hot-toast";
import TanstackRouterProvider from "./Router/TanstackRouterProvider";
import { AppliedVacanciesProvider } from "./Context/AppliedVacanciesContext";

const App = () => {
  return (
    <AppliedVacanciesProvider>
      <div>
        <Toaster position="top-center" />
        <TanstackRouterProvider />
      </div>
    </AppliedVacanciesProvider>
  );
};

export default App;
