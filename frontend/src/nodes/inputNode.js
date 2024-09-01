import { NodeComponent } from "../components/nodeComponent";

export const InputNode = ({ id, data }) => {
  const targetHandleNames = []; // InputNode has no target handles
  const sourceHandleNames = ['value']; // InputNode has one source handle

  return (
    <NodeComponent
      id={id}
      data={data}
      nodeType="input"
      inputFields={[
        { name: 'inputName', placeholder: 'Name', type: 'text' },
        { name: 'inputType', placeholder: 'Type', type: 'select', options: ['Text', 'File'] },
      ]}
      outputFields={['value']}
      targetHandles={targetHandleNames.length}
      sourceHandles={sourceHandleNames.length}
      targetHandleNames={targetHandleNames}
      sourceHandleNames={sourceHandleNames}
    />
  );
};
