import React from 'react';
import castle from './../../Assets/Images/castle.jpg';
import './index.scss';

const Main = () => {
    return (
        <main>
            <div className="container">
                <figure>
                    <img src={castle} alt="castle" />
                </figure>
                <header>
                    <h1>Lorem Lorem</h1>
                </header>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut scelerisque neque sit amet vestibulum finibus. Cras ac lorem sed nunc commodo luctus eget ac sapien. Sed blandit ornare orci sit amet tincidunt. In in arcu congue, aliquet arcu id, aliquet metus. Vivamus sodales ornare urna ac sollicitudin. Nam maximus lacus in risus semper porta. Phasellus tincidunt condimentum lectus non interdum. Quisque maximus felis mi, vitae consectetur nisi aliquet et. Ut consequat quis nisi in lobortis.</p>        
                <p>Phasellus accumsan ultrices lorem, congue facilisis orci consequat hendrerit. Morbi in libero magna. Praesent et massa ac leo tempus mattis. Donec semper erat consequat est vestibulum, vitae ultricies ligula mattis. Phasellus ac scelerisque ligula, eget tincidunt nibh. In sed malesuada dolor. Sed placerat mollis lacus, sed consectetur mauris pellentesque ac. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer accumsan feugiat risus nec convallis. Maecenas ullamcorper, metus pulvinar tincidunt elementum, libero ligula consequat justo, vitae tincidunt lacus nibh eu orci. Nunc ut sapien metus. Cras in tortor sem. Morbi finibus fringilla metus ac feugiat. Nam eget velit orci. Sed nisl velit, pellentesque a maximus auctor, blandit nec libero. Nam ut sollicitudin enim, id pellentesque ipsum.</p>        
                <p>Phasellus mattis, nisi eu porta suscipit, est urna feugiat lectus, pharetra egestas nulla diam ut ante. Aenean et leo felis. Sed in nulla faucibus, imperdiet eros eu, porta risus. Integer in massa sit amet nibh posuere commodo quis in tortor. Nullam lacinia nibh ac nisi suscipit sagittis id ut eros. Pellentesque leo lorem, pretium quis augue id, bibendum semper massa. Sed sit amet lectus egestas, lacinia libero facilisis, blandit nisl. Quisque vestibulum felis dui, vel posuere est semper id.</p>        
                <p>Fusce ornare nibh ut lacus dignissim sollicitudin. Nullam auctor a tellus sit amet tincidunt. Phasellus tincidunt ante et elit porttitor, et tempor lorem porttitor. Duis ipsum odio, semper id enim ac, posuere ultricies augue. Cras commodo sapien a ullamcorper sodales. Cras congue semper massa. Vivamus leo lorem, feugiat quis ornare id, vulputate posuere dui. Mauris imperdiet velit congue elit laoreet faucibus. Nulla dictum mollis mauris, eu sodales eros interdum tempor.</p>        
                <p>Sed quis orci ac arcu vehicula gravida. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque vestibulum mi vitae tortor suscipit blandit quis vitae diam. Quisque sollicitudin iaculis lectus. Mauris mollis, elit at placerat ornare, lacus nisl tempor erat, vitae auctor nulla diam at est. Nunc malesuada orci erat, ac facilisis nulla placerat sit amet. Proin euismod sem velit, in dignissim risus facilisis sit amet. In pharetra arcu metus, vestibulum ullamcorper lorem blandit ac. Etiam sit amet mauris felis. Nulla quis tristique orci, at interdum neque. Vestibulum laoreet erat ac libero finibus eleifend. Suspendisse sodales pellentesque suscipit. Nulla et arcu quis mi egestas sagittis. Donec pulvinar velit in est vehicula, vitae euismod dui consectetur. Proin ut mauris nec massa commodo eleifend. Donec porttitor eros sed augue ultricies, et pellentesque velit hendrerit. </p>        
            </div>
        </main>
    );
}

export default Main;