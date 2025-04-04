import { Button, ConfigProvider, Picker } from "@nutui/nutui-react-taro";
import "./index.scss";
import { useState } from "react";
import { View } from "@tarojs/components";
function Index() {
  const [value, setValue] = useState("");

  const [visible, setVisible] = useState(false);

  const [option] = useState([
    { label: "未选择", value: "" },
    { label: "男", value: "男" },
    { label: "女", value: "女" },
  ]);

  return (
    <ConfigProvider>
      <View className="nutui-react-demo">
        <Button type="primary" onClick={() => setVisible(true)}>
          点击选择性别
        </Button>
        <Picker
          title="选择性别"
          visible={visible}
          options={[option]}
          onClose={() => setVisible(false)}
          value={[value]}
        />
      </View>
    </ConfigProvider>
  );
}

export default Index;
