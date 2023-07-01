import { StyleSheet, View, Platform, StatusBar, SafeAreaView } from 'react-native';
import { useState } from 'react';

import BottomNav      from './src/frontend/components/BottomNav.js';
import SignUp         from './src/frontend/account/SignUp.js';
import Entry          from './src/frontend/account/Entry.js';
import Upload 		  from './src/frontend/pages/Upload.js';
import Home           from './src/frontend/pages/Home.js';
import Explore        from './src/frontend/pages/Explore.js';
import Settings       from './src/frontend/pages/Settings.js';
import Notifications  from './src/frontend/pages/Notifications.js';
import { palette } from './src/frontend/styles/global-styles.js';

export default function App() {
  const [page, setPage] = useState('create');

  return (
    <SafeAreaView style={styles.mainContainer}>
        {page === 'home' && <Home/>}
        {page === 'explore' && <Explore/>}
        {page === 'notifications' && <Notifications/>}
        {page === 'settings' && <Settings/>}
        {page === 'create' && <Upload />}
        {page === 'entry' && <Entry setPage={setPage}/>}
        {page === 'signup' && <SignUp setPage={setPage}/>}
        {page !== 'login' && page !== 'signup' && <BottomNav setPage={setPage} />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		backgroundColor: palette.neutral,
		// paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
	}
});