import { observer } from "mobx-react-lite";
import { translate } from "services/translation.service";
import { useStorage } from "store";

export const Profile = observer(({ navigation }) => {
    const store = useStorage().primaryUI;
    
    const profileData = [{
        header: "settings",
        name: translate("app_settings"),
        
    },
]
return ()
    
})
