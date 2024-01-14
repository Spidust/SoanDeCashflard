import React, { useState } from "react";
import List from "./../components/Merge/List";
import Control from "./../components/Merge/Control";
import ImportModal from "../components/Merge/Modal/ImportModal";
import SaveModal from "../components/Topic/Modal/SaveModal";

import concatMergeData from "../utils/concatMergeData";
import saveToFile from "../utils/saveToFile";

function DataProcess(data) {
  const finalData = {};

  for (let i of data) {
    finalData[i[0]] = i[1];
  }

  return finalData;
}

function Merge() {
  const [data, setData] = useState([]);

  const [importState, setImportState] = useState(false);
  const [exportState, setExportState] = useState(false);

  console.log(DataProcess(data));

  return (
    <div className="h-[100%]">
      {importState && (
        <ImportModal
          quit={() => setImportState(false)}
          import={(data) => setData((prev) => concatMergeData(prev, data))}
        />
      )}
      {exportState && (
        <SaveModal
          quit={() => setExportState(false)}
          export={(name) => {
            const exportData = JSON.stringify(DataProcess(data));
            saveToFile(exportData, name, "json");
          }}
        />
      )}
      <List
        data={data}
        remove={(index) =>
          setData((prev) => prev.filter((i, ind) => ind != index))
        }
      />
      <Control
        import={() => setImportState(true)}
        export={() => setExportState(true)}
      />
    </div>
  );
}

export default Merge;
