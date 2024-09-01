
import { NodeComponent } from "../components/nodeComponent";

export const OutputNode = ({ id, data }) => {
  const targetHandleNames = ['value']; // OutputNode has one target handle
  const sourceHandleNames = []; // OutputNode has no source handles

  return (
    <NodeComponent
      id={id}
      data={data}
      nodeType="output"
      inputFields={[
        { name: 'outputName', label: 'Name', type: 'text' },
        { name: 'outputType', label: 'Type', type: 'select', options: ['Text', 'Image'] },
      ]}
      outputFields={['value']}
      targetHandles={targetHandleNames.length}
      sourceHandles={sourceHandleNames.length}
      targetHandleNames={targetHandleNames}
      sourceHandleNames={sourceHandleNames}
    />
  );
};
