import { NodeComponent } from "../components/nodeComponent";

export const IntegrationNode = ({ id, data }) => {
  // Define the target handle names specific to this node
  const targetHandleNames = [ 'image', 'caption'];
  const sourceHandleNames = ['value'];

  return (
    <NodeComponent
      id={id}
      data={data}
      nodeType="integration"
      inputFields={[
        {
          name: 'socialMediaApp',
          placeholder: 'Select App',
          type: 'select',
          options: ['Facebook', 'Twitter', 'Instagram', 'LinkedIn'], // List of apps to select from
        },
        {
          name: 'appFunctionality',
          placeholder: 'Select Functionality',
          type: 'select',
          options: ['Upload Image'],
        },
        {
          name: 'caption',
          placeholder: 'Write a caption...',
          type: 'text', // Text input for the caption
        },
      ]}
      outputFields={['value']}
      targetHandles={targetHandleNames.length}
      sourceHandles={sourceHandleNames.length}
      targetHandleNames={targetHandleNames}
      sourceHandleNames={sourceHandleNames}
    />
  );
};
