import React from "react";
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import Button from "@vkontakte/vkui/dist/components/Button/Button";


const WelcomePage = ({id, userSeenWelcomePage, go, fetchedUser}) => {

  return (
    <Panel id={id} centered={true}>
        <PanelHeader>CyberMemes</PanelHeader>
        {(!userSeenWelcomePage && fetchedUser) && <h1>Добро пожаловать в CyberMemes App уважаемый {fetchedUser.first_name} {fetchedUser.last_name}</h1>}
    

        <Group title="Navigation">
        <Div>
          <Button mode={"commerce"} size="xl" onClick={go} data-to="home">
            Далее
          </Button>
        </Div>
      </Group>
    
    </Panel>
  );
};

export default WelcomePage;
