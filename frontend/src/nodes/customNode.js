import { NodeComponent } from "../components/nodeComponent";

export const CustomNode = ({ id, data }) => {
  return (
    <NodeComponent
      id={id}
      data={data}
      nodeType="custom"
      inputFields={[
        { name: 'customField', label: 'Custom Field', type: 'text' },
      ]}
      outputFields={['customOutput']}
      style={{ width: 250, height: 100 }}
    />
  );
};
