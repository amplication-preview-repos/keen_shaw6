import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { FileTitle } from "../file/FileTitle";

export const DatabaseCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <ReferenceInput source="file.id" reference="File" label="File">
          <SelectInput optionText={FileTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
