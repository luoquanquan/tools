import { Card, Descriptions } from "antd";

const ProjectInfo = ({ url = "https://github.com/luoquanquan/tools" }) => {
  return (
    <Card title="Project Info">
      <Descriptions
        layout="vertical"
        items={[
          {
            key: "github",
            label: "github",
            children: <a href={url}>url</a>,
          },
        ]}
      />
    </Card>
  );
};

export default ProjectInfo;
