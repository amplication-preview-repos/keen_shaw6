import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  SelectInput,
} from "react-admin";

import { DatabaseTitle } from "../database/DatabaseTitle";
import { DataEnrichmentTitle } from "../dataEnrichment/DataEnrichmentTitle";

export const FileEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="databases"
          reference="Database"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DatabaseTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="dataEnrichments"
          reference="DataEnrichment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DataEnrichmentTitle} />
        </ReferenceArrayInput>
        <div />
        <TextInput label="filename" source="filename" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
