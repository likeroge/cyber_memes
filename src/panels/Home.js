import React from "react";
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import Cell from "@vkontakte/vkui/dist/components/Cell/Cell";
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";
import Icon28FavoriteCircleFillYellow from "@vkontakte/icons/dist/28/favorite_circle_fill_yellow";

const Home = ({ id, go, fetchedUser, userScore, topUsers }) => (

  

  <Panel id={id}>
    <PanelHeader>CyberMemes</PanelHeader>
    {fetchedUser && (
      <Group title="User Data">
        <Cell
          before={
            fetchedUser.photo_200 ? (
              <Avatar  src={fetchedUser.photo_200} />
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
            <h4> {userScore} </h4>
            <Icon28FavoriteCircleFillYellow style={{marginLeft: '1rem'}} />
          </Div>
        </Cell>
      </Group>
    )}
      {
        (2===2 ) ?  <Group title="Rating">
        <Cell>
          <h1>Топ 10 пользователей:</h1>
  
              {
                [].map((u)=>{
                  return (
                    <Cell before={u.info.photo_200? (<Avatar src={u.info.photo_200}/>): null } description={u.info.first_name} key={u.userID}>
                     <span>{u.info.first_name} {u.info.last_name}</span> 
                    </Cell>
                  )
                })
              }
        </Cell>
      </Group> 
      : <Cell> <h3>Хорошая новость - ты первый в рейтинге! </h3>
                <p>И единственный...</p>
              
      </Cell>
      }
   

    <Group title="Navigation">
      <Div>
        <Button size="xl" onClick={go} data-to="second">
          Контент
        </Button>
      </Div>
    </Group>
  </Panel>
);

export default Home;
