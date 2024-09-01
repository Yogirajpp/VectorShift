import { NodeComponent } from "../components/nodeComponent";

export const FileNode = ({ id, data }) => {
  const targetHandleNames = [];
  const sourceHandleNames = ['value'];

  return (
    <NodeComponent
      id={id}
      data={data}
      nodeType="file"
      inputFields={[
        { name: 'inputType', placeholder: 'Type', type: 'select', options: ['PDF', 'Image', 'Docs'] },
        { name: 'inputImage', placeholder: 'Type', type: 'file' },
      ]}
      outputFields={['value']}
      targetHandles={targetHandleNames.length}
      sourceHandles={sourceHandleNames.length}
      targetHandleNames={targetHandleNames}
      sourceHandleNames={sourceHandleNames}
    />
  );
};
