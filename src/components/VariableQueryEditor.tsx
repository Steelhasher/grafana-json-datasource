import { TimeRange } from '@grafana/data';
import { JsonDataSource } from 'datasource';
import React from 'react';
import { JsonApiQuery } from '../types';
import { QueryEditor } from './QueryEditor';

interface VariableQueryProps {
  query: JsonApiQuery;
  onChange: (query: JsonApiQuery, definition: string) => void;
  datasource: JsonDataSource;
  range: TimeRange;
}

// VariableQueryEditor is used to query values for a dashboard variable.
export const VariableQueryEditor: React.FC<VariableQueryProps> = (props) => {
  const { query, onChange } = props;

  const saveQuery = (newQuery: JsonApiQuery) => {
    if (newQuery) {
      onChange(newQuery, newQuery.fields[0].jsonPath);
    }
  };

  return (
    <QueryEditor
      {...props}
      onRunQuery={() => {}}
      onChange={saveQuery}
      query={query}
      limitFields={2}
      editorContext="variables"
    />
  );
};
