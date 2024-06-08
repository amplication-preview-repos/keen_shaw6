import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { DataEnrichmentList } from "./dataEnrichment/DataEnrichmentList";
import { DataEnrichmentCreate } from "./dataEnrichment/DataEnrichmentCreate";
import { DataEnrichmentEdit } from "./dataEnrichment/DataEnrichmentEdit";
import { DataEnrichmentShow } from "./dataEnrichment/DataEnrichmentShow";
import { FileList } from "./file/FileList";
import { FileCreate } from "./file/FileCreate";
import { FileEdit } from "./file/FileEdit";
import { FileShow } from "./file/FileShow";
import { DatabaseList } from "./database/DatabaseList";
import { DatabaseCreate } from "./database/DatabaseCreate";
import { DatabaseEdit } from "./database/DatabaseEdit";
import { DatabaseShow } from "./database/DatabaseShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"file-app"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="DataEnrichment"
          list={DataEnrichmentList}
          edit={DataEnrichmentEdit}
          create={DataEnrichmentCreate}
          show={DataEnrichmentShow}
        />
        <Resource
          name="File"
          list={FileList}
          edit={FileEdit}
          create={FileCreate}
          show={FileShow}
        />
        <Resource
          name="Database"
          list={DatabaseList}
          edit={DatabaseEdit}
          create={DatabaseCreate}
          show={DatabaseShow}
        />
      </Admin>
    </div>
  );
};

export default App;
