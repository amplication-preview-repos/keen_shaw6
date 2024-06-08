import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { FileTitle } from "../file/FileTitle";

export const DataEnrichmentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
