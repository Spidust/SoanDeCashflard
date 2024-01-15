import React, { useState } from "react";
import List from "./../components/Merge/List";
import Control from "./../components/Merge/Control";
import ImportModal from "../components/Merge/Modal/ImportModal";
import SaveModal from "../components/SaveModal";

import concatMergeData from "../utils/concatMergeData";
import saveToFile from "../utils/saveToFile";
import Copy from "../utils/CopyToClipboard";

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
        rename={(index, newName) =>
          setData((prev) => {
            prev[index][0] = newName;
            return prev;
          })
        }
        copy={(index) => {
          Copy(JSON.stringify(DataProcess([data[index]])));
        }}
      />
      <Control
        import={() => setImportState(true)}
        export={() => setExportState(true)}
      />
    </div>
  );
}

export default Merge;
