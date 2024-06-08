import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { FileTitle } from "../file/FileTitle";

export const DataEnrichmentCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput
          label="enrichmentDetails"
          multiline
          source="enrichmentDetails"
        />
        <ReferenceInput source="file.id" reference="File" label="File">
          <SelectInput optionText={FileTitle} />
        </ReferenceInput>
        <div />
      </SimpleForm>
    </Create>
  );
};
