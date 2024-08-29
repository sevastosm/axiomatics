import { useState } from "react";
import FileUploader from "./components/FileUploader/FileUploader";
import AppContainer from "./components/Layout/AppContainer";
import Header from "./components/Layout/Header";
import Tree from "./components/Tree/Tree";

function App() {
  const [data, setData] = useState<any>(null);
  const onDataParsed = (data: any) => {
    setData(data);
  };

  return (
    <div className="App">
      <AppContainer>
        <Header />
        <FileUploader onDataParsed={onDataParsed} />
        {data && <Tree data={data} />}
      </AppContainer>
    </div>
  );
}

export default App;
