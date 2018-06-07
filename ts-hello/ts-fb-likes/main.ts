import { LikeComponent } from './like.component';

let component = new LikeComponent(10, true);
component.OnClick();

console.log(`CountLikes: ${component.CountLikes}, isSelected: ${component.IsSelected}`);
