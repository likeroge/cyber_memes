import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';
import axios from 'axios'


import Home from './panels/Home';
import Second from './panels/Second';
import Secret from './panels/Secret';
import WelcomePage from './panels/WelcomePage';

const STORAGE = {
	USER_STATUS: 'status'
}

const App = () => {
	const [activePanel, setActivePanel] = useState('intro');
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);
	const [comments, setComments] = useState([])
	const [userScore, setUserScore] = useState(0)
	const [topUsers, setTopUsers] = useState([])
	const[userSeenWelcomePage, setUserSeenWelcomePage] = useState(false)

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		bridge.send("VKWebAppAllowMessagesFromGroup", {"group_id": 201212699, "key": "dBuBKe1kFcdemzB"});
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			const storage = await bridge.send('VKWebAppStorageGet', {
				keys: Object.values(STORAGE)
			})
			console.log(storage);
			const data = {}
			storage.keys.forEach(({key, value}) =>{
				try{
					data[key] = value? JSON.parse(value) : {}
					switch(key){
						case STORAGE.USER_STATUS:
							if(data[key].seenWelcomePage){
								setActivePanel('home');
								setUserSeenWelcomePage(true)
							}
							break
						default:
							break
					}
				} catch(error) {
					console.log(error)
				}
			} )
			try {
				const commentsData = await axios.get('https://bitter-sloth-8.loca.lt/api/v1/getUsersData/') || []
				const userScore = await commentsData.data.filter(c=>c.userID===user.id)[0].comments.length ||0
				
				const topArray = await commentsData.data.sort((a,b)=>{
					return b.comments.length-a.comments.length
				})

				setTopUsers(topArray)
				setUserScore(userScore)
				setComments(commentsData.data)
				
			} catch (error) {
				console.log(error)
			}
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	const seeWelcomePage = async (e) =>{
		try {
			await bridge.send('VKWebAppStorageSet', {
				key: STORAGE.USER_STATUS,
				value: JSON.stringify({
					seenWelcomePage: true
				})
			})
			 setActivePanel('home')
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<View activePanel={activePanel} popout={popout}>
			<Home id='home' fetchedUser={fetchedUser}  go={go} userScore={userScore} topUsers={topUsers} comments={comments}/>
			<WelcomePage id='intro' go={seeWelcomePage} fetchedUser={fetchedUser} userSeenWelcomePage={userSeenWelcomePage}/>
			<Second id='second' go={go} userScore={userScore} />
			<Secret id='secret' go={go} />
		</View>
	);
}

export default App;

