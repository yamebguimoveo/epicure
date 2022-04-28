import React from 'react'
import { sensitivitiesIcons } from '../../../utils/icons';

export const IconsSection = () => {
  return (
    <section className='icons-section flex-column flex-center gap-30'>
      <h2 className='section-title'> THE MEANING OF OUR ICONS:</h2>
      <div className='icons flex-row gap-110'>
        {sensitivitiesIcons.map((icon) => {
          return (
            <div className='icon gap-30 flex-column flex-center '>
              <img src={icon.iconUrl} alt={`${icon.iconMeaning}-icon`}></img>
              <p>{icon.iconMeaning}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
