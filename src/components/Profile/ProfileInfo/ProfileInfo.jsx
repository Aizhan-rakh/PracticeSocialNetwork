import React from 'react'; //we should import jsx, react is library from node modules
import classes from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader/>
    }

  return (
    <div>
      <div>
        <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" />
      </div>
      <div className={classes.descriptionBlock}>
          <img src={props.profile.photos.large}/>
        ava+description
      </div>
    </div>
  )
}

export default ProfileInfo;