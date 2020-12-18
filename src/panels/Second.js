import React from "react";
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import Button from "@vkontakte/vkui/dist/components/Button/Button";

const Second = ({ id, go, coins }) => {
  const content1 = "Контент 1";
  const content2 = "Контент 2";
  let contentText = content1;

  if (coins === 3) {
    contentText = content2;
  }

  return (
    <Panel id={id}>
      <PanelHeader>{contentText}</PanelHeader>
      <Group title="Navigation">
        <Div>
          <Button size="xl" onClick={go} data-to="home">
            Домой
          </Button>
          {contentText === content2 && (
            <Button
              size="xl"
              style={{ marginTop: "1rem" }}
              onClick={go}
              data-to="secret"
            >
              Секрет
            </Button>
          )}
        </Div>
      </Group>
    </Panel>
  );
};

export default Second;
