import React, { useState } from "react";
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import Slider from "@vkontakte/vkui/dist/components/Slider/Slider";

import { Cell, FormLayout } from "@vkontakte/vkui";

const Secret = ({ id, go }) => {
  const [value, setValue] = useState(0);

  return (
    <Panel id={id}>
      <PanelHeader>Секрет</PanelHeader>

      <FormLayout>
        <Slider
          min={0}
          max={5}
          step={1}
          value={Number(value)}
          onChange={(val) => setValue(val)}
          top="Квадрат числа:"
          bottom={`${value}`}
        />

        <Cell>
          Квадрат числа {value} = {value * value}
        </Cell>
      </FormLayout>

      <Group title="Navigation">
        <Div>
          <Button size="xl" onClick={go} data-to="home">
            Домой
          </Button>
        </Div>
      </Group>
    </Panel>
  );
};

export default Secret;
