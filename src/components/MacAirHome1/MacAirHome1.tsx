import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './MacAirHome1.module.css';
import { ScrollNavigationIcon } from './ScrollNavigationIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 66:4 */
export const MacAirHome1: FC<Props> = memo(function MacAirHome1(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.neurons2Gif}></div>
      <div className={classes.missionClinical}>
        <div className={classes.ourMission}>
          <div className={classes.ourMission2}>our mission</div>
        </div>
        <div className={classes.clinical}>
          <div className={classes.services}>services</div>
        </div>
      </div>
      <div className={classes.resultsmatter}>
        <p className={classes.labelWrapper}>
          <span className={classes.label}>Resultsmatte</span>
          <span className={classes.label2}>r</span>
        </p>
      </div>
      <div className={classes.navigation}>
        <div className={classes.logo}></div>
        <div className={classes.menu}>
          <div className={classes.about}>about</div>
          <div className={classes.research}>Research</div>
          <div className={classes.services2}>services</div>
          <div className={classes.rectangle82}></div>
          <div className={classes.contact}>Contact</div>
          <div className={classes.news}>News</div>
          <div className={classes.results}>Results</div>
        </div>
      </div>
      <div className={classes.scrollNavigation}>
        <ScrollNavigationIcon className={classes.icon} />
      </div>
      <div className={classes.chatIcon}></div>
    </div>
  );
});
