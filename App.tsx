import { ConfigProvider } from "./src/context/ConfigProvider";
import { Screen } from "./src/modules/Screen";

export const App = () => {
  return (
    <ConfigProvider>
      <Screen />
    </ConfigProvider>
  );
}
