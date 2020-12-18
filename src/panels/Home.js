import React from "react";
import PropTypes from "prop-types";
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import Cell from "@vkontakte/vkui/dist/components/Cell/Cell";
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";
import Icon28FavoriteCircleFillYellow from "@vkontakte/icons/dist/28/favorite_circle_fill_yellow";

const Home = ({ id, go, fetchedUser }) => (
  <Panel id={id}>
    <PanelHeader>CyberMemes</PanelHeader>
    {fetchedUser && (
      <Group title="User Data">
        <Cell
          before={
            fetchedUser.photo_200 ? (
              <Avatar src={fetchedUser.photo_200} />
            ) : null
          }
          description={
            fetchedUser.city && fetchedUser.city.title
              ? fetchedUser.city.title
              : ""
          }
        >
          {`${fetchedUser.first_name} ${fetchedUser.last_name}`}
        </Cell>

        <Cell title="User Coins">
          <h1>Личный счет:</h1>
          <Div style={{ display: "flex", alignItems: "center"}}>
            <h4 style={{}}>12312 </h4>
            <Icon28FavoriteCircleFillYellow style={{marginLeft: '1rem'}} />
          </Div>
        </Cell>
      </Group>
    )}

    <Group title="Rating">
      <Cell>
        <h1>Топ 10 пользователей:</h1>
      </Cell>
    </Group>

    <Group title="Navigation">
      <Div>
        <Button size="xl" onClick={go} data-to="second">
          Контент
        </Button>
      </Div>
    </Group>
  </Panel>
);

Home.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
  fetchedUser: PropTypes.shape({
    photo_200: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    city: PropTypes.shape({
      title: PropTypes.string,
    }),
  }),
};

export default Home;
