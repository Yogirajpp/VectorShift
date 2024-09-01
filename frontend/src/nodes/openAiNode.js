import { NodeComponent } from "../components/nodeComponent";

export const OpenAiNode = ({ id, data }) => {
  const targetHandleNames = ['context'];
  const sourceHandleNames = ['value'];

  return (
    <NodeComponent
      id={id}
      data={data}
      nodeType="openAi"
      inputFields={[
          { name: 'inputType', placeholder: 'Model', type: 'select', options: ['generate text', 'generate image'] },
          { name: 'inputType', placeholder: 'Model', type: 'select', options: ['gpt 3.5 turbo', 'gpt 4.o', 'gpt 3.0'] },
      ]}
      outputFields={['value']}
      targetHandles={targetHandleNames.length}
      sourceHandles={sourceHandleNames.length}
      targetHandleNames={targetHandleNames}
      sourceHandleNames={sourceHandleNames}
    />
  );
};
