import { NodeComponent } from "../components/nodeComponent";

export const TextNode = ({ id, data }) => {
  const targetHandleNames = []; // TextNode has no target handles
  const sourceHandleNames = ['text']; // TextNode has one source handle

  return (
    <NodeComponent
      id={id}
      data={data}
      nodeType="text"
      inputFields={[
        { name: 'textInput', placeholder: 'Enter text...', type: 'text' },
      ]}
      outputFields={['text']}
      targetHandles={targetHandleNames.length}
      sourceHandles={sourceHandleNames.length}
      targetHandleNames={targetHandleNames}
      sourceHandleNames={sourceHandleNames}
    />
  );
};
